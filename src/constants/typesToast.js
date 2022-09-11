import errorIcon from "@/assets/error.svg";
import infoIcon from "@/assets/info.svg";
import warningIcon from "@/assets/warning.svg";
import succsessIcon from "@/assets/success.svg";
import theme from "@/theme/theme";

export const SUCCESS = {
    type: 'success',
    title: 'success',
    description: "description text success",
    backgroundColor: theme.colors.backgroundSuccess,
    icon: succsessIcon,
};

export const ERROR = {
    type: 'error',
    title: 'error',
    description: "description text error",
    backgroundColor: theme.colors.backgroundError,
    icon: errorIcon,
};

export const INFO = {
    type: 'info',
    title: 'info',
    description: "description text info",
    backgroundColor: theme.colors.backgroundInfo,
    icon: infoIcon,
};

export const WARNING = {
    type: 'warning',
    title: 'warning',
    description: "description text warning",
    backgroundColor: theme.colors.backgroundWarning,
    icon: warningIcon,
};
