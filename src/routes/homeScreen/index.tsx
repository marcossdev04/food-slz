import { ScrollView, View } from 'react-native'
import { Banner } from '../../components/banner'
import { Header } from '../../components/header'
import { RestaurantVerticalList } from '../../components/list'
import { Restaurants } from '../../components/restaurants'
import { Section } from '../../components/section'
import { TrandingFoods } from '../../components/trending'
import Constants from 'expo-constants'

export function HomeScreen() {
  const statusBarHeight = Constants.statusBarHeight
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-white"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
      </View>

      <Section
        name="Comidas em alta"
        label="Veja mais"
        action={() => {
          console.log('Clicou no veja mais')
        }}
        size="text-2xl"
      />
      <TrandingFoods />

      <Section
        action={() => console.log('teste')}
        name="Notificações"
        label="Ir para notificações"
        size="text-xl"
      />

      <Restaurants />

      <RestaurantVerticalList />
    </ScrollView>
  )
}
