import { Container, Content, AnimationContainer, Header } from "./styles";
import  Button  from "../../componentes/Button";
import {Link} from "react-router-dom"
import Input from "../../componentes/Input";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

function Singup(){

    const schema = yup.object().shape({
        name: yup.string('').required('Campo obrigatório!'),
        email: yup.string('').email('Email inválido').required('Campo obrigatório!'),
        password: yup.string('').min(8, 'Mínimo de 8 digitos').required('Campo obrigatório!'),
        passwordConfirm: yup.string('').oneOf([yup.ref('password')], 'Senhas diferentes').required('Campo obrigatório!'),

    })

    const {
        register,
        handleSubmit, 
        formState:{ errors },
    } = useForm({
        resolver: yupResolver(schema)
    })

    const submit = (data) =>{
        console.log(data)
    }

    return(
        <>
        <Header>
            <header>
                <h1>Kenzie Hub</h1>
                <Button>voltar</Button>
            </header>
        </Header>
        <Container>
            <Content>
                <AnimationContainer>
                    <form onSubmit={handleSubmit(submit)}>
                        <h1>Crie sua conta</h1>
                        <span>Rapido e grátis, vamos nessa</span>
                        
                        <Input 
                        register={register('name')} 
                        name='name' 
                        label='Nome' 
                        placeholder='Digite aqui seu nome' 
                        error={errors.name?.message}
                        />

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

                        <Input 
                        register={register('passwordConfirm')} 
                        name='passwordConfirm' 
                        label='Confirmar senha' 
                        placeholder='Digite novamente sua senha' 
                        type='password'
                        error={errors.passwordConfirm?.message}

                        />

                        <Input 
                        type= 'select'
                        label='Selecionar modulo'
                        />

                        <Button type='submit' >Cadastrar</Button>
                        
                        <p> Já tem uma conta? Faça seu <Link to='/Link'>login</Link></p>

                    </form>
                </AnimationContainer>
            </Content>
        </Container>
        </>
    )
}

export default Singup