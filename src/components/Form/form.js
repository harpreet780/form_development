import React, { useState } from 'react';

const Form = () => {
    const [gender,setGender]= useState();
    const [hobby,setHobby]= useState();
    const [userDetail, setUserDetail] = useState({
        name: '',
        email: '',
        country: '',
        gender: gender,
        hobby: hobby,
        image: '',

    })
    const Usersign = (e) => {
        setUserDetail({ ...userDetail, [e.target.name]: e.target.value })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
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
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => Usersign(e)}
                    checked={gender} 
                />
                <label>Male</label>
                <input
                    type="radio"
                    name="gender"
                    value="female" 
                    onChange={(e) => Usersign(e)}
                    checked={gender} 
                    />
                <label>Female</label>
            </div>
            <div className='wraps'>
                <label>Hobby</label>
                <input
                    type="checkbox"
                    name="hobby"
                    value="cooking"
                    onChange={(e) => Usersign(e)}
                    checked={hobby}
                    />
                <label>cooking</label>
                <input
                    type="checkbox"
                    name="hobby"
                    value="playing"
                    onChange={(e) => Usersign(e)}
                    checked={hobby}
                     />
                <label>Playing</label>
            </div>
            <div className='wraps'>
                <label>Image</label>
                <input
                    type='file'
                    name="image"
                    accept="image/*"
                    onChange={(e) => Usersign(e)}
                    value={userDetail.image}
                />
            </div>
            <div className='Btn'>
                <button
                    onClick={handleSubmit}
                    type='submit'
                    className='submitBtn'
                >Submit</button>
            </div>
        </form>
    );
};

export default Form;