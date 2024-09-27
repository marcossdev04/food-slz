import { View, Text } from 'react-native'
import { useEffect } from 'react'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'
import { HeaderNotifications } from '../components/headerNotifications'
import Constants from 'expo-constants'

export default function Notifications() {
  const statusBarHeight = Constants.statusBarHeight
  const opacity = useSharedValue(0)
  const translateX = useSharedValue(100)

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 500 })
    translateX.value = withTiming(0, { duration: 500 })
  }, [opacity, translateX])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateX: translateX.value }],
    }
  })

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Tela de Notificações</Text>
      <Animated.View
        className="px-4"
        style={[
          animatedStyle,
          { width: '100%', height: '100%', marginTop: statusBarHeight + 8 },
        ]}
      >
        <HeaderNotifications />
      </Animated.View>
    </View>
  )
}
