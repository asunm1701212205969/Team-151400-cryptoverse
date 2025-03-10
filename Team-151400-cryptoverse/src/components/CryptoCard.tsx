import React from 'react'
import { SparklesIcon } from 'lucide-react'

interface CryptoCardProps {
  name: string
  symbol: string
  price: number
  marketCap: number
  percentageChange: number
  image: string
}

const CryptoCard: React.FC<CryptoCardProps> = ({
  name,
  symbol,
  price,
  marketCap,
  percentageChange,
  image,
}) => {
  const priceChangeColor = percentageChange >= 0 ? 'text-green-500' : 'text-red-500'

  return (
    <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-4">
      <img src={image} alt={name} className="w-10 h-10 rounded-full" />
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-500">{symbol.toUpperCase()}</p>
      </div>
      <div className="ml-auto text-right">
        <p className="font-bold">${price.toFixed(2)}</p>
        <p className={priceChangeColor}>
          {percentageChange > 0 ? '+' : ''}
          {percentageChange.toFixed(2)}%
        </p>
        <p className="text-sm text-gray-400">
          Market Cap: ${marketCap.toLocaleString()}
        </p>
      </div>
      <SparklesIcon className="text-yellow-500" />
    </div>
  )
}

export default CryptoCard
