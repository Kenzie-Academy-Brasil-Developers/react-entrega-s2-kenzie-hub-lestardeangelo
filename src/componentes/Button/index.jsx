import { Container } from "./styles"

const Button = ({children, whiteSchema, ...rest}) => (

    <Container whiteSchema={whiteSchema} {...rest}>
        {children}
    </Container>

)

export default Button