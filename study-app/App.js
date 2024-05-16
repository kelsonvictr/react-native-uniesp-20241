import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StudyCardsProvider } from './src/contexts/StudyCardsContext';
import CardListScreen from './src/screens/CardListScreen';
import CardEditScreen from './src/screens/CardEditScreen';
import TasksDueSoonScreen from './src/screens/TasksDueSoonScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <StudyCardsProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="CardList">
                    <Stack.Screen name="CardList" component={CardListScreen} options={{ title: 'Study Cards' }} />
                    <Stack.Screen name="CardEdit" component={CardEditScreen} options={{ title: 'Editar Card' }} />
                    <Stack.Screen name="TasksDueSoon" component={TasksDueSoonScreen} options={{title: 'Tasks a Vencer'}} />
                </Stack.Navigator>
            </NavigationContainer>
        </StudyCardsProvider>
    );
};

export default App;
