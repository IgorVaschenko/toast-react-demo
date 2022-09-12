import styled from "styled-components";

import theme from "@/theme/theme";

export const Application = styled.div`
    background-color: ${theme.colors.applicationBg};
    font-size: ${theme.fontSize[2]}rem;
    color: ${theme.colors.textColor};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > p {
        font-size: ${theme.fontSize[4]}rem;
        font-weight:${theme.fontWeight[1]};
        margin: ${theme.spaces[9]}px;
    }
`
export const Select = styled.div`
    width: ${theme.width[9]}px;
    display: flex;
    flex-direction: column;
`
export const Icons = styled.div`
    display: flex;
    justify-content: space-around;
`
export const RadioWrapper = styled.div`
    width: ${theme.width[7]}px;
    display: flex;
    justify-content: space-around;
`
export const SingleIcon = styled.div`
    cursor: pointer;
`
export const ToastButtons = styled.div`
    display: flex;
`
export const WrapperForColor = styled.div`
    width: ${theme.width[9]}px;
    display: flex;
    justify-content: space-between;
`
