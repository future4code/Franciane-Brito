import axios from 'axios'
import { baseAxios, BASE_URL } from '../Contants/urls'

export const login = (body, clearFields, history) => {
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clearFields()
            history.push('/')
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export const register = (body, clearFields, history) => {
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            history.push('/')
            clearFields()
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
}

export const votesCounter = (id, voteValue, detailsPost) => {
    const body = {
      direction: voteValue
    }
      axios.put(`${BASE_URL}/posts/${id}/vote`, body, baseAxios)
        .then((res) => {
          detailsPost()
        })
        .catch((err) => {
        /*   alert("Tente novamente :)") */
        })
    }

export const votesCounterComments = (id, voteValue, idPost, detailsPost) => {
  const body = {
      direction: voteValue
    }
      axios.put(`${BASE_URL}/posts/${idPost}/comment/${id}/vote`, body, baseAxios)
        .then((res) => {
          detailsPost()
        })
        .catch((err) => {
          alert(err.response.data)
        })
    }

export const createComment = (body, clearFields, detailsPost, id) => {
    axios.post(`${BASE_URL}/posts/${id}/comment`, body, baseAxios)
      .then((res) => {
        alert("Seu comentário foi publicado :)")
        detailsPost()
        clearFields()
      })
      .catch((err) => {
        alert(err.response.data)
      })
  }