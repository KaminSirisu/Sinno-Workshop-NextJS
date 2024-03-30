import React from 'react'
import Link from "next/link";

export default function NavBar() {
    const PageName = [
        {name:"Home", path: "/home" },
        {name:"Work",path: "/Work "}, 
        {name:"Blog",path: "/blog "}
    ]
  return (
    <nav className="flex flex-row gap-x-7 mt-16">
      {
        PageName.map((page) => (
            <Link key={page.name} href={page.path}>
                {page.name}
            </Link>
        ))
      }
    </nav>
  )
}
