import React from 'react'
import { RegisterPage } from './Components/RegisterPage'
import { UserListPage } from './Components/UserListPage'

export default class App extends React.Component {
state = {
  page: true
}

changePage = () => {
  this.setState({ page: !this.state.page })
}

render(){
  return (
    <div>
      <h1>Labenusers</h1>
      {this.state.page ? <RegisterPage /> : <UserListPage />}
      <button onClick={this.changePage}>Troca a pagina</button>
    </div>
  )
}
}
  

