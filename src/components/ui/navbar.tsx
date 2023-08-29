

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
  return (
    <div className="border-b ">
          <div className="flex h-16 container mx-auto items-center px-4">
            PHOTOS APP
            <div className="ml-auto flex items-center space-x-4">
            <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
            </div>
          </div>
        </div>
      
  )
}

export default Navbar
