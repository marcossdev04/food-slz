import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import { HomeScreen } from '../components/homeScreen'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}

export default function Index() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap

          if (route.name === 'Inicio') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Buscar') {
            iconName = focused ? 'search' : 'search-outline'
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline'
          } else {
            iconName = 'alert'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Buscar" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={SettingsScreen} />
    </Tab.Navigator>
  )
}
