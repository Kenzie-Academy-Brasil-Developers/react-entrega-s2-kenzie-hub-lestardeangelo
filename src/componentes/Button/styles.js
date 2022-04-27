import styled from "styled-components";

export const Container = styled.button`
    background: ${(props) => (props.whiteSchema ? '#FF577F' : '#868E96')};
    color: var(--grey0);
    height: 45px;
    border-radius: 8px;
    border: 2px solid var(--black);
    margin-top: 16px;
    width: 60%;
    

`