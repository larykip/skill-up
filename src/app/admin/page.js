import AdminSidebar from '@/components/admin/AdminSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

const page = () => {
  return (
    <SidebarProvider>
      <div className='flex h-screen w-full'>
        <div>
          <AdminSidebar/>
        </div>
        <div className="flex-grow p-4 bg-orange-400">
          <div></div>
          <div></div>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default page