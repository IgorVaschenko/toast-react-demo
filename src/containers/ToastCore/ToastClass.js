import { v4 as uuidv4 } from 'uuid';

import {
    MAX_TOAST_LENGTH,
    ERROR,
    INFO,
    SUCCESS,
    WARNING,
} from '@/constants';
import { toastTypeProps, getGeneralProps, renderToast, getToast } from '@/helpers';

class ToastClass {

    constructor() {
        if (ToastClass.instance) {
            return ToastClass.instance;
        }
        ToastClass.instance = this;
        this.toasts = [];
        this.timers = [];
        this.toastsWithRemove = []
        this.error = { ...ERROR };
        this.info = { ...INFO };
        this.success = { ...SUCCESS };
        this.warning = { ...WARNING };
        this.deleteToast = this.deleteToast.bind(this)
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
            this.toasts = [...this.toasts.splice(1), {
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

        let timer = [];
        const id = uuidv4()

        this.toasts = this.toasts.map(toast => ({ ...toast, animation: '' }))
        this.getToastProps({ ...args, id })
        renderToast(getToast(this.toasts), document.getElementById('ContainerToasts'))

        if (args.autoDelete) {
            timer[id] = setTimeout(() => {
                this.deleteToast(id, timer[id])
                clearTimeout(timer[id])
            }, args.autoDeleteTime);

            this.timers.push(timer[id])
            this.toastsWithRemove.push(id)
        }
    }

    deleteToast(id) {
        id = event ? event.target.id : id
        if (event) clearTimeout(this.timers[this.toastsWithRemove.findIndex(timer => timer === id)])
        this.toasts.splice(this.toasts.findIndex(toast => toast.id === id), 1);
        renderToast(getToast(this.toasts), document.getElementById('ContainerToasts'))
    }
}

const toast = new ToastClass();

export default toast;
