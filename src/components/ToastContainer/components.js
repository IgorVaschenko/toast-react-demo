import styled from "styled-components";

import theme from "@/theme/theme";

export const ToastWrapper = styled.div`
position:fixed;

  .top-right {
    top: ${theme.spaces[8]}px;
    right: ${theme.spaces[8]}px;
  }

  .bottom-right {
    bottom: ${theme.spaces[8]}px;
    right: ${theme.spaces[8]}px;
  }

  .top-left { 
    top: ${theme.spaces[8]}px;
    left: ${theme.spaces[8]}px;
  }

  .bottom-left {
    bottom: ${theme.spaces[8]}px;
    left: ${theme.spaces[8]}px;
  }
`;

export const ContainerToasts = styled.div`
  box-sizing: border-box;
  position: fixed;
  width: 458px;
`;