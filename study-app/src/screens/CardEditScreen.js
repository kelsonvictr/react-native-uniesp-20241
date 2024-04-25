import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { Picker } from '@react-native-picker/picker'
import StudyCardsContext from '../contexts/StudyCardsContext'

const CardEditScreen = ({ route, navigation }) => {

    const { id } = route.params || {}
    const { cards, addCard, updateCard } = useContext(StudyCardsContext)
    const card = cards.find(c => c.id === id) || {}

    const [title, setTitle] = useState(card.title || '')
    const [notes, setNotes] = useState(card.notes || '')
    const [status, setStatus] = useState(card.status || '')

    useEffect(() => {
      if (id) {
        setTitle(card.title)
        setStatus(card.status)
        setNotes(card.notes)
      }
    }, [id, card])

    const handleSave = () => {
      const cardData = { title, notes, status }

      if (id) {
        updateCard(id, cardData)
      } else {
        addCard(cardData)
      }

      navigation.goBack()
    }

  return (
    <View style={styles.container}>
            <Text style={styles.label}>Título:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Título do Card..."
            />
            <Text style={styles.label}>Notas:</Text>
            <TextInput
                style={styles.input}
                value={notes}
                onChangeText={setNotes}
                placeholder="Insira uma descrição..."
                multiline
            />
            <Text style={styles.label}>Status:</Text>
            <Picker
                selectedValue={status}
                style={styles.input}
                onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}>
                <Picker.Item label="Backlog" value="backlog" />
                <Picker.Item label="Em Progresso" value="in_progress" />
                <Picker.Item label="Concluído" value="done" />
            </Picker>
            <Button title="Salvar" onPress={handleSave} color="#32cd32" />
        </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f9f9f9',
  },
  label: {
      fontSize: 16,
      marginBottom: 5,
  },
  input: {
      fontSize: 14,
      borderWidth: 1,
      borderColor: '#cccccc',
      padding: 10,
      marginBottom: 15,
      borderRadius: 5,
      width: '100%', // Certifique-se de que o picker preencha o espaço disponível
  }
});

export default CardEditScreen