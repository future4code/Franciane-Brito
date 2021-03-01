import React, { useState } from 'react'
import axios from 'axios'
import GlobalStateContext from './GlobalStateContext'
import { baseAxios, BASE_URL } from '../Contants/urls'
/* import useRequestData from './' */

const GlobalState = (props) => {
    const [name, setName] = useState([])
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})
    const [coloButton, setColorButton] = useState('')

    const [countVotes, setCountVotes] = useState(0)

    const getPosts = () => {
        axios.get(`${BASE_URL}/posts`, baseAxios)
            .then((res) => {
                setPosts(res.data.posts)
            })
            .catch((err) => {
                alert('Ocorreu um erro tente novamente')
            })
    }

    const states = { name, posts, post, countVotes }
    const setters = { setName, setPosts, setPost, setCountVotes }
    const requests = { getPosts }

    const data = { states, setters, requests }

    return (
        <GlobalStateContext.Provider value={data} >
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState