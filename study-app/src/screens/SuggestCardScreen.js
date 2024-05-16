import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import StudyCardsContext from '../contexts/StudyCardsContext';

const SuggestCardScreen = ({ navigation }) => {
    const { addCard } = useContext(StudyCardsContext);
    const [subject, setSubject] = useState('Backend');
    const [level, setLevel] = useState('iniciante');

    const getCardSuggestions = async (subject, level) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const suggestions = {
                    'Backend-iniciante': [
                        { title: 'Estudar lógica de programação', notes: 'Conceitos básicos de lógica de programação' },
                        { title: 'Estudar Java', notes: 'Introdução à linguagem de programação Java' },
                        { title: 'Estudar Banco de Dados', notes: 'Noções básicas de banco de dados e SQL' },
                    ],
                    'Frontend-iniciante': [
                        { title: 'Estudar HTML', notes: 'Estrutura básica de uma página web' },
                        { title: 'Estudar CSS', notes: 'Estilos básicos de uma página web' },
                        { title: 'Estudar JavaScript', notes: 'Introdução à linguagem de programação JavaScript' },
                    ],
                    'Testes (QA)-iniciante': [
                        { title: 'Estudar testes unitários', notes: 'Conceitos básicos de testes unitários' },
                        { title: 'Estudar testes de integração', notes: 'Noções básicas de testes de integração' },
                        { title: 'Estudar ferramentas de teste', notes: 'Ferramentas básicas para testes automatizados' },
                    ],
                };
                resolve(suggestions[`${subject}-${level}`]);
            }, 1000);
        });
    };

    const handleSubmit = async () => {
        const suggestions = await getCardSuggestions(subject, level);
        suggestions.forEach(suggestion => {
            addCard({ ...suggestion, status: 'backlog' });
        });
        Alert.alert('Sucesso', '3 cards foram adicionados ao backlog!');
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Assunto do Card:</Text>
            <Picker
                selectedValue={subject}
                style={styles.picker}
                onValueChange={(itemValue) => setSubject(itemValue)}
            >
                <Picker.Item label="Backend" value="Backend" />
                <Picker.Item label="Frontend" value="Frontend" />
                <Picker.Item label="Testes (QA)" value="Testes (QA)" />
            </Picker>

            <Text style={styles.label}>Nível:</Text>
            <Picker
                selectedValue={level}
                style={styles.picker}
                onValueChange={(itemValue) => setLevel(itemValue)}
            >
                <Picker.Item label="Iniciante" value="iniciante" />
                <Picker.Item label="Intermediário" value="intermediário" />
                <Picker.Item label="Avançado" value="avançado" />
            </Picker>

            <Button title="Pedir Sugestão" onPress={handleSubmit} color="#32cd32" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 20,
    },
});

export default SuggestCardScreen;
