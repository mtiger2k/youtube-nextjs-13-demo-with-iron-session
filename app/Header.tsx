import Link from 'next/link'
import React from 'react'

function Header() {
  return (

    <nav className="
      relative
      w-full
      flex flex-wrap
      items-center
      justify-between
      py-2
      bg-gray-100
      text-gray-500
      hover:text-gray-700
      focus:text-gray-700
      shadow-lg
      navbar navbar-expand-lg navbar-light
      ">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">

        <ul className="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
          <li className="nav-item p-2">
            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="/">Home</Link>
          </li>
          <li className="nav-item p-2">
            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="/todos">Todos</Link>
          </li>
          <li className="nav-item p-2">
            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="/search">Search</Link>
          </li>
          <li className="nav-item p-2">
            <Link className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0" href="/auth">Login</Link>
          </li>
        </ul>

      </div>
      </div>
    </nav>

  )
}

export default Header
