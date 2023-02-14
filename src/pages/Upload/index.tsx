import React, { useContext, useState } from 'react';
import { useForm } from '../../components/hooks/useForm';


const AddCrypto = () => {

    const [urlOfImages, setUrlOfImages] = useState<string[]>([]);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSearch = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const newMaqueta = {
            title,
            description,
            urlOfImages
        }

        console.log(newMaqueta);
    }


    const handleUploadFiles = async (e) => {

        const cloud_name = 'thedraxx';
        const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;
        const CLOUDINARY_UPLOAD_PRESET = 'my-uploads';
        const CLOUDINARY_KEY = "188689727172197"

        const formData = new FormData();

        formData.append('file', e[0]);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        formData.append('api_key', CLOUDINARY_KEY);
        formData.append('timestamp', (Date.now() / 1000).toString());

        const resp = await fetch(CLOUDINARY_URL, {
            method: 'POST',
            body: formData
        })


        if (resp.ok) {
            const cloudResp = await resp.json();
            console.log(cloudResp);
            setUrlOfImages([...urlOfImages, cloudResp.secure_url]);
        } else {
            throw await resp.json();
        }

    }

    return (
        <div>
            <form>
                <h1>Add Cryptocurrency</h1>
                <input
                    placeholder="Search"
                    autoCapitalize="none"
                    name='search'
                    onChange={({ target }) => setTitle(target.value)}
                    value={title}
                />
                <input
                    placeholder="Search"
                    autoCapitalize="none"
                    name='search'
                    onChange={({ target }) => setDescription(target.value)}
                    value={description}
                />

                <input type="file" multiple onChange={(e) => handleUploadFiles(e.target.files)}></input>
                <button type="submit" onClick={(e) => handleSearch(e)}>
                    Search
                </button>
            </form>
        </div>
    );
};

export default AddCrypto;