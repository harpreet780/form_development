import React, { useState } from 'react';
import { useForm , Controller } from "react-hook-form";
import Select from 'react-select'
const UserForm = () => {
    const [pictureFile, setPictureFile] = useState(null);
    const { handleSubmit, register ,control} = useForm({
        defaultValues: {
            name: '',
            email: '',
            country: '',
            picture: '',
        }
    });
    const onChangePicture = (e) => {
        const imageFile = e.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setPictureFile(imageUrl)
    }
    const registerData = (data) => {
        console.log(data)
        console.log(data.file);
    }
    const options = [
        { value: 'America', label: 'America' },
        { value: 'Canada', label: 'Canada' },
        { value: 'India', label: 'India' }
    ]

    return (
        <form className='form' onSubmit={handleSubmit(registerData)}>
            <div className='wraps'>
                <label>Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className='input'
                    {...register("name")}
                />
            </div>
            <div className='wraps'>
                <label>Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    {...register("email")}
                    className='input' />
            </div>
            <div className='wraps'>
                <label>Country</label>
                <Controller
                    control={control}
                    name="country"
                    render={({ field: { onChange } }) => (
                        <Select
                            name="country"
                            onChange={onChange}
                            options={options}
                            className="react-select"
                        />
                    )}
                />
            </div>
            <div className='wraps'>
                <label>Image</label>
                <div className="selectFile">
                    <input
                        id="picture"
                        type='file'
                        name="picture"
                        accept="image/*"
                        onChange={onChangePicture}
                        // {...register("picture")}
                        className={pictureFile ? "uploadFile" : ""}
                    />
                    <img src={pictureFile} />
                </div>
            </div>
            <div className='Btn'>
                <button
                    type='submit'
                    className='submitBtn'
                >Submit</button>
            </div>
        </form>
    );
};

export default UserForm;