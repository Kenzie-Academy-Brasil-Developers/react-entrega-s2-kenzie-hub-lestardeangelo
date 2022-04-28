import Button from "../../componentes/Button";
import {Container,Header, Nav, Form} from "./styles";
import {useHistory, Redirect } from "react-router-dom";

function Dashboard({authenticated}){

    const history = useHistory()

    const returnPage = (path) =>{

        return history.push(path)

    }

    if(!authenticated){
        return <Redirect to='/login'/>
    }

    return <>
    <Header>
        <header>
            <h1>Kenzie Hub</h1>
            <Button onClick={() => returnPage('/')}>Voltar</Button>
        </header>
    </Header>
    <Nav>
        <h1>Olá, Lestar</h1>
        <span>Primeiro módulo  (Introdução ao Frontend)</span>
    </Nav>
    <Container>
        <div>
            <h2>Tecnologias</h2>
            <Button>+</Button>
        </div>
        <Form>
            <h1>ola</h1>
        </Form>
    </Container>
    </>
}
export default Dashboard