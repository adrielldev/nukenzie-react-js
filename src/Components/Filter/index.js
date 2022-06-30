import './styles.css'

const Filter = ({showAll,showEntries,showExits}) => {

    // gambiarra
    const cleanSelected =  () =>{
        const buttons = document.getElementsByClassName('button-filter')
        for(let i =0;i<buttons.length;i++){
            buttons[i].classList.remove('button-selected')
        }
    }

    return (
        <div className="container-filtro">
            <h2>Resumo Financeiro</h2>
            <ul className="container-buttons">
                <button className='button-filter' onClick={(event) => {
                    cleanSelected()
                    event.target.classList.add('button-selected')
                    showAll()
                    }}>
                    Todos
                </button>

                <button className='button-filter' onClick={(event) => {
                    cleanSelected()
                    event.target.classList.add('button-selected')
                    showEntries()
                    }}>Entradas</button>

                <button className='button-filter' onClick={(event) => {
                    cleanSelected()
                    event.target.classList.add('button-selected')
                    showExits()
                }}> Despesas</button>

            </ul>

        </div>

    )
}
export default Filter