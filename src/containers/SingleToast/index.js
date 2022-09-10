import React from 'react'

import toast from '@/containers/ToastCore/ToastClass';
import {
    SingleToaster,
    ImageToastDiv,
    Image,
    TitleToast,
    DescrToast,
    ButtonToast,
} from '@/containers/SingleToast/components';

const SingleToast = (props) => {
    const {
        id,
        animation,
        position,
        autoDeleteTime,
        padding,
        backgroundColor,
        icon,
        title,
        titleColor,
        descriptionColor,
        description } = props

    const deleteToasts = () => toast.deleteToast();
    const dragToasts = () => toast.deleteToast();

    return (
        <SingleToaster
            id={id}
            time={autoDeleteTime}
            animation={animation}
            className={position}
            padding={padding}
            backgroundColor={backgroundColor}
            onDragEnd={dragToasts}
            draggable
        >
            <ButtonToast
                id={id}
                onClick={deleteToasts}
                backgroundColor={backgroundColor}
            />
            <ImageToastDiv>
                <Image
                    src={icon}
                    alt={title}
                    draggable={false}
                />
            </ImageToastDiv>
            <TitleToast
                color={titleColor}
            >
                {title}
            </TitleToast>
            <DescrToast
                color={descriptionColor}
            >
                {description}
            </DescrToast>
        </SingleToaster>

    );
}

export default SingleToast;