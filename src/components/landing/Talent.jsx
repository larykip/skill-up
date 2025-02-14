import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import Image from 'next/image'
import { talents } from '@/lib/data'

const Talent = () => {
  return (
    <>
        {talents.map((talent) => (
            <Card key={talent.id} className=' py-5 w-[130px] h-[130px] shadow-md'>
            <CardContent className='flex items-center justify-center'>
                {talent.svg}
            </CardContent>
            <CardHeader>
                <CardTitle className='text-center text-xs'>
                    {talent.title}
                </CardTitle>
            </CardHeader>
        </Card>
        ))}
    </>
  )
}

export default Talent