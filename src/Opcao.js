
const Opcao = ({data, double = false, styles, onClick}) =>{
    
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