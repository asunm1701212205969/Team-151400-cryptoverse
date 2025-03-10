import React, { useState, useEffect } from 'react'
import CryptoList from './CryptoList'
import Header from './Header'

const Dashboard: React.FC = () => {
  const [cryptocurrencies, setCryptocurrencies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCryptocurrencies = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false',
        )
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        setCryptocurrencies(data)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCryptocurrencies()
  }, [])

  if (loading) {
    return <div className="text-center">Loading data...</div>
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>
  }

  return (
    <div className="container mx-auto p-4">
      <Header />
      <CryptoList cryptocurrencies={cryptocurrencies} />
    </div>
  )
}

export default Dashboard
