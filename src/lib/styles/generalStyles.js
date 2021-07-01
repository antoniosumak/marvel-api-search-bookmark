import styled from 'styled-components';
import { breakpoints, colors } from './theme';
import { BsTrashFill } from 'react-icons/bs';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding-top: 24px;

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const TrashRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const TrashCan = styled(BsTrashFill)`
  font-size: 24px;
  color: ${colors.orange};
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    filter: brightness(80%);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 16px;
  background-color: ${colors.orange};
  color: white;
  border: 1px solid ${colors.orange};
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${colors.orange};
    border: 1px solid ${colors.orange};
    background-color: ${colors.white};
    cursor: pointer;
  }

  @media screen and (${breakpoints.tablet}) {
    width: 250px;
    margin: 0 auto;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 32px 0px;
`;
