import { SidebarProvider } from '@/components/ui/sidebar'
import UserSidebar from '@/components/users/UserSidebar'
import React from 'react'

const UserPage = () => {
  return (
    <SidebarProvider>
      <div className='flex h-screen w-full'>
        <div>
          <UserSidebar />
        </div>
        <div className="flex-grow p-4 bg-orange-400">
          <div></div>
          <div></div>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default UserPage