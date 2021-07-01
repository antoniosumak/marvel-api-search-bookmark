import styled from 'styled-components';
import { boxShadow, colors } from '../../lib/styles/theme';
import { AiFillStar } from 'react-icons/ai';

export const CardWrapper = styled.div`
  position: relative;
  box-shadow: ${boxShadow};
  padding: 20px;
  border-radius: 10px;

  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 4px;
    background-color: ${colors.orange};
    top: 0;
    left: 0;
    transition: 0.4s ease-in-out;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 4px;
    background-color: ${colors.orange};
    bottom: 0;
    right: 0;
    transition: 0.4s ease-in-out;
  }

  &:hover {
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      background-color: ${colors.orange};
      top: 0;
      left: 0;
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      background-color: ${colors.orange};
      bottom: 0;
      right: 0;
    }
  }
`;

export const ImageWrapper = styled.figure`
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const HeroName = styled.h2`
  text-align: center;
  padding: 16px 0px;
  color: ${colors.black};
`;

export const BookmarkIcon = styled(AiFillStar)`
  color: ${(props) =>
    props.isbookmarked === 'true' ? `${colors.orange}` : `${colors.black}`};
  font-size: 24px;
  ${(props) => props.hidden && 'display: none'};
  &:hover {
    cursor: pointer;
  }
`;

export const BookmarkRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 12px;
`;
