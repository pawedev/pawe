import React from 'react'
import Image from "next/image";
import { Montserrat } from "next/font/google"

const font = Montserrat({
    subsets: ['latin']
})


export default function Logo() {
    return (
        <>
            <Image
                src="/pawe-dark.png"
                width={85}
                height={26}
                alt="Pawe Pêşvebirin"
            ></Image>{" "}
            <span className={`${font.className} mx-1 text-gray-600 font-bold`} title="Guherto: v2.0 (15'ê Tebaxê 2023'an)">v2.0</span>
        </>
    )
}
