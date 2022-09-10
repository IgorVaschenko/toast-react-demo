import toast from "@/containers/ToastCore/ToastClass"

export const toastTypeProps = (args) => {
    return {
        type: args.type ? args.type : 'success',
        title: args.title ? args.title : toast[args.type].title,
        description: args.description ? args.description : toast[args.type].description,
        backgroundColor: args.backgroundColor ? args.backgroundColor : toast[args.type].backgroundColor,
        icon: args.type ? toast[args.type].icon : toast.getLatestToast().icon || toast.success.icon
    }
}
