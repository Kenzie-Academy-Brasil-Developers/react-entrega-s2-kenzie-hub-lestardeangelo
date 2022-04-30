import { Container, Content, AnimationContainer, Header } from "./styles";
import  Button  from "../../componentes/Button";
import Input from "../../componentes/Input";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import api from "../../services/api";
import { toast } from "react-toastify";
import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login({authenticated, setAuthenticated}){

    const schema = yup.object().shape({
        email: yup.string('').email('Email inválido').required('Campo obrigatório!'),
        password: yup.string('').min(6, 'Mínimo de 6 digitos').required('Campo obrigatório!'),

    })

    const {
        register,
        handleSubmit, 
        formState:{ errors },
    } = useForm({
        resolver: yupResolver(schema)
    })

    const history = useHistory()

    const returnPage = (path) =>{

        return history.push(path)

    }

    const submit = (data) => {
        api
        .post('/sessions', data)
        .then((response) => {
            const {token, user} = response.data
            localStorage.setItem('USER_TOKEN', JSON.stringify(token))
            localStorage.setItem('USER_ID', JSON.stringify(user))
            
            history.push('/dashboard')
            setAuthenticated(true)
        })
        .catch((err) => toast.error('Email ou senha invalidos'))
    
    }

    if(authenticated){
        return <Redirect to='/dashboard'/>
    }
  
    return(
        <>
        <Header>
            <header>
                <h1>Kenzie Hub</h1>
            </header>
        </Header>
        <Container>
            <Content>
                <AnimationContainer>
                    <form onSubmit={handleSubmit(submit)}>
                        <h1>Login</h1>

                        <Input 
                        register={register('email')} 
                        name='email' 
                        label='Email' 
                        placeholder='Digite aqui seu email'
                        error={errors.email?.message}
                        />

                        <Input 
                        register={register('password')} 
                        name='password' 
                        label='Senha' 
                        placeholder='Digite aqui sua senha' 
                        type='password'error={errors.password?.message}
                        />

                        <Button type='submit'>Entrar</Button>
                        <span>Ainda não possui uma conta?</span>
                        <Button onClick={() => returnPage('/singup')} whiteSchema = 'false'>Cadastre-se</Button>

                    </form>
                </AnimationContainer>
            </Content>
        </Container>
        </>
    )
}

export default Login