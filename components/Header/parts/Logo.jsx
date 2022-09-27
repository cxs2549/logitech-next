/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import React from "react"

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <a className="flex justify-center">
          <img src="/logo.png" className="w-24" alt="" />
        </a>
      </Link>
    </div>
  )
}

export default Logo
