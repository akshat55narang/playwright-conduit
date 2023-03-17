const bannerContainerDiv = '//div[@class="container"]';
const mainViewContainerDiv = '//div[@class="article-actions"]';

export default {
    articleHeader: 'h1',
    bannerEditArticleLink: `${bannerContainerDiv}//a[normalize-space()='Edit Article']`,
    bannerDeleteArticleButton: `${bannerContainerDiv}//button[normalize-space()='Delete Article']`,
    articleBodyParagraph: '//div[@class="row article-content"]//p',
    mainViewEditArticleLink: `${mainViewContainerDiv}//a[normalize-space()='Edit Article']`,
    mainViewDeleteArticleButton: `${mainViewContainerDiv}//button[normalize-space()='Delete Article']`,
    commentTextArea: '//textarea[@placeholder="Write a comment..."]',
    postCommentButton: '//button[normalize-space()="Post Comment"]',
    commentParagraph: '//comment//p'
}