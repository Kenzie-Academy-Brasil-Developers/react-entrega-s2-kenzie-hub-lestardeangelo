import styled, {css} from "styled-components"


export const Container = styled.div`
    text-align: left;
    div{
        
        font-size: 13px;
        margin: 2px;
        margin-bottom: 5px;
    
        span{
            color: var(--red)
        }
    }
`;

export const InputContainer = styled.div`

    background: var(--grey2);
    border-radius: 4px;
    border: 0px solid var(--grey2);
    color: var(--grey0);
    margin: 8px;
    display: flex;
    -webkit-transition: 0.4s;
    transition: 0.4s;

    input{

        background: transparent;
        align-items: center;
        flex: 1;
        border: none;
        color: var(--grey1);
        padding: 1rem;
        &::placeholder{
            color: var(--grey1);
            font-size: 13px;
            
        }

    }

 
`