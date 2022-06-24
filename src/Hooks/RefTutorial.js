import { useRef } from "react"
export default function RefTutorial(){
    const inputRef = useRef(null)

    const onClick = (a) => {
        console.log(inputRef.current.value);
        inputRef.current.focus()
        inputRef.current.value = ''
    }
    return(
        <div className="teste">
            <h1>José</h1>
            <input ref={inputRef} type="text" placeholder="Ex..."/>
            <button onClick={onClick}>ChangeN?ame</button>
        </div>
    )
}