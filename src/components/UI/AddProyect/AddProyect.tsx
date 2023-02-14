import React, { useContext, useState } from 'react';
import { UploadContext } from '@/components/context/Upload';

const AddProyect = () => {

    const { handleAddMaqueta, urlOfImages, isValid } = useContext(UploadContext);
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
        console.log(urlOfImages);

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

                <input type="file" multiple onChange={(e) => handleAddMaqueta(e.target.files)}></input>
                <button type="submit" onClick={(e) => handleSearch(e)} disabled={isValid}>
                    Search
                </button>
            </form>
        </div>
    )
}

export default AddProyect