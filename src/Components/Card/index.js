import './styles.css'
const Card = ({transaction,removeTransaction}) => {


    return (
        
            <div>
            
            {
                transaction.type.toLowerCase() === 'entrada' ?
                (<div className='cointaner-card-entry'>

                    <div className='card-titulo'>
                <h2>{transaction.description}</h2>
                <p>{transaction.type}</p>
            </div>

            <div className='card-price-button'>
               <span>{transaction.value}</span>
                <button className='card-delete-button'  onClick={()=>removeTransaction(transaction)}><img src={require('./trash.png')}/></button>
            </div>
            </div>) :
                (<div className='cointaner-card-exit'>

                <div className='card-titulo'>
            <h2>{transaction.description}</h2>
            <p>{transaction.type}</p>
        </div>

        <div className='card-price-button'>
           <span>{transaction.value}</span>
            <button className='card-delete-button' onClick={()=>removeTransaction(transaction)}><img src={require('./trash.png')}/></button>
        </div>
        </div>)
             }
        </div>

    )
}

export default Card