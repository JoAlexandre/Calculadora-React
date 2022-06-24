/* eslint-disable no-unused-expressions */
/* eslint-disable no-self-assign */
/* eslint-disable no-unused-vars */
import Opcao from "./Opcao";
import stylesheet from './index.css'
import { createContext, useEffect, useLayoutEffect, useState } from "react";
import Visor from "./Visor";
const ValueContext = createContext()

function Calculadora (){
    let [values, setValues] = useState({
        valorA: 0,
        valorB: 0,
        operacao: ''
    })
    

    function calc(obj){
        let result
        switch (obj.operacao) {
            case '+':
                result = obj.valorA + obj.valorB
                    break
            case '-':
                result = obj.valorA - obj.valorB
                    break
            case '*':
                result = obj.valorA * obj.valorB
                    break
            case '/':
                obj.valorB === 0 ? 
                    result = 0
                :  
                    result = obj.valorA / obj.valorB
                break
            default:
                result = obj.valorA
                break
        }
        return result
    }

    useEffect(() => {
        // console.log(values)
    }, [values])
    
    useLayoutEffect(() => { 
        if(values.valorA > Number.MAX_SAFE_INTEGER){
            alert('Voce excedeu o Limite maximo da Calculadora de: \n'+Number.MAX_SAFE_INTEGER)
            setValues({...values, 
                valorA: 0,
                valorB: 0,
                operacao: '' })
        }else{
            String(values.valorA).length > 9 ? setValues({...values, valorA: Number(values.valorA).toExponential(3)}) : ''

        }

    },[values])
    
    const onClick = (value) => {
        let obj = values
        switch (value) {
            case '+/-':
                obj.valorA !== 0 ?
                    obj.operacao && !obj.operacao.match('=') ?
                        obj = ({...values, valorB: values.valorB !== 0 ? -(values.valorB): 0}) 
                    : 
                        obj = ({...values, valorA: -(values.valorA), operacao: ''}) 
                : 
                    obj = ({...values, valorA: values.valorA !== 0 ? -(values.valorA): 0}) 
                break;
            case '%':
                obj.valorA !== 0 ?
                    obj.operacao && !obj.operacao.match('=') ?
                        obj = ({...values, valorB: values.valorA*values.valorB/100}) 
                    : 
                        obj = ({...values, valorA: values.valorA/100}) 
                :
                obj = values
                break;
            case 'AC':
                obj = {valorA: 0, valorB: 0, operacao:''}
                break;
            case 'C':
                obj = {valorA: 0, valorB:0 , operacao:''}
                break;
            case '+':
                obj = ({...values, valorA: obj.operacao ? calc(obj) : calc({...obj, operacao: '+'}), valorB: 0, operacao: '+'})
                break;
            case '-':
                obj = ({...values, valorA: obj.operacao ? calc(obj) : calc({...obj, operacao: '-'}), valorB: 0, operacao: '-'})
                break;
            case 'X':
                obj = ({...values, valorA: calc(obj), valorB: 0, operacao: '*'})
                break;
            case '/':
                obj = ({...values, valorA: calc(obj) , valorB: 0,  operacao:'/'})
                break;
            case ',':
                values.valorA && values.operacao ? 
                    (String(obj.valorB).includes('.') ? obj = {...values} : obj = ({...values, valorB: `${values.valorB}.`}))
                    : 
                    (String(obj.valorA).includes('.') ? obj = {...values}: obj = ({...values, valorA: `${values.valorA}.`}))

                break;
            case '=':
                obj = ({...values, valorA: calc(obj) , valorB: 0, operacao: '='})
                break;            
            default:
                values.operacao ? 
                    values.operacao.match('=') ?
                        obj = ({...values, valorA: value, operacao: ''})
                    :
                        obj = ({...values, valorB: String(values.valorB).length === 9 ? values.valorB : Number(values.valorB +""+value)})
                :
                    obj = ({...values, valorA: String(values.valorA).length === 9 ? values.valorA : Number(values.valorA +""+value)})
                

                break;
        }
        setValues(obj)
    }
    
    return(
        
        <div className="container-calculadora">
            <Visor initialValue={values.valorB ? values.valorB : values.valorA ? values.valorA : 0}/>
            <Opcao data={values.resultado !== 0 || values.valorA !== 0 ? 'C': 'AC'} styles={'backgroundColor2'} onClick={onClick}/>
            <Opcao data={'+/-'} styles={'backgroundColor2'} onClick={onClick}/>
            <Opcao data={'%'} styles={'backgroundColor2'} onClick={onClick}/>
            <Opcao data={'/'} styles={'backgroundColor3'} onClick={onClick}/>
            <Opcao data={7} styles={'backgroundColor1'} onClick={onClick}/>
            <Opcao data={8} styles={'backgroundColor1'} onClick={onClick}/>
            <Opcao data={9} styles={'backgroundColor1'} onClick={onClick}/>
            <Opcao data={'X'} styles={'backgroundColor3'} onClick={onClick}/>
            <Opcao data={'4'} styles={'backgroundColor1'} onClick={onClick}/>
            <Opcao data={'5'} styles={'backgroundColor1'} onClick={onClick}/>
            <Opcao data={'6'} styles={'backgroundColor1'} onClick={onClick}/>
            <Opcao data={'-'} styles={'backgroundColor3'} onClick={onClick}/>
            <Opcao data={'1'} styles={'backgroundColor1'} onClick={onClick}/>
            <Opcao data={'2'} styles={'backgroundColor1'} onClick={onClick}/>
            <Opcao data={'3'} styles={'backgroundColor1'} onClick={onClick}/>
            <Opcao data={'+'} styles={'backgroundColor3'} onClick={onClick}/>
            <Opcao data={'0'} double={true} styles={'backgroundColor1'} onClick={onClick}/>
            <Opcao data={','}  styles={'backgroundColor1'} onClick={onClick}/>
            <Opcao data={'='} styles={'backgroundColor3'} onClick={onClick}/>
        </div>
    )
}
export default Calculadora