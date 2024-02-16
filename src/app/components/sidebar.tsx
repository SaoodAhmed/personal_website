import { PersonalData } from '@/page_data/page'
import React from 'react'
import { Twitter } from './icons/twitter';

interface PersonalDataType {
    name:string;
    role:string;
    education:string[],
    contactLinks:string[]
}

const Sidebar: React.FC<{ data: PersonalDataType }> = ({data}) => {
    const {name, role, education, contactLinks} = data
  return (
    <div>
        <h1>{name}</h1>
        <Twitter className={"h-9 w-9"}/>
    </div>
  )
}

export default Sidebar