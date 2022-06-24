import { useEffect, useLayoutEffect, useRef } from "react";

export default function UseLayoutEffectTutorial(){
    const inpRef = useRef()
    useLayoutEffect(()=>{
        console.log(inpRef.current.value);
    }, []);

    useEffect(() => {
        inpRef.current.value = 'JOSEAAAAA'
    }, []);

    return <div>
        <input type="text" value={'JOSE'} ref={inpRef} />
    </div>
}