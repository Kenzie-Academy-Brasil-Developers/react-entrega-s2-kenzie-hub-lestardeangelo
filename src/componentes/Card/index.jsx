import {Container, H1, Span, TechsContainer} from './styles'
import api from '../../services/api'
import { toast } from "react-toastify";
import Button from '../Button';

function Card({card}){

    const user = JSON.parse(localStorage.getItem('USER_TOKEN'))

    const deletCard = (id) =>{
        api.delete(`/users/techs/${id}`, {
            headers: {
              Authorization: `Bearer ${user}`,
            },
          });
          toast.success("Tecnologia deletada");
    }

    return <Container>
        {card.map(item =>(<TechsContainer key={item.id}>
            <H1>{item.title}</H1>
            <Span>{item.status}</Span>
            <Button id={item.id} onClick={() => deletCard(item.id)}>x</Button>
        </TechsContainer>))}
    </Container>
}

export default Card