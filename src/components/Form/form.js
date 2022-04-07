import React, { useState } from 'react';

const Form = () => {
    const [pictureFile, setPictureFile] = useState(null);
    const [isChecked , setisChecked] = useState([]);
    const [userDetail, setUserDetail] = useState({
        name: '',
        email: '',
        country: '',
        gender: '',
        hobby: '',
        picture: '',

    })
    const Usersign = (e) => {
        setUserDetail({ ...userDetail, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const onSubmit = (e) => {
        console.log(userDetail,"submit");
    }
    const handleChecked=(e)=>{
         const target = e.target.checked
    }
    const onChangePicture = e => {
        const imageFile = e.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setPictureFile(imageUrl);
    };
    console.log(userDetail, "userDetail");
    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='wraps'>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={userDetail.name}
                    onChange={(e) => Usersign(e)}
                    className='input' />
            </div>
            <div className='wraps'>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={userDetail.email}
                    onChange={(e) => Usersign(e)}
                    className='input' />
            </div>
            <div className='wraps'>
                <label>Country</label>
                <select name="country" value={userDetail.country} onChange={(e) => Usersign(e)}>
                    <option value="india">India</option>
                    <option value="america">America</option>
                    <option value="canada">Canada</option>
                    <option value="england">England</option>
                </select>
            </div>
            <div className='wraps'>
                <label>Gender</label>
                <input
                    id="male"
                    type="radio"
                    name="gender"
                    value="male"
                    onClick={() => setUserDetail({...userDetail,gender:"male"})}
                    checked={userDetail.gender === "male"}
                />
                <label htmlFor="male">Male</label>
                <input
                    id="female"
                    type="radio"
                    name="gender"
                    value="female"
                    onClick={() => setUserDetail({...userDetail,gender:"female"})}
                    checked={userDetail.gender === "female"}
                />
                <label htmlFor="female">Female</label>
            </div>
            <div className='wraps'>
                <label>Hobby</label>
                <input
                    id="hobby_cooking"
                    type="checkbox"
                    name="hobby"
                    value="cooking"
                />
                <label htmlFor="hobby_cooking">Cooking</label>
                <input
                    id="hobby_playing"
                    type="checkbox"
                    name="hobby"
                    value="playing"
                />
                <label htmlFor="hobby_playing">Playing</label>
            </div>
            <div className='wraps'>
                <label>Image</label>
                <div className="selectFile">
                    <input
                        type='file'
                        name="picture"
                        accept="image/*"
                        onChange={onChangePicture}
                        value={userDetail.picture}
                        className={pictureFile ? "uploadFile" : ""}
                    />
                    <img src={pictureFile} />
                </div>
            </div>
            <div className='Btn'>
                <button
                    onClick={onSubmit}
                    type='submit'
                    className='submitBtn'
                >Submit</button>
            </div>
        </form>
    );
};

export default Form;