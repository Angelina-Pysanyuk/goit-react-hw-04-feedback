import styled from 'styled-components';

export const ButtonFbWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ButtonFb = styled.button`
  width: 90px;
  height: 40px;
  border: none;
  border-radius: 6px;
  color: #8b7e74;
  background-color: #ece8dd;
  font-size: 18px;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 4px 4px 4px rgb(0 0 0 / 15%);
  &:hover,
  &:focus {
    border-color: #579bb1;
    background-color: #579bb1;
    color: #ffffff;
  }
`;
