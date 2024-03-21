import { View, Text } from 'react-native'
import React from 'react'

const Exercicio4 = () => {

    const alunos = ['Thiago', 'Gustavo', 'Wisley', 'João']

  return (
    <View>
      {
        alunos.map((item, index) => (
            <Text key={index}>{item}</Text>
        ))
      }
    </View>
  )
}

export default Exercicio4