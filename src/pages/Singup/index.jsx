import { Container, Content, AnimationContainer, Header } from "./styles";
import  Button  from "../../componentes/Button";
import {Link, useHistory, Redirect} from "react-router-dom"
import Input from "../../componentes/Input";
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { toast } from "react-toastify";
import api from "../../services/api";
import Select from "../../componentes/Select";

function Singup({authenticated}){

    const schema = yup.object().shape({
        name: yup.string('').required('Campo obrigatório!'),
        email: yup.string('').email('Email inválido').required('Campo obrigatório!'),
        password: yup.string('').min(6, 'Mínimo de 6 digitos').required('Campo obrigatório!'),
        passwordConfirm: yup.string('').oneOf([yup.ref('password')], 'Senhas diferentes').required('Campo obrigatório!'),
        course_module: yup.string('').required('Campo obrigatório')
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
        const user = {
                email: data.email,
                password: data.password,
                name: data.name,
                bio: "undefined",
                contact: "undefined",
                course_module: data.course_module,
            }
            
        api
        .post('/users', user)
        .then((response) => {
            toast.success('Sucesso ao se cadastrar')
            history.push('/login')

        })
        .catch((err) => toast.error('Erro ao se cadastrar'))
    }

    if(authenticated){
        return <Redirect to='/login'/>
    }

    return(
        <>
        <Header>
            <header>
                <h1>Kenzie Hub</h1>
                <Button onClick={() => returnPage('/')}>Voltar</Button>
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
                        type='password'
                        error={errors.password?.message}
                        />

                        <Input 
                        register={register('passwordConfirm')} 
                        name='passwordConfirm' 
                        label='Confirmar senha' 
                        placeholder='Digite novamente sua senha' 
                        type='password'
                        error={errors.passwordConfirm?.message}

                        />
                        
                        <Select
                            register={register('course_module')}
                            name = 'Selecione o Módulo/Quarter'
                            id='courseModule'
                            label='Selecione o Módulo/Quarter'
                        >
                            <option></option>
                            <option>Primeiro Módulo</option>
                            <option>Segundo Módulo</option>
                            <option>Terceiro Módulo</option>
                            <option>Quarto Módulo</option>
                            <option>Quinto Módulo</option>
                            <option>Sexto Módulo</option>

                        </Select>

                        <Button type='submit'>Cadastrar</Button>
                        
                        <p> Já tem uma conta? Faça seu <Link to='/Login'>login</Link></p>

                    </form>
                </AnimationContainer>
            </Content>
        </Container>
        </>
    )
}

export default Singup