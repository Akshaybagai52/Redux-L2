import { useState } from 'react'
import './App.css'
import PostsList from './features/posts/postsList'
import AddPostForm from './features/posts/AddPostForm'

function App() {

  return (
      <div>
      <AddPostForm />
       <PostsList />
      </div>
     
  )
}

export default App
