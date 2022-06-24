import { useEffect } from "react"

export default function Child({returnComment}){
    useEffect(() => {
        console.log('useEffec');
    },[returnComment])
    return <>{returnComment()}</>
}