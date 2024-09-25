import { View } from 'react-native'
import { useState, useEffect } from 'react'
import { RestaurantsProps } from '../restaurants'
import { RestaurantItemVertical } from './vertical'

export function RestaurantVerticalList() {
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
    <View className="px-4 flex-1 mb-11 gap-4">
      {restaurants.map((item) => (
        <RestaurantItemVertical item={item} key={item.id} />
      ))}
    </View>
  )
}
