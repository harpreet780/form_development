import React, { useState, useEffect } from 'react';

const Form = () => {
    // let localStorageData;
    // if (localStorageData.getItem("userDetail")) {
    //     localStorageData = JSON.parse(localStorage.getItem('userDetail'))
    // }
    // else {
    //     localStorageData = [];
    // }
    const [pictureFile, setPictureFile] = useState(null);
    const [userDetail, setUserDetail] = useState({
        name: '',
        email: '',
        country: '',
        gender: '',
        hobby: [],
        picture: '',
    })
    const Usersign = (e) => {
        setUserDetail({ ...userDetail, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const onSubmit = () => {
        localStorage.setItem("userDetail", JSON.stringify(userDetail));
        setUserDetail({
            name: '',
            email: '',
            country: '',
            gender: '',
            hobby: [],
            picture: '',
        });
    }
    const onChangePicture = (e) => {
        const imageFile = e.target.files[0];
        const imageUrl = URL.createObjectURL(imageFile);
        setPictureFile(imageUrl)
        setUserDetail({ ...userDetail, picture: imageUrl });
    }
    const handleonChecked = (e, data) => {
        let checked = [...userDetail.hobby]
        if (checked.includes(data)) {
            var index = checked.indexOf(data);
            if (index > -1) {
                checked.splice(index, 1);
            }
        }
        else {
            checked.push(data)
        }
        return setUserDetail({ ...userDetail, hobby: checked })
    };
    useEffect(() => {
        JSON.parse(localStorage.getItem('userDetail'));
    }, [userDetail]);
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
                    onClick={() => setUserDetail({ ...userDetail, gender: "male" })}
                    checked={userDetail.gender === "male"}
                />
                <label htmlFor="male">Male</label>
                <input
                    id="female"
                    type="radio"
                    name="gender"
                    value="female"
                    onClick={() => setUserDetail({ ...userDetail, gender: "female" })}
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
                    checked={userDetail.hobby.includes('cooking')}
                    onClick={(e) => handleonChecked(e, 'cooking')}
                />
                <label htmlFor="hobby_cooking">Cooking</label>
                <input
                    id="hobby_playing"
                    type="checkbox"
                    name="hobby"
                    value="playing"
                    checked={userDetail.hobby.includes('playing')}
                    onClick={(e) => handleonChecked(e, 'playing')}
                // onClick={(e) => {
                //     setUserDetail({ ...userDetail, hobby: [...userDetail.hobby, 'playing'] })
                //     handleonChecked("playing")
                // }}
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
                        className={pictureFile ? "uploadFile" : ""}
                    />
                    <img src={pictureFile} className="ImgBox" />
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