/* export const gotHomePage = (history) => {
    history.push(`/`)
} */

export const gotoLoginPage = (history) => {
    history.push('/login')
}

export const gotoRegisterPage = (history) => {
    history.push('/register')
}

export const gotoFeedPage = (history) => {
    history.push('/')
}

export const gotoPostPage = (history, id) => {
    history.push(`/post/${id}`)
}

export const gotoCreatePostPage = (history) => {
    history.push('/createpost')
}