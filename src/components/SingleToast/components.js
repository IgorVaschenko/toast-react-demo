import styled from "styled-components";

import {
  toast_in_right,
  toast_from_top,
  toast_from_bottom,
  toast_in_left,
} from "@/theme/keyFrames";
import theme from "@/theme/theme";

export const SingleToaster = styled.div`
  margin: ${theme.spaces[7]}px;
  border-radius: ${theme.spaces[11]}px;
  box-shadow: ${theme.boxShadows[2]}px ${theme.boxShadows[2]}px ${theme.boxShadows[2]}px ${theme.colors.shadow};
  opacity: ${theme.opacity[9]};
  color: ${theme.colors.textColor};
  background-color:${({ backgroundColor }) => backgroundColor ? backgroundColor : '#ffffff'};
  padding: ${({ padding }) => padding ? padding + 'px' : '20px'};

  &:hover {
    box-shadow: ${theme.boxShadows[3]}px ${theme.boxShadows[3]}px ${theme.boxShadows[3]}px ${theme.colors.shadow};
    opacity: ${theme.opacity[7]};
  };

  animation-duration: ${theme.spaces[4]}s;
  animation-name:${({ animation }) =>
    animation === 'toast_from_top' && toast_from_top ||
    animation === 'toast-from-left' && toast_in_left ||
    animation === 'toast-from-right' && toast_in_right ||
    animation === 'toast_from_bottom' && toast_from_bottom
  };
`;

export const ImageToastDiv = styled.div`
  margin-right: ${theme.spaces[9]}px;
  margin-bottom: ${theme.spaces[9]}px;
  float: left;
  pointer-events: none;
`;

export const Image = styled.img`
  height: ${theme.height[5]}px;
  width: ${theme.width[2]}px;
  pointer-events: none;
`;

export const TitleToast = styled.div`
  max-height: ${theme.height[7]}px;
  width: ${theme.width[4]}px;
  margin-left:${theme.spaces[13]}px;
  padding: ${theme.spaces[5]}px;
  font-family: ${theme.font};
  font-weight: ${theme.fontWeight[1]};
  font-size: ${theme.fontSize[3]}rem;
  color:${({ color }) => color ? color : '#000'};
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  display:block;
`;

export const DescrToast = styled.div`
  max-height: ${theme.height[6]}px;
  padding: ${theme.spaces[5]}px;
  font-family: ${theme.font};
  font-size: ${theme.fontSize[1]}rem;
  font-weight: ${theme.fontWeight[0]};
  color:${({ color }) => color ? color : '#ffffff'};
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  display:block;
`;

export const ButtonCloseToast = styled.button`
  height: ${theme.height[4]}px;
  width: ${theme.width[2]}px;
  background-color:${({ backgroundColor }) => backgroundColor};
  float: right;
  cursor:pointer;
  border:none;
  outline:none;
  background-size: 100%;

  &:hover {
    opacity: ${theme.opacity[4]};
  }
`;