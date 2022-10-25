
import { useLayoutEffect, useState } from "react"


export default function Visor ({initialValue}){
    const [sizeFont, setSizeFont] = useState(4)
    useLayoutEffect(() => {
        String(initialValue).length >= 7 ? setSizeFont(2) : setSizeFont(4)
        

    }, [initialValue])

    return  <div className="show-results" style={{fontSize: `${sizeFont}rem` }}>{initialValue} </div>

}


