import {Container, Content} from './styles'
import Button from '../../componentes/Button/index'
import { useHistory, Redirect } from 'react-router'

function Home({authenticated}){

    const history = useHistory()

    const handleNavigation = (path) => {
        return history.push(path)
    }

    if(authenticated){
        return <Redirect to='/login'/>
    }

    return <Container>
        <Content>
            <h1>Kenzie-Hub</h1>
            <span>O melhor gerenciador de tecnologias do mercado</span>
            <div>
               <Button onClick={() => handleNavigation('/singup')} whiteSchema = 'false'>Cadastre-se</Button>
               <Button onClick={() => handleNavigation('/login')}>Login</Button>
            </div>
        </Content>
    </Container>
}

export default Home