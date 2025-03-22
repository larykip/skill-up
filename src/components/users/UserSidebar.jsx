'use client'
import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu } from '../ui/sidebar'
import { useAuthModal } from '@/context/AuthContext'

const UserSidebar = () => {
    const { user, logout } = useAuthModal()
  return (
    <Sidebar className='bg-emerald-400'>
        <SidebarHeader>
            <p>{user}</p>
        </SidebarHeader>
        <SidebarContent></SidebarContent>
        <SidebarFooter>
            <SidebarGroup>
                <SidebarGroupLabel>Other</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <button onClick={() => logout()}>Logout</button>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarFooter>
    </Sidebar>
  )
}

export default UserSidebar