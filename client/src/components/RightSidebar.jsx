import React, { useContext, useEffect, useState } from 'react'
import assets from '../assets/assets'
import { ChatContext } from '../../context/ChatContext'
import { AuthContext } from '../../context/AuthContext';

const RightSidebar = () => {

  const {selectedUser, messages} = useContext(ChatContext);
  const {logout, onlineUsers} = useContext(AuthContext);

  const [msgImages, setMsgImages] = useState([]);

  // Get all images from messages
  useEffect(() => {
  const images = messages
    .filter(msg => msg.image)
    .map(msg => msg.image);

  setMsgImages(images);
}, [messages]);

  return selectedUser && (
    <div className={`bg-[#8185b2]/10 text-white h-full flex flex-col relative overflow-y-scroll ${selectedUser ? 'max-md:hidden' : ''}`}>
      {/* --------- User pfp & name ---------- */}
      <div className='pt-8 mx-auto flex flex-col items-center gap-2 text-sm font-light'>
        <img src={selectedUser?.profilePic || assets.avatar_icon} alt="pfp" className='w-20 aspect-[1/1] rounded-full' />
        <h1 className='px-10 mx-auto text-xl text-center font-medium'>{selectedUser.fullName}</h1>
        <p className='px-10 pt-3 text-center'>{selectedUser.bio}</p>
      </div>

      <hr className='border-[#ffffff50] my-4' />

      {/* --------- Media ---------- */}
      <p className='px-5 text-sm font-extralight'>Media</p>
      <div className='overflow-y-scroll px-5 mt-2 mb-15 max-h-[200px] grid grid-cols-2 gap-3 opacity-80'>
        {msgImages.map((url, index)=>(
          <div key={index} onClick={()=>window.open(url)} className='rounded cursor-pointer'>
            <img src={url} alt="media-image" className='h-full rounded-md' />
          </div>
        ))}
      </div>

      {/* --------- Logout ---------- */}
      <button onClick={()=> logout()}
      className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-violet-600 text-white text-sm font-light border-none rounded-full py-2 px-20 cursor-pointer'>Logout</button>

    </div>
  )
}

export default RightSidebar
