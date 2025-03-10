import React from 'react'
import { BitcoinIcon } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-4 mb-6">
      <div className="flex items-center">
        <BitcoinIcon className="w-10 h-10 mr-2 text-yellow-500" />
        <h1 className="text-2xl font-bold">Crypto Dashboard</h1>
      </div>
      <nav>
        <a href="#" className="text-blue-500 hover:underline">
          Learn More
        </a>
      </nav>
    </header>
  )
}

export default Header
