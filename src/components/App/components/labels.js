import styled from "styled-components";

import theme from "@/theme/theme";

export const Label = styled.label`
    margin-left: ${theme.spaces[13]}px ;
    margin-top: ${theme.spaces[9]}px ;

    font-size: ${theme.fontSize[0]}rem;
    text-align: left;
`
export const OptionsLabel = styled.label`
    margin-left: ${theme.spaces[13]}px ;
    margin-top: ${theme.spaces[12]}px ;

    font-size: ${theme.fontSize[0]}rem;
    text-align: left;
`
export const AutoLabel = styled.div`
    margin: ${theme.spaces[10]}px ${theme.spaces[0]}px ${theme.spaces[4]}px ${theme.spaces[9]}px;
    font-size: ${theme.fontSize[1]}rem;
    display:flex;
    text-align: left;
    cursor: pointer;
`
export const CheckLabel = styled.label`
    font-size: ${theme.fontSize[0]}rem;  
    margin-top: ${theme.spaces[9]}px;
    margin-left: ${theme.spaces[8]}px;
    display: flex;
    cursor: pointer;
`
export const LabelIco = styled.label`
    font-size: ${theme.fontSize[1]}rem;  
    margin-top: ${theme.spaces[9]}px;
    margin-left: ${theme.spaces[8]}px;
    cursor: pointer;

    &: hover{   
        text-decoration: underline ;
    }
`
export const TitleIco = styled.label`
    font-size: ${theme.fontSize[1]}rem;  
    margin-top: ${theme.spaces[7]}px;
    margin-left: ${theme.spaces[1]}px;
`
