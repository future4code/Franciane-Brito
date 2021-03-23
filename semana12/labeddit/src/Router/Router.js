import React from 'react'
import LoginPage from '../screens/LoginPage/LoginPage'
import RegisterPage from '../screens/RegisterPage/RegisterPage'
import PostPage from '../screens/PostPage/PostPage'
import FeedPage from '../screens/FeedPage/FeedPage'
import ErrorPage from '../screens/ErrorPage/ErrorPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../Components/Header/Header'
import CreatePostPage from '../screens/CreatePostPage/CreatePostPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/login'>
                    <LoginPage />
                </Route>

                <Route exact path='/register'>
                    <RegisterPage />
                </Route>

                <Route exact path='/'>
                    <FeedPage />
                </Route>

                <Route exact path='/post/:id'>
                    <PostPage />
                </Route>

                <Route exact path='/createpost'>
                    <CreatePostPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router