import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { RestaurantItem } from './horizontal'

export interface RestaurantsProps {
  id: string
  name: string
  image: string
}
export function Restaurants() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([])
  useEffect(() => {
    async function GetFoods() {
      const response = await fetch('http:192.168.100.2:3000/restaurants')
      const data = await response.json()
      setRestaurants(data)
    }
    GetFoods()
  }, [])
  return (
    <FlatList
      horizontal
      data={restaurants}
      renderItem={({ item }) => <RestaurantItem item={item} />}
      contentContainerStyle={{ gap: 14, paddingHorizontal: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  )
}
