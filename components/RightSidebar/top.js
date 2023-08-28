import React from 'react'
import { RxArrowUp } from "react-icons/rx";

export default function GoTop() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };

    return (
        <div onClick={scrollToTop} className="flex justify-center items-center content-center gap-1 text-xs font-bold hover:cursor-pointer">Biçe li jorê <RxArrowUp /></div>
    )
}
