import styled from 'styled-components';
import { breakpoints, colors } from '../../lib/styles/theme';

export const SearchbarWrapper = styled.div`
  width: 100%;
  margin: 32px 0px;

  @media screen and (${breakpoints.tablet}) {
    max-width: 500px;
    margin: 32px auto;
  }
`;

export const SearchbarInput = styled.input`
  width: 100%;
  padding: 10px 0px;
  padding-left: 10px;
  border: 1px solid ${colors.black};
  border-radius: 10px;

  &:focus {
    border: 1px solid ${colors.orange};
    outline: none;
  }
`;
