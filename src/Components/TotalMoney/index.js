import './styles.css'

const TotalMoney = ({listTransactions}) =>{

   
    const sum =listTransactions.reduce(
       function(acc,atual){
           
           return atual.type === 'Entrada' ?  acc + atual.value : acc - atual.value
       },0
    )
    return (

        <div className='container-totalMoney'>
            <div className='div-valor-total'>
                <h2>Valor total:</h2>
                 <span id="valor-total">{sum},00R$</span>
                </div>

                <h4>O valor se refere ao saldo</h4>


        </div>
    )
}

export default TotalMoney
