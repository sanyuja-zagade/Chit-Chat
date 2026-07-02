import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import assets from '../assets/assets';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {

  const {authUser, updateProfile} = useContext(AuthContext);

  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState(authUser.fullName);
  const [bio, setBio] = useState(authUser.bio);

  const submitHandler = async (e)=>{
    e.preventDefault();

    if(!selectedImage) {
      await updateProfile({fullName: name, bio});
      navigate('/');
      return;
    } 

    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onload = async ()=>{
      const base64Image = reader.result;
      await updateProfile({profilePic: base64Image, fullName: name, bio});
      navigate("/");
    }
  }

  return (
    <div className='min-h-screen bg-cover bg-no-repeat flex items-center justify-center'>
      <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>
        <form onSubmit={submitHandler} className='flex-1 flex flex-col gap-5 p-10'>
          <h3 className='text-lg font-bold'>Profile details</h3>

          <label htmlFor="avatar" className='flex items-center gap-3 cursor-pointer'>
            <input onChange={(e)=>setSelectedImage(e.target.files[0])} type="file" id='avatar' accept='.png, .jpg, .jpeg' hidden />
            <img src={selectedImage ? URL.createObjectURL(selectedImage) : assets.avatar_icon} alt="pfp" className={`w-12 h-12 my-3 ${selectedImage && 'rounded-full'}`} />
            upload profile image
          </label>

          <input onChange={(E)=>setName(E.target.value)} value={name} type="text" placeholder='Your name' required className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500' />
          
          <textarea onChange={(E)=>setBio(E.target.value)} value={bio} placeholder='Write profile bio' rows={4} required className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500'></textarea>

          <button type='submit' className='bg-gradient-to-r from-purple-400 to-violet-600 text-white p-2 rounded-full text-lg cursor-pointer'>Save</button>
        </form>

        <img src={authUser?.profilePic || assets.logo_icon} alt="msg-icon" className={`max-w-50 aspect-[1/1] rounded-full mx-5 mr-10 max-sm:mt-10 ${selectedImage && 'rounded-full'}`} />

      </div>
    </div>
  )
}

export default Profile
