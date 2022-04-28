
import { Container, SelectContainer } from "./style";

const Select = ({label, register, name, ...rest }) => {
  return (
    <Container>
      <div>{name}</div>
      <SelectContainer {...rest} {...register}>
      </SelectContainer>
    </Container>
  );
};

export default Select

