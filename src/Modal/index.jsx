import { Container, Header } from "./styled";
import Button from "../componentes/Button";
import Input from "../componentes/Input";
import Select from "../componentes/Select";
import {Link, useHistory, Redirect} from "react-router-dom"
import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { toast } from "react-toastify";
import api from "../services/api";

function Modal({exit, display}){

    const schema = yup.object().shape({
        title: yup.string('').required('Campo obrigatório!'),
        status: yup.string('').required('Campo obrigatório')
    })

    const {
        register,
        handleSubmit, 
        formState:{ errors },
    } = useForm({
        resolver: yupResolver(schema)
    })
    
    const token = JSON.parse(localStorage.getItem('USER_TOKEN'))

    const submit = (data) => {
        api
        .post('/users/techs', data,{
            headers: {
                Authorization: `Bearer ${token}`,
              },
        })
        .then((response) => {
            toast.success('Sucesso ao cadastrar tecnologia')
        })
        .catch((err) => toast.error('Erro ao cadastrar tecnologia'))
        exit()
    }

    return<>

    <Container display={display}>
        <Header>
            <header>
                <h1>Cadastrar tecnologia</h1>
                <Button onClick={() => exit()}>x</Button>
            </header>
        </Header>
            <form onSubmit={handleSubmit(submit)}>

                    <Input 
                        register={register('title')} 
                        name='title' 
                        label='Nome'
                        error={errors.name?.message}
                    />

                    <Select
                        register={register('status')}
                        name = 'Selecionar status'
                        id='courseModule'
                        label='Selecionar status'
                    >
                        <option></option>
                        <option>Iniciante</option>
                        <option>Intermediário</option>
                        <option>Avançado</option>
                      
                    </Select>

                    <Button type='submit'>Cadastrar tecnologia</Button>

                </form>
    </Container>
</>
}

export default Modal