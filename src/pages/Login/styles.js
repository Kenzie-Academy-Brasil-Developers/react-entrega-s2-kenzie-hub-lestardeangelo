import styled from "styled-components";
import { keyframes } from "styled-components";


export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 75vh;
    background: var(--black);
    justify-content: center;
`;
export const Content = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 700px;
`;
const ApperFromRigth = keyframes`
    from{
        opacity: 0;
        transform: translateX(50px);
    }

    to{
        opacity: 1;
        transform: translateX(0px)
    }

`;

export const AnimationContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${ApperFromRigth} 1s;
    
    form{

        min-width: 350px;
        text-align: center;
        background: var(--grey3);
        height: 430px;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: space-around;
        -ms-flex-pack: space-around;
        justify-content: space-evenly;
        -ms-flex-align: center;
        align-items: center;
        flex-wrap: wrap;

        @media(max-width: 320px){
            min-width: 290px;
        }
    }

    h1{
        margin-bottom: 10px;
        margin-top: 10px;
        font-size: 30px;
    }

    p{
        margin: 8px;

        a{
            font-weight: bold;
            color: var(--red);
        }
    }

    span{
        font-size: 12px;
        color: var(--grey1);
    }

    button{
        margin-top: 10px;
        margin-bottom: 15px;
    }

`

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

`
