'use client'

import Link from 'next/link'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow">
        <div className="text-2xl font-bold">
          <Link href="/">Admin Panel</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Users
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <main>{children}</main>
    </div>
  )
}
