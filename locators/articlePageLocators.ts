const bannerContainerDiv = '//div[@class="container"]'
export default {
    articleHeader: 'h1',
    bannerEditArticleLink: `${bannerContainerDiv}//a[normalize-space()='Edit Article']`,
    bannerDeleteArticleButton: `${bannerContainerDiv}//button[normalize-space()='Delete Article']`,
    articleBodyParagraph: '//div[@class="row article-content"]//p'
}