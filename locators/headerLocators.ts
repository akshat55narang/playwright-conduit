const LOGGED_OUT_USER_NAVBAR_UL = 'ul[show-authed="false"]'
export default {
    appLogoLink: 'a[class="navbar-brand ng-binding"]',
    unAuthorizedUsersButtonList: LOGGED_OUT_USER_NAVBAR_UL,
    unAuthorizedUserHomeLink: `${LOGGED_OUT_USER_NAVBAR_UL} a[ui-sref="app.home"]`,
    unAuthorizedUserSignInLink: `${LOGGED_OUT_USER_NAVBAR_UL} a[ui-sref="app.login"]`,
    unAuthorizedUserSignUpLink: `${LOGGED_OUT_USER_NAVBAR_UL} a[ui-sref="app.register"]`,
    unAuthorisedBannerParagrapgh: 'div[show-authed="false"] p'
}