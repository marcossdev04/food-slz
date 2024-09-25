import { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { CarHorizontalFood } from './food'

export interface FoodProps {
  id: string
  name: string
  price: number
  time: string
  delivery: number
  rating: number
  image: string
  restaurantId: string
}
export function TrandingFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([])
  useEffect(() => {
    async function GetFoods() {
      const response = await fetch('http:192.168.100.2:3000/foods')
      const data = await response.json()
      setFoods(data)
    }
    GetFoods()
  }, [])
  return (
    <FlatList
      horizontal
      data={foods}
      renderItem={({ item }) => <CarHorizontalFood food={item} />}
      contentContainerStyle={{ gap: 14, paddingHorizontal: 16 }}
      showsHorizontalScrollIndicator={false}
    />
  )
}
