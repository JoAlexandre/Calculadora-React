import { useCallback, useState } from "react";
import Child from "./Child";

export default function CallbackTutorial(){
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState("KKKKKKK alexandre aprendendo react")
    const returnComment = useCallback(() => data, [data])
    return(
        <div>
            <Child returnComment={returnComment}/>
            <br />
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            {toggle && <p>toggle</p>}
        </div>
    )
}