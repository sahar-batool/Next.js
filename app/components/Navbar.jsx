import Link from "next/link";
import React from "react";

const Navbar = () => {
    return(
        <div className="flex justify-between items-center px-6 py-3 bg-pink-400 mb-10 text-xl">
            <h3>Navbar</h3>
            <div className="flex gap-6">
            <Link href='/'>Home</Link>
             <Link href='/about'>About</Link>
              <Link href='/product'>product</Link>
               <Link href='/'>more</Link>
               </div>

        </div>
    )
}

export default Navbar;