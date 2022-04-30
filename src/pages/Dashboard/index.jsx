import Button from "../../componentes/Button";
import {Container,Header, Nav, Form, FormContainer, ModalContainer} from "./styles";
import {useHistory, Redirect, useParams } from "react-router-dom";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../Modal";
import Card from "../../componentes/Card";


function Dashboard({authenticated, setAuthenticated}){

    const [display, setDisplay] = useState("none");
    const [card, setCard] = useState([])

    const user = JSON.parse(localStorage.getItem('USER_ID'))
    
    useEffect(() => {
        api
        .get(`/users/${user.id}`)
        .then((response) => {
            setCard(response.data.techs)
        })
        .catch((err) => console.log(err))
    }, [card])

    const history = useHistory()

    const returnPage = (path) =>{

        setAuthenticated(false)
        localStorage.clear('USER_TOKEN')
        return history.push(path)

    }

    if(!authenticated){
        return <Redirect to='/login'/>
    }

      const exit = ()=>{

        if (display === "none") {
            setDisplay("flex");
          }

        if (display === "flex") {
            setDisplay("none");
        }
    }

    return <>
    <ModalContainer>
        <Modal exit={exit} display={display}>
                        
        </Modal>
    </ModalContainer>
    
    <Header>
        <header>
            <h1>Kenzie Hub</h1>
            <Button onClick={() => returnPage('/')}>Voltar</Button>
        </header>
    </Header>
    <Nav>
        <h1>Olá, {user.name} </h1>
        <span>{user.course_module}</span>
        
    </Nav>
    <Container>
        <div>
            <h2>Tecnologias</h2>
            <Button onClick={() => exit()}>+</Button>
        </div>
        <FormContainer>
            <Form>
              <Card card={card}/>
            </Form>
        </FormContainer>
    </Container>

    </>
}
export default Dashboard