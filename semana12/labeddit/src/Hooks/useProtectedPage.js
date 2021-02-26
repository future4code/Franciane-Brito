import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { gotoLoginPage } from '../Router/Coordinator'

const useProtectedPage = () => {
    const history = useHistory()
    useLayoutEffect(() =>{
        const token = localStorage.getItem('token')
        if(!token){
            gotoLoginPage(history)
        }
    }, [history])
}

export default useProtectedPage