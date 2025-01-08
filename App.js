// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserInfoScreen from './UserInfoScreen';
import TrainingProgramScreen from './TrainingProgramScreen';
import WorkoutRecordScreen from './WorkoutRecordScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="UserInfo">
                <Stack.Screen name="UserInfo" component={UserInfoScreen} />
                <Stack.Screen name="TrainingProgram" component={TrainingProgramScreen} />
                <Stack.Screen name="WorkoutRecord" component={WorkoutRecordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
