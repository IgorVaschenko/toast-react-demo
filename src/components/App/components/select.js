import styled from "styled-components";

import theme from "@/theme/theme";

export const SelectItem = styled.select`
    width: ${theme.width[7]}px;
    height: ${theme.height[4]}px;
    background-color: ${theme.colors.applicationBg};
    margin: ${theme.spaces[7]}px;
    margin-right:  ${theme.spaces[13]}px;
    color: ${theme.colors.textColor};
    font-size: ${theme.fontSize[0]}rem;
    padding: ${theme.spaces[7]}px;
    outline: ${theme.spaces[3]}px;
    border-radius: ${theme.spaces[7]}px;
    cursor: pointer;
`;
export const SelectOption = styled.option`
    background-color: ${theme.colors.applicationBg};
    color: ${theme.colors.textColor}
`;
