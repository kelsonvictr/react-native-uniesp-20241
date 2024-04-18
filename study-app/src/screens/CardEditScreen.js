import { View, Text, TextInput, Button } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import StudyCardsContext from '../contexts/StudyCardsContext'

const CardEditScreen = ({ route, navigation }) => {

    const { id } = route.params || {}
    const { cards, addCard, updateCard } = useContext(StudyCardsContext)
    const card = cards.find(c => c.id === id) || {}

    const [title, setTitle] = useState(card.title || '')
    const [notes, setNotes] = useState(card.notes || '')
    const [status, setStatus] = useState(card.status || '')

  return (
    <View>
      <Text>CardEditScreen</Text>
    </View>
  )
}

export default CardEditScreen