import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Ir para os Detalhes" onPress={() => navigation.navigate('Details', {
        itemId: 86,
        otherParam: 'Qualquer coisa...'
      }
      )}
      />
    </View>
  )
}

export default HomeScreen