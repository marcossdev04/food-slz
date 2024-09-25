import { Pressable, Text, Image } from 'react-native'
import { RestaurantsProps } from '..'

export function RestaurantItem({ item }: { item: RestaurantsProps }) {
  return (
    <Pressable
      onPress={() => {
        console.log(`Clicou no restaurante ${item.name}`)
      }}
      className="flex flex-col items-center justify-center"
    >
      <Image
        source={{ uri: item.image }}
        className="w-20 h-20 rounded-full"
        alt="Restaurant"
      />
      <Text
        className="text-sm mt-2 w-20 text-center leading-4 text-black"
        numberOfLines={2}
      >
        {item.name}
      </Text>
    </Pressable>
  )
}
