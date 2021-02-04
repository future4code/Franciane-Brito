import React from 'react'
import axios from 'axios'
import { baseUrl, axiosConfig } from '../Parametros'

export class UserListPage extends React.Component {
    state = {
        users: []
    }

    componentDidMount = () => {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get(baseUrl, axiosConfig)
            .then((resposta) => {
                this.setState({ users: resposta.data })
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    deleteUser = (id) => {
        axios.delete(`${baseUrl}/${id}`, axiosConfig)
            .then((reposta) => {
                this.getAllUsers()
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    render() {
        return (
            <div>
                <h2>Lista de Usuários</h2>
                {this.state.users.map((user) => {
                    return (
                        <div>
                            <p>{user.name}</p>
                            <button onClick={() => { this.deleteUser(user.id) }}>x</button>
                        
                        </div>
                    )
                })}
            </div>
        )
    }



}