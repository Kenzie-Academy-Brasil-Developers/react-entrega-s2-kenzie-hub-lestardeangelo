import styled from "styled-components";

export const Container = styled.div`
    width: 36vh;
    height: 45%;
    position: fixed;
    top: 15%;
    display: ${((props) => props.display)};
    flex-direction: column;

    form{
        display: flex;
        align-items: center;
        height: 37vh;
        background: var(--grey3);
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
    }
`;


export const Header = styled.div`



    header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        height: 8vh;
        background: var(--grey2);
    }
 
    h1{
        color: var(--grey0);
        font-size: 15px;
    }

    button{
        width: 25px;
        height: 24px;
        color: var(--grey0);
        background-color: transparent;
        margin-top: 0px;
        border: none;
    }

`
