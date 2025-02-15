import { BadgeDollarSign, BookOpenText, FileImage, Headset, Laptop, Music, Speech, Syringe, Tv } from "lucide-react"

export const options = [
    { value: 'option1', label: 'Talent' },
    { value: 'option2', label: 'Jobs' },
    { value: 'option3', label: 'Projects' },
  ]


  export const talents = [
    {
        id: 1,
        svg: <Laptop />,
        title: 'Tech & Programming'
    },
    {
        id: 2,
        svg: <FileImage />,
        title: 'Design & Creativity'
    },
    {
        id: 3,
        svg: <BadgeDollarSign />,
        title: 'Finance & Accounting'
    },
    {
        id: 4,
        svg: <BookOpenText />,
        title: 'Writing & Translation'
    },
    {
        id: 5,
        svg: <Headset />,
        title: 'Customer Support'
    },
    {
        id: 6,
        svg: <Syringe />,
        title: 'Medical transcription'
    },
    {
        id: 7,
        svg: <Speech />,
        title: 'Speech Writing'
    },
    {
        id: 8,
        svg: <Tv />,
        title: 'Video & Animation'
    },
    {
        id: 9,
        svg: <Music />,
        title: 'Music & Audio'
    }
  ]