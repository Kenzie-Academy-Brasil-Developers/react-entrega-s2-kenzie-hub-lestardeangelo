import { Container } from "./styles"

const Button = ({children, whiteSchema = false, ...rest}) => (

    <Container whiteSchema={whiteSchema} {...rest}>
        {children}
    </Container>

)

export default Button