import { keyframes } from "styled-components"

const toast_in_right = keyframes`
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    50% {
        transform: translateX(0);
    }
`
const toast_from_top = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    }
    50% {
        transform: translateY(0);
    }
`
const toast_from_bottom = keyframes`
    0% {
        transform: translateY(100%);
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    50% {
        transform: translateY(0);
    }
`
const toast_in_left = keyframes`
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    20% {
        opacity: 1;
    }
    50% {
        transform: translateX(0);
    }
`
export {
    toast_in_right,
    toast_from_top,
    toast_from_bottom,
    toast_in_left,
}