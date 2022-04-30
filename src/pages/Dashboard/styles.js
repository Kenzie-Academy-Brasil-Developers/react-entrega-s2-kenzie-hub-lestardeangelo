import styled from "styled-components"

export const Container = styled.section`
        display: flex;
        align-items: center;
        background: var(--black);
        justify-content: flex-start;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100vw;

    div{
        
        height: 50px;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        flex-direction: row;
        
    }

    button{
        background: var(--grey3);
        color: var(--grey0);
        height: 50%;
        border-radius: 8px;
        border: 2px solid var(--black);
        margin-top: 0px;
        width: 5vh;
    }
`;
export const Header = styled.div`

    header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        height: 75px;
    }
 
    h1{
        color: var(--red1)
    }

    button{
        width: 68px;
        height: 32px;
        color: var(--grey0);
        background-color: var(--grey3);
        margin-top: 0px;
    }

`

export const Nav = styled.section`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    height: 75px;
    width: 100vw;
    border: solid var(--grey3);
    justify-content: space-around;

    span{

        font-size: 15px;
        color: var(--grey1);
    }

    h1{
        font-size: 2rem;
        color: var(--grey0);
    
    }
`;

export const Form = styled.form`

    display: flex;
    width: 85%;
    height: 65vh;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
    background: var(--grey3);
    padding: 15px;
    padding-top: 25px;

`

export const FormContainer = styled.div`

    display:flex;
    flex-direction: column;
    align-items: center;
    height: 0px;

    button{
        width: 25px;
        height: 24px;
        color: var(--grey0);
        background-color: transparent;
        margin-top: 0px;
        border: none;
    }

`
export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

`
