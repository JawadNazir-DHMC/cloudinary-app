"use client"
import { CldImage } from 'next-cloudinary';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/Ai'
import { addTags } from './action';
import { useState } from 'react';
const View = ({src,tag}:{src:string,tag:string[]}) => {
  const[fav,setFav]=useState(tag.includes("favorite"))
  return (
    <div className='relative'>
           <CldImage
  width="400"
  height="400"
  src={src}
  sizes="100vw"
  alt="an Image of something"
  
/>

<div className=' absolute top-1 right-1' onClick={()=>{addTags(src)}}>
  {
    fav ?<AiFillHeart className="w-8 h-8 cursor-pointer text-red-500"  />:<AiOutlineHeart className="w-8 h-8 cursor-pointer text-white hover:text-red-500 duration-300 " />
  }
  

</div>
</div>
)
} 
  


export default View