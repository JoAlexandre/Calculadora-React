import { useContext } from "react"
import { AppContext } from "./ContextTutorial"

export default function User(props){
    const {username} = useContext(AppContext)
    return <h1>User: {username}</h1>
}