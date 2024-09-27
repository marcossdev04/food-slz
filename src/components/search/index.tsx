import { Feather } from '@expo/vector-icons'
import Constants from 'expo-constants'
import { useState, useRef } from 'react'
import { TextInput, View, Pressable, Text } from 'react-native'

export function SearchComponent() {
  const statusBarHeight = Constants.statusBarHeight
  const [isFocused, setIsFocused] = useState(false)
  const [searchText, setSearchText] = useState('')
  const textInputRef = useRef<TextInput>(null)
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'flex-start',
      }}
      className="px-4 flex flex-row items-center gap-2 bg-white"
    >
      <View style={{ marginTop: statusBarHeight + 8 }} className="w-full">
        <View
          className={`flex flex-row border border-slate-500 h-14 rounded-lg ${isFocused ? 'w-[85%]' : 'w-full'} items-center gap-4 px-4 bg-transparent`}
        >
          <Feather name="search" size={18} color={'#e70000'} />
          <TextInput
            ref={textInputRef}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Procure sua comida"
            value={searchText}
            onChangeText={setSearchText}
            className="w-full flex-1 h-full bg-transparent"
          />
        </View>
        <Pressable
          className="w-full py-2"
          onPress={() => {
            setIsFocused(false)
            setSearchText('')
            textInputRef.current?.blur()
          }}
        >
          <Text
            style={{ color: '#e70000' }}
            className={`text-lg ${isFocused ? '' : 'hidden'}`}
          >
            Cancelar
          </Text>
        </Pressable>
      </View>
    </View>
  )
}
