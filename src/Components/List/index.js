import './styles.css'
import Card from '../Card'

const List = ({listTransactions,removeTransaction}) => {



    return (
        <div>

            {listTransactions.length>0 ?  <ul className='list-transactions'>
        {
            
            listTransactions.map((transaction,index) => <Card removeTransaction={removeTransaction} transaction={transaction} key={index}/>)
        }
        </ul> : <div className="div-no-transactions">
            <h3>Você ainda não possui nenhum lançamento</h3>
            <img src={require('./notransactions.png')}/>
            </div>}
       
        </div>
    )

}

export default List