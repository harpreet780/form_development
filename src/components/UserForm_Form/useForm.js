import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import Select from 'react-select';
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


const validationSchema = Yup.object({
    name: Yup.string().required("Please enter name*"),
    email: Yup.string().email().required("Please enter email*"),
    password: Yup.string().required('Please Enter your password*').matches( /^(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters and one special case Character & no."),
    country: Yup.object({
        label: Yup.string(),
        value: Yup.string().required("Please select country")
    })
});

const UserForm = () => {
    const [pictureFile, setPictureFile] = useState(null);
    const { handleSubmit, register, control, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password:'',
            country: {value:'',label:'', message: '' },
            picture: '',
        },
        resolver: yupResolver(validationSchema)
    });
    const onChangePicture = (e) => {
        const imageFile = e.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setPictureFile(imageUrl)
    }
    const registerData = (e) => {
        console.log({ ...e, picture: pictureFile });
        e.target.reset();

    }
    const options = [
        { value: 'America', label: 'America' },
        { value: 'Canada', label: 'Canada' },
        { value: 'India', label: 'India' }
    ]
  console.log(errors,"error");
  
    return (
        <form className='form' onSubmit={handleSubmit(registerData)} >
            <div className='wraps'>
                <label>Name</label>
                <div className='validlabel'>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className='input'
                        {...register("name")}
                    />
                    <p>{errors.name?.message}</p>
                </div>
            </div>
            <div className='wraps'>
                <label>Email</label>
                <div className='validlabel'>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        {...register("email")}
                        className='input' />
                    <p>{errors.email?.message}</p>
                </div>
            </div>
            <div className='wraps'>
                <label>Password</label>
                <div className='validlabel'>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        {...register("password")}
                        className='input' />
                    <p>{errors.password?.message}</p>
                </div>
            </div>
            <div className='wraps'>
                <label>Country</label>
                <div className='validlabel'>
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
                    <p>{errors?.country?.value?.message}</p>
                </div>
            </div>
            <div className='wraps'>
                <label>Image</label>
                <div className='validlabel'>
                    <div className="selectFile">
                        <input
                            id="picture"
                            type='file'
                            name="picture"
                            accept="image/*"
                            onChange={onChangePicture}
                            className={pictureFile ? "uploadFile" : ""}
                        />
                        <img src={pictureFile} className="ImgBox" />
                    </div>
                    <p>{errors.picture?.message}</p>
                </div>
            </div>
            <div className='Btn'>
                <button
                    type='submit'
                    className='submitBtn'
                >Submit</button>
            </div>
        </form >
    );
};

export default UserForm;