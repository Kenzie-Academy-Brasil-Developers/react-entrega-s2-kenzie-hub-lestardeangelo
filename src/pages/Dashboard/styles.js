import styled from "styled-components"

export const Container = styled.section`
        display: flex;
        align-items: center;
        background: var(--black);
        justify-content: flex-start;
        height: 100vh;
        flex-direction: column;
        flex-wrap: wrap;
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
    justify-content: space-evenly;
    height: 75px;
    width: 100vw;
    border: solid var(--grey3);

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
    height: 65%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
    background: var(--grey3);

`