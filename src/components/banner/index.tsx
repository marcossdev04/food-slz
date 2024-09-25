/* eslint-disable @typescript-eslint/no-require-imports */
import { Image, Pressable, View } from 'react-native'
import PagerView from 'react-native-pager-view'

export function Banner() {
  return (
    <View className="w-full h-36 rounded-2xl mt-5 mb-4">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable
          className="w-full h-36 md:h-60 rounded-2xl"
          key="1"
          onPress={() => {
            console.log('pressionou no 1')
          }}
        >
          <Image
            source={require('../../assets/img/banner1.png')}
            alt="banner"
            className="w-full h-36 md:h-60 rounded-2xl"
          />
        </Pressable>

        <Pressable
          className="w-full h-36 md:h-60 rounded-2xl"
          key="2"
          onPress={() => {
            console.log('pressionou no 1')
          }}
        >
          <Image
            source={require('../../assets/img/banner2.png')}
            alt="banner"
            className="w-full h-36 md:h-60 rounded-2xl"
          />
        </Pressable>
      </PagerView>
    </View>
  )
}
