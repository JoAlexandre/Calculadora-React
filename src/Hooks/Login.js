import { useContext } from "react"
import { AppContext } from "./ContextTutorial"

export default function Login(){
    const  { setUsername } = useContext(AppContext)
    return <input type="text" name="" id="" onChange={e => setUsername(e.target.value)}/>
}