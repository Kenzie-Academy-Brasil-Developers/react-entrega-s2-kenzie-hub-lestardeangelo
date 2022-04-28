import styled from "styled-components";

export const Container = styled.div`
    background: transparent;
    text-align: left;    
    border-radius: 4px;
    border: 0px solid var(--grey2);
    color: var(--grey0);
    margin: 8px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    width: 28vh;

  div {
    font-size: 13px;
    margin: 2px;
    margin-bottom: 5px;
  }
`;

export const SelectContainer = styled.select`
    color: var(--grey1);
    color: var(--grey1);
    height: 48px;
    border-radius: 4px;
    background: var(--grey2);
    padding: 0.5rem;
`;