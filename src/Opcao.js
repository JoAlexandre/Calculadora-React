/* eslint-disable no-undef */

import { useState } from "react";

const Opcao = ({data, double = false, styles, onClick}) =>{
    const showValues = (e) => console.log(e);
    
    return(
        <>
            {                
            double ? 
                <button onClick={(e => onClick(e.target.value))} value={data} className={"circulo circulo2 "  + styles}> {data}</button>
                :
                <button onClick={(e => onClick(e.target.value))} value={data} className={"circulo "  + styles}> {data}</button>
            }
        </>
    )
}

export default Opcao