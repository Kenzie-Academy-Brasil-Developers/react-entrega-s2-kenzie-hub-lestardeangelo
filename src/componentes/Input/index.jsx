import {Container, InputContainer} from "./styles"


function Input({label, register, name, error, ...rest}){

    return <Container>
        <div>{label} {!!error && <span> - {error}</span>}</div>
        <InputContainer isErrored={!!error}>
        <input {...register} {...rest}/>
        </InputContainer>
    </Container>

}

export default Input