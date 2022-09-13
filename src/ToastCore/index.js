import { v4 as uuidv4 } from 'uuid';

import {
    MAX_TOAST_LENGTH,
    ERROR,
    INFO,
    SUCCESS,
    WARNING,
} from '@/constants';
import {
    toastTypeProps,
    getGeneralProps,
    renderToast,
    getToast,
    getContainer
} from '@/helpers';

class ToastClass {

    constructor() {
        if (ToastClass.instance) {
            return ToastClass.instance;
        }
        ToastClass.instance = this;
        this.toasts = [];
        this.error = { ...ERROR };
        this.info = { ...INFO };
        this.success = { ...SUCCESS };
        this.warning = { ...WARNING };
        this.deleteToast = this.deleteToast.bind(this)
        this.addToast = this.addToast.bind(this)
    }

    getToastProps(args) {
        if (this.toasts.length < MAX_TOAST_LENGTH) {
            return this.toasts = [
                ...this.toasts, {
                    id: args.id,
                    ...toastTypeProps(args),
                    ...getGeneralProps(args),
                }];
        } else {
            return this.toasts = [...this.toasts.splice(1), {
                id: args.id,
                ...toastTypeProps(args),
                ...getGeneralProps(args),
            }];
        }
    }

    getLatestToast() {
        if (this.toasts.length === 0) return { position: 'top-right' }
        return this.toasts[this.toasts.length - 1];
    }

    addToast(args) {
        let autoDelTimer = null;
        const id = uuidv4();

        if (args.autoDelete) {
            autoDelTimer = setTimeout(() => {
                this.deleteToast(id)
            }, args.autoDeleteTime);
        }

        this.toasts = this.toasts.map(toast => ({ ...toast, animation: '' }))
        this.getToastProps({ ...args, id, autoDelTimer })
        renderToast(getToast(this.toasts), getContainer())
    }

    deleteToast(id) {

        this.toasts = this.toasts.map(toast => ({ ...toast, animation: '' }))

        if (this.toasts[this.toasts.findIndex(toast => toast.id === id)].autoDelTimer !== undefined) {
            clearTimeout(this.toasts[this.toasts.findIndex(toast => toast.id === id)].autoDelTimer)
        }

        this.toasts.splice(this.toasts.findIndex(toast => toast.id === id), 1);
        renderToast(getToast(this.toasts), getContainer())
    }
}

const toast = new ToastClass();

export default toast;
