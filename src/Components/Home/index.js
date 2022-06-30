import './styles.css'

const Home = ({setIsLogged}) =>{
    

    return (
        <div className='body'>
        <div className='home-container'>
            
            <div className='infos-div'>
                <img src={require('./logo.png')}/>
                <h3>Centralize o controle das suas finanças</h3>
                <p>De forma rápida e segura</p>
                <button onClick={() => setIsLogged(true)}>Iniciar</button>
            </div>

            <div className='img-div'>
                <img src={require('./imgdiv.png')}/>
            </div>
        </div>
        </div>
    )

}
export default Home

