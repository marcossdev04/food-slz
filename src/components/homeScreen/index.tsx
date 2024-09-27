import { ScrollView, View } from 'react-native'
import { Banner } from '../banner'
import { Header } from '../header'
import { RestaurantVerticalList } from '../list'
import { Restaurants } from '../restaurants'
import { Search } from '../search'
import { Section } from '../section'
import { TrandingFoods } from '../trending'
import Constants from 'expo-constants'

export function HomeScreen() {
  const statusBarHeight = Constants.statusBarHeight
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
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
