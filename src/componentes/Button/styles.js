import styled from "styled-components";

export const Container = styled.button`
    background: ${(props) => (props.whiteSchema ?  '#868E96': '#FF577F')};
    color: var(--grey0);
    height: 45px;
    border-radius: 8px;
    border: 2px solid var(--black);
    margin-top: 16px;
    width: 60%;
    

`