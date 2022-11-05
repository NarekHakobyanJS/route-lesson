import React from 'react'
import {useAuth} from "../hook/useAuth"
import {useNavigate} from "react-router-dom"

function CreatePost() {
  const {signout} = useAuth()
  const navigate = useNavigate()
  return (
    <div>
        <h1>Create Post </h1>
        <button onClick={() => signout(() => navigate("/"), {replace : true})}>Log out</button>
    </div>
  )
}

export default CreatePost