import React from 'react'
import UploadButton from '../Components/UploadButton'
import { Button } from '@/components/ui/button'
import cloudinary from 'cloudinary'
import View from './View'
type searchResults={
  public_id:string,
  tags:string[],

}
async function Gallery  ()  {
  
  let res= await cloudinary.v2.search
  .expression('resource_type:image ')
  .sort_by('public_id','desc')
   .max_results(5)
   .with_field("tags")
  .execute() as {resources:searchResults[]};
  
  ;
  
  return (
<section className=''>
  <div className=' flex justify-between '>
  <h1 className='text-4xl font-bold'>Gallery</h1>
 
  
 <UploadButton/>
 </div>
 <div className='columns-4 gap-4 mx-auto p-5 space-y-4'>
{
  res.resources.map((item,i)=>{
return <div key={i} className='break-inside-avoid'>
  <View src={item.public_id} tag={item.tags}/>
</div>
  })
}
 </div>
 
  
</section>
  )
}

export default Gallery