import { expect } from "@playwright/test";
import { StatusCodes } from "http-status-codes";
import { ARTICLES_API } from "../constants/RestContants";
import { BaseClient } from "./BaseClient";

export class ArticleClient extends BaseClient {

    constructor() {
        super();
    }

    async getAllArticles() {
        const response = await (await (this.baseRequest())).get(ARTICLES_API);
        await expect(response.status()).toBe(StatusCodes.OK);

        return (await response.json()).articles;
    }

    async getArticleByTitle(title: string) {
        const articles = await this.getAllArticles();
        return articles.find(article => article.title === title);
    }

    async getArticlesByAuthor(authorName: string) {
        const response = await (await (this.baseRequest())).get(ARTICLES_API, {
            params: {
                author: authorName
            }
        });
        await expect(response.status()).toBe(StatusCodes.OK);
        const json = await response.json();
        return json.articles;
    }

    async deleteArticlesByTitle(titles: Array<string>) {
        for(const title of titles) {
            await this.deleteArticleByTitle(title);
        }
    }

    async deleteArticleByTitle(title: string) {
        const article = await this.getArticleByTitle(title);
        if (!article) {
            console.log(`Article with title ${title} already deleted!!`)
            return;
        }
        const response = await (await this.baseRequest()).delete(`${ARTICLES_API}/${article.slug}`);
        
        await expect(response.status()).toEqual(StatusCodes.NO_CONTENT);
        console.log(`Deleted ${article.slug} with ${title}!!`);
    }

    async deleteArticleByAuthor(authorName: string) {
        const articles = await this.getArticlesByAuthor(authorName);
        if(articles.length === 0) {
            console.log(`No articles from author ${authorName} exist!!`);
            return;
        }

        for (const article of articles) {
            const response = await (await this.baseRequest()).delete(`${ARTICLES_API}/${article.slug}`);
            await expect(response.status()).toEqual(StatusCodes.NO_CONTENT);
        }

    }

    async createArticleIfNotExisting(title, description = "Default description", body = "Default body", tags = []) {
        const article = await this.getArticleByTitle(title);

        if(!article) {
            const createdArticle = await this.createArticle(title, description, body, tags);
            return createdArticle.slug;
        }
        console.log(`Article ${title} not created as it already exists!!`)
        return article.slug;
    }

    async createArticle(title, description, body , tags) {
        const response = await (await this.baseRequest()).post(ARTICLES_API, {
            data: {
                "article": {
                    "title": title,
                    "description": description,
                    "body": body,
                    "tagList": tags
                }
            }
        });
        await expect(response.status()).toBe(StatusCodes.OK);
        console.log(`Create article with title = ${title}!`)
        return (await response.json()).article;
    }
}