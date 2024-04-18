import { View, Text, Button, FlatList } from 'react-native'
import React, { useContext } from 'react'
import StudyCardsContext from '../contexts/StudyCardsContext'

const CardListScreen = ({ navigation }) => {

    const { cards, deleteCard } = useContext(StudyCardsContext)

  return (
    <View>
      <FlatList 
        data={cards}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
            <View>
                <Text>{item.title}</Text>
                <Text>Status: {item.status}</Text>
                <Button title='Editar' onPress={() => navigation.navigate('CardEdit', { id: item.id })} />
                <Button title='Deletar' onPress={() => deleteCard(item.id)} />
            </View>
        )

        }
      />
      <Button title='Adicionar Card' onPress={() => navigation.navigate('CardEdit')} />
    </View>
  )
}

export default CardListScreen