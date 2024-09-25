import { View, ScrollView } from 'react-native'
import { Header } from '../components/header'

import Constants from 'expo-constants'
import { Banner } from '../components/banner'
import { Search } from '../components/search'
import { Section } from '../components/section'
import { TrandingFoods } from '../components/trending'
import { Restaurants } from '../components/restaurants'
import { RestaurantVerticalList } from '../components/list'

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
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
        name="Famosos no FoodSlz"
        label="Veja todos"
        action={() => {
          console.log('Clicou no veja mais')
        }}
        size="text-xl"
      />

      <Restaurants />

      <Section
        name="Famosos no FoodSlz"
        label="Veja todos"
        action={() => {
          console.log('Clicou no veja mais')
        }}
        size="text-xl"
      />

      <RestaurantVerticalList />
    </ScrollView>
  )
}
