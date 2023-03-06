import React, { useReducer, useState } from 'react';
import { UploadContext, UploadReducer } from './';
export interface UploadState {
    isValid: boolean;
    urlOfImages: string[];
}

const Upload_INITIAL_STATE: UploadState = {
    isValid: true,
    urlOfImages: []
};

interface Props {
    children: React.ReactNode;
}

export const UploadProvider = ({ children }: Props) => {


    const [state, dispatch] = useReducer(UploadReducer, Upload_INITIAL_STATE)
    const [activateAlert, setActivateAlert] = useState(false)

    const handleAddMaqueta = async (e: FileList | (string | Blob)[] | null | any) => {

        dispatch({
            type: "[Upload] - Loading",
            payload: true
        })


        const formData = new FormData();

        formData.append('file', e[0]);
        formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "");
        formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_KEY || "");
        formData.append('timestamp', (Date.now() / 1000).toString());

        const resp = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_URL || "", {
            method: 'POST',
            body: formData
        })


        if (resp.ok) {
            const cloudResp = await resp.json();
            dispatch({
                type: '[Upload] - AddFile',
                payload: cloudResp.secure_url
            })

            dispatch({
                type: "[Upload] - Loading",
                payload: false
            })
        } else {
            throw await resp.json();
        }
    }

    const clearProyect = () => {
        dispatch({
            type: '[Upload] - ClearProyect',
        })
    }

    const handleActiveAlert = () => {
        setActivateAlert(!activateAlert)
    }

    const clearArrayImages = () => {
        dispatch({
            type: '[Upload] - ClearArrayImages',
        })
    }


    return (
        <UploadContext.Provider value={{
            ...state,
            activateAlert,
            handleAddMaqueta,
            clearProyect,
            handleActiveAlert,
            clearArrayImages
        }}>
            {children}
        </UploadContext.Provider>
    )
}