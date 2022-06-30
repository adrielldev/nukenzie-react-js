import {useState} from 'react'
import Form from './Components/Form';
import Card from './Components/Card';
import Header from './Components/Header'
import List from './Components/List'
import TotalMoney from './Components/TotalMoney'
import Filter from './Components/Filter';
import Home from './Components/Home';
import './App.css'

function App() {

  const [isLogged,setIsLogged] = useState(false)

  const [listTransactions,setListTransactions] = useState([])

  const [listAll, setListAll] = useState(listTransactions)


  const addTransaction = (transaction) =>{

   
    const list = [...listTransactions,transaction]
    setListTransactions(list)
    setListAll(list)
  }

  const removeTransaction = (transaction) => {
    const list = listTransactions.filter(tran=>transaction!==tran)
    setListTransactions(list)
    setListAll(list)
  }

  const showAll = () =>{
      setListTransactions(listAll)
  }

  const showEntries= () =>{
    
    const list = listAll.filter(transaction=>transaction.type==='Entrada');
   
    setListTransactions(list)
  }

  const showExits = () =>{
    const list = listAll.filter(transaction=>transaction.type!=='Entrada');
    setListTransactions(list)
  }

  

  return (
    <>
    {isLogged ? (
    <>
    <Header setIsLogged={setIsLogged}/>
      <Filter showAll={showAll} showEntries={showEntries} showExits={showExits}/>

      <div className='main-container'>
        <div className='form-money-container'>
          <Form listTransactions={listTransactions} setListTransactions={setListTransactions} addTransaction={addTransaction}/>
          <TotalMoney listTransactions={listTransactions}/>
      
        </div>
        <List listTransactions={listTransactions} removeTransaction={removeTransaction}/>
        
      </div>
      </>) : <Home setIsLogged={setIsLogged}/>}  
      
    </>
    
  );
}

export default App;
