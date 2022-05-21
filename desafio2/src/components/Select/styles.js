import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  & + & {
    margin-top: 10px;
  }
`;

export const Label = styled.label`

`

export const SelectStyled = styled.select`
  height: 35px;
  background-color: transparent;
  color: #fff;
  font-size: 0.9rem;
`;

export const Option = styled.option`
  background-color: #202020;
  font-family: inherit;
`;
