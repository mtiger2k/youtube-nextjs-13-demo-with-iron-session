import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex space-x-4 p-5'>
      <div className="w-60 h-full shadow-md bg-white px-1">
        <ul className="relative">
          <li className="relative">
            <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="/auth/login">
              Login</Link>
          </li>
          <li className="relative">
            <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="/auth/logout">
              Logout</a>
          </li>
        </ul>
      </div>
      <div className='flex-1 pl-5'>
        <div>{children}</div>
    </div>
    </main>
  )
}
