// import styled from "styled-components";

// export const container = styled.div``

import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;


`
export const Content = styled.div`

    max-width: 400px;
    height: 420px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    h1{
        text-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
        font-size: 4rem;
        color: var(--red1);
    
    }

    div{
        flex: 1;
        display: flex;
        margin-top: 2rem;
        padding: 1rem;

        button + button{
            margin-left: 1rem;
        }
    }

    span{
        margin-bottom: 2rem;
        font-size: 1.8rem;
        flex-wrap: wrap;
        margin-top: 2rem;
    }

`