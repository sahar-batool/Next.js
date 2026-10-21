import React from "react";
import Link from "next/link";

const Page = () => {

    return(
        <div>
            <h1>Products</h1>
            <h2>choose collections</h2>
            <div className=" flex items-center justify-center gap-7">
            <Link href='/product/men'>men's collection</Link>
            <Link href='/product/women'>women's collection</Link>
        </div>
        
        </div>
    )
}

export default Page;