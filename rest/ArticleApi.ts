import { expect } from "@playwright/test";
import { StatusCodes } from "http-status-codes";
import { ARTICLES_API } from "../constants/RestContants";
import { BaseApi } from "./BaseApi";

export class ArticleApi extends BaseApi {

    constructor() {
        super();
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

    async getAllArticles() {
        const response = await (await (this.baseRequest())).get(ARTICLES_API);
        await expect(response.status()).toBe(StatusCodes.OK);     

        return (await response.json()).articles;
    }

    async getArticleByTitle(title: string) {
        const articles = await this.getAllArticles();

        return articles.filter(article => article.title === title);
    }

    async deleteArticleByTitle(title: string) {
        const articles = await this.getArticleByTitle(title);
        
        for (const article of articles) {
            const response = await (await this.baseRequest()).delete(`${ARTICLES_API}/${article.slug}`);
            await expect(response.status()).toEqual(StatusCodes.NO_CONTENT);
        }
        console.log(`Deleted ${articles.length} with ${title}!!`);
        
    }

    async deleteArticleByAuthor(authorName: string) {
        const articles = await this.getArticlesByAuthor(authorName);

        for (const article of articles) {
            const response = await (await this.baseRequest()).delete(`${ARTICLES_API}/${article.slug}`);
            await expect(response.status()).toEqual(StatusCodes.NO_CONTENT);
        }

    }
}