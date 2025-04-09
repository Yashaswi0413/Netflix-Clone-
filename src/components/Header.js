import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between p-4 transition-all lg:px-10 lg:py-6">
      <div className="flex items-center space-x-2 md:space-x-8">
        <img
          src="https://rb.gy/ulxxee"
          width={120}
          height={120}
          className="cursor-pointer object-contain"
          alt="Netflix"
        />
        
        <ul className="hidden md:flex md:space-x-4">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      
      <div className="flex items-center space-x-4">
        <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline" />
        <BellIcon className="h-6 w-6" />
        <img
          src="https://rb.gy/g1pwyx"
          alt=""
          className="cursor-pointer rounded"
        />
      </div>
    </header>
  )
}