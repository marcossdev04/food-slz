import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../routes/homeScreen'
import { Ionicons } from '@expo/vector-icons'
import { Search } from '../routes/search'
import { Profile } from '../routes/Profile'
import { Text, View } from 'react-native'

const Tab = createBottomTabNavigator()

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
        headerShown: route.name === 'Inicio' ? false : route.name !== 'Buscar',
        headerTitle: () => (
          <View
            style={{
              flexDirection: 'row',
            }}
          >
            <Text>
              <Ionicons name="person-circle" size={24} color="black" />{' '}
            </Text>
            {/* Ícone do título */}
            <Text style={{ marginLeft: 4, fontSize: 18, fontWeight: 'bold' }}>
              Marcos Vinícius
            </Text>
          </View>
        ),
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Buscar" component={Search} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  )
}
