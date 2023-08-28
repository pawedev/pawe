import Link from 'next/link'
import React from 'react'
import { HiBookOpen } from "react-icons/hi2";

export default function Navbar() {
  return (
    <>
      <Link
        href={"/peyvnasi"}
        className='flex items-center gap-1 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm px-5 py-2 text-center mr-2'
      >
        <HiBookOpen />
        Peyvnasî
      </Link>
    </>
  )
}
