import styled from "styled-components";

import theme from "@/theme/theme";

export const ButtonCustom = styled.button`
    width: ${theme.width[8]}px;
    height: ${theme.height[5]}px;
    color: ${theme.colors.textColor};
    font-size: ${theme.fontSize[1]}rem;
    margin: ${theme.spaces[3]}px ${theme.spaces[9]}px;
    border-radius: ${theme.spaces[8]}px;
    background: ${({ bgcolor }) => bgcolor};
    opacity: ${theme.opacity[10]};
    border: ${theme.spaces[3]}px;
    outline: ${theme.spaces[3]}px;
    font-weight: bold;
    cursor: pointer;

    &: hover{   
        opacity: ${theme.opacity[6]};
    }
`
export const ButtonGetToast = styled.button`
    width: ${theme.width[4]}px;
    height: ${theme.height[4]}px;
    color: ${theme.colors.textColorDark};
    font-size: ${theme.fontSize[1]}rem;
    margin: ${theme.spaces[5]}px ${theme.spaces[9]}px;
    border-radius: ${theme.spaces[8]}px;
    opacity: ${theme.opacity[10]};
    border: ${theme.spaces[3]}px;
    outline: ${theme.spaces[3]}px;
    font-weight: bold;
    cursor: pointer;

    &: hover{   
        opacity: ${theme.opacity[6]};
    }
`
export const ButtonStory = styled.button`
    width: ${theme.width[4]}px;
    height: ${theme.height[4]}px;
    color: ${theme.colors.textColor};
    font-size: ${theme.fontSize[2]}rem;
    margin: ${theme.spaces[5]}px ${theme.spaces[9]}px;
    border-radius: ${theme.spaces[8]}px;
    opacity: ${theme.opacity[10]};
    border: ${theme.spaces[3]}px;
    outline: ${theme.spaces[3]}px;
    background: ${theme.colors.applicationBg};
    font-weight: bold;
    cursor: pointer;

    &: hover{   
        opacity: ${theme.opacity[6]};
    }
`