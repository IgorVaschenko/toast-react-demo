import { AUTO_DELETE_TIME_DEFAULT, POSITION_DEFAULT } from "@/constants"
import theme from "@/theme/theme"

export const getGeneralProps = (args = {}) => ({
    autoDelete: args.autoDelete ? args.autoDelete : false,
    position: args.position || POSITION_DEFAULT,
    autoDeleteTime: args.autoDeleteTime ? args.autoDeleteTime : AUTO_DELETE_TIME_DEFAULT,
    animation: args.animation ,
    padding: args.padding ? `${args.padding}` : `${theme.spaces[11]}`,
    titleColor: args.titleColor ? args.titleColor : theme.colors.titleColor,
    descriptionColor: args.descriptionColor ? args.descriptionColor : theme.colors.descriptionColor,
    PortalInsertionPointId: args.PortalInsertionPointId ? args.PortalInsertionPointId : 'document.body',
    flag: args.flag,
})