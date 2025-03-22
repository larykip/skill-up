import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

const data = [
  {
    id: 1,
    title: 'React Native',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 36,
    posted: '6 mins ago',
  },
  {
    id: 2,
    title: 'Node.js',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 40,
    posted: '10 mins ago',
  },
  {
    id: 3,
    title: 'React',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 30,
    posted: '15 mins ago',
  },
  {
    id: 4,
    title: 'Vue.js',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 35,
    posted: '20 mins ago',
  },
  {
    id: 5,
    title: 'Angular',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 38,
    posted: '25 mins ago',
  },
  // {
  //   id: 6,
  //   title: 'Laravel',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   price: 42,
  //   posted: '30 mins ago',
  // },
  // {
  //   id: 7,
  //   title: 'Django',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   price: 45,
  //   posted: '35 mins ago',
  // },
  // {
  //   id: 8,
  //   title: 'Flask',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   price: 48,
  //   posted: '40 mins ago',
  // },
  // {
  //   id: 9,
  //   title: 'Express.js',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   price: 50,
  //   posted: '45 mins ago',
  // },
  // {
  //   id: 10,
  //   title: 'Nest.js',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  //   price: 55,
  //   posted: '50 mins ago',
  // }
]

const Task = () => {
  return (
    <Card className="flex flex-col w-1/4 h-1/2 bg-red-400">
        <CardHeader className='flex justify-between'>
            <CardDescription className='text-gray'>Posted 6 mins ago</CardDescription>
            <CardTitle> React Native Developer</CardTitle>
            <CardDescription className='text-gray'>$36</CardDescription>
        </CardHeader>
        <CardContent className='text-xs'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </CardContent>
        <CardFooter className='flex flex-wrap'>
            { data.map((task) => (
                <Button key={task.id} className='mr-2 my-2 text-xs' color='primary'>{task.title}</Button>
            ))}
        </CardFooter>
    </Card>
  )
}

export default Task