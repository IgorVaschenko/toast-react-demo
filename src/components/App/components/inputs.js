import styled from "styled-components";

import theme from "@/theme/theme";

export const Input = styled.input`
    padding:  ${theme.spaces[6]}px;
    margin:  ${theme.spaces[8]}px;
    outline: ${theme.spaces[3]}px;
    background-color: ${theme.colors.textColor};
    border: ${theme.spaces[3]}px;
    border-radius: ${theme.spaces[6]}px;
    cursor: pointer;
`
export const InputColor = styled.input`
    width: ${theme.width[4]}px;
    margin: ${theme.spaces[7]}px;
    border-radius: ${theme.spaces[7]}px;
    margin-right:  ${theme.spaces[13]}px;
    justify-content: flex-end;
    cursor: pointer;
`
export const CheckInput = styled.input`
    width: ${theme.width[9]}px;
    height: ${theme.height[3]}px;
    margin-left: ${theme.spaces[9]}px;
    filter: sepia(100%) brightness(80%) hue-rotate(170deg) saturate(70%) contrast(300%);
    cursor: pointer;
`
