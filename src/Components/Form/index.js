import { useState  } from "react";
import './styles.css'
import List from "../List";


const Form = ({listTransactions,setListTransactions,addTransaction}) => {

    const [userInput, setUserInput] = useState({
        description:'',
        value:0,
        type:'Entrada',
    })
    
    const [description,setUserDescription] = useState('');
    const [type,setUserType] = useState('');
    const [value,setUserValue] = useState(0);

    // Condição é verdadeira && 'faça tal coisa'
    // array?.map()
        
    return (

        <form onSubmit={(event)=>event.preventDefault()}>
            <label id="descricao">Descrição:</label>
            
            <input type="text" className="input-form" placeholder="Digite a descrição"
            
            onChange={(event) => setUserDescription(event.target.value)}
           required ></input>
            <span >Ex:compra de roupas</span>
            <label id="valor">Valor:</label>
            <input required type="number"  placeholder="100,00 R$" className="input-form" onChange={(event)=>setUserValue(Number(event.target.value))}></input>
            <label> Tipo de Valor:</label>
            <select required onChange={event=>setUserType(event.target.value)}> 
                <option >Entrada</option>
                <option>Saída</option>
                
            </select>
            
            
            <button type="submit" className="button-form" onClick= {() => {addTransaction({description,type,value})}}>Inserir Valor</button>
        </form>
    )

}

export default Form