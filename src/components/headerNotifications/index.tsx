import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { View, Pressable } from 'react-native'

export function HeaderNotifications() {
  const router = useRouter()
  return (
    <View className="w-full flex flex-row items-center justify-between">
      <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
        <Ionicons
          onPress={() => router.push('/')}
          name="arrow-back-outline"
          size={25}
          color="#121212"
        />
      </Pressable>
    </View>
  )
}
