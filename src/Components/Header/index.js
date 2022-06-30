import './styles.css'

const Header = ({setIsLogged}) => {


    return (
        <div className='header-container'>

            <img src={require('./logo.png')}/>

            <button className='button-inicio' onClick={()=>setIsLogged(false)}>Início</button>


        </div>
    )

}

export default Header

