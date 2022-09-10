import { v4 as uuidv4 } from 'uuid';

import SingleToast from '@/containers/SingleToast';

export const getToast = (toastArray) => {
    return toastArray.map((toastr, index) => {
        return (
            <SingleToast key={uuidv4()}  {...toastr} index={index} />
        )
    })
}