import React from 'react'
import FormCreatePost from '../FeedPage/FormCreatePost'
import { ContainerForm } from './styled'
const CreatePostPage = () => {
    return (
        <ContainerForm>
        <h2>Crie seu post :)</h2>
        <FormCreatePost />
      </ContainerForm>
    )
}
export default CreatePostPage