import React from 'react'
import CryptoCard from './CryptoCard'

interface CryptoListProps {
  cryptocurrencies: {
    id: string
    name: string
    symbol: string
    current_price: number
    market_cap: number
    price_change_percentage_24h: number
    image: string
  }[]
}

const CryptoList: React.FC<CryptoListProps> = ({ cryptocurrencies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cryptocurrencies.map((crypto) => (
        <CryptoCard
          key={crypto.id}
          name={crypto.name}
          symbol={crypto.symbol}
          price={crypto.current_price}
          marketCap={crypto.market_cap}
          percentageChange={crypto.price_change_percentage_24h}
          image={crypto.image}
        />
      ))}
    </div>
  )
}

export default CryptoList
