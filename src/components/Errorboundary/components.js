import styled from "styled-components";

import theme from "@/theme/theme";

export const ErrorWrap = styled.div`
    width: ${theme.width[5]}px;
    background-color: ${theme.colors.backgroundError};
    color: ${theme.colors.textColor};
    margin: 0 auto;
    `
export const ErrorTitle = styled.h2`
    text-align: center;
`
export const ErrorDetails = styled.details`
    white-space: pre-wrap;
    margin: ${theme.spaces[7]}px;
`
