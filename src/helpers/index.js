import { hydrate } from "react-dom"

import { v4 as uuidv4 } from 'uuid';

import theme from "@/theme/theme"
import toast from "@/ToastCore"
import SingleToast from '@/components/SingleToast';
import { AUTO_DELETE_TIME_DEFAULT, POSITION_DEFAULT } from "@/constants"

export const getGeneralProps = (args = {}) => ({
    autoDelete: args.autoDelete ? args.autoDelete : false,
    position: args.position || POSITION_DEFAULT,
    autoDeleteTime: args.autoDeleteTime ? args.autoDeleteTime : AUTO_DELETE_TIME_DEFAULT,
    animation: args.animation,
    padding: args.padding ? `${args.padding}` : `${theme.spaces[11]}`,
    titleColor: args.titleColor ? args.titleColor : theme.colors.titleColor,
    descriptionColor: args.descriptionColor ? args.descriptionColor : theme.colors.descriptionColor,
    PortalInsertionPointId: args.PortalInsertionPointId ? args.PortalInsertionPointId : 'document.body',
    autoDelTimer: args.autoDelTimer,
})

export const toastTypeProps = (args) => {
    return {
        type: args.type ? args.type : 'success',
        title: args.title ? args.title : toast[args.type].title,
        description: args.description ? args.description : toast[args.type].description,
        backgroundColor: args.backgroundColor ? args.backgroundColor : toast[args.type].backgroundColor,
        icon: args.type ? toast[args.type].icon : toast.getLatestToast().icon || toast.success.icon
    }
}

export const getToast = (toastArray) => {
    return toastArray.map((toastr, index) => {
        return (
            <SingleToast key={uuidv4()}  {...toastr} index={index} />
        )
    })
}

export const renderToast = (element, container) => hydrate(element, container)

export const getContainer = () => document.querySelector('#ContainerToasts')


