import { Container, Content, AnimationContainer, Header } from "./styles";
import  Button  from "../../componentes/Button";
import Input from "../../componentes/Input";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import Api from "../../Services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login(){

    const schema = yup.object().shape({
        name: yup.string('').required('Campo obrigatório!'),
        email: yup.string('').email('Email inválido').required('Campo obrigatório!'),
        password: yup.string('').min(6, 'Mínimo de 6 digitos').required('Campo obrigatório!'),
        passwordConfirm: yup.string('').oneOf([yup.ref('password')], 'Senhas diferentes').required('Campo obrigatório!'),

    })

    const {
        register,
        handleSubmit, 
        formState:{ errors },
    } = useForm({
        resolver: yupResolver(schema)
    })

    const history = useHistory()

    const submit = (data) => {
        const user = {
                email: data.email,
                password: data.password,
                name: data.name,
                bio: "undefined",
                contact: "undefined",
                course_module: "Segundo Módulo (Frontend avançado)",
            }
            console.log(user)
        Api
        .post('/users', user)
        .then((response) => {
            toast.success('Sucesso ao se cadastrar')
            history.push('/login')
        })
        .catch((err) => toast.error('Erro ao se cadastrar'))
    }

    const returnPage = (path) =>{

        return history.push(path)

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