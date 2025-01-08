// TrainingProgramScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TrainingProgramScreen = ({ route }) => {
    const { name, experience } = route.params;

    // 간단한 훈련 프로그램 제안 로직
    const program = experience === '초보'
        ? '주 3회, 각 세션 30분 훈련'
        : experience === '중급'
        ? '주 4회, 각 세션 45분 훈련'
        : '주 5회, 각 세션 60분 훈련';

    return (
        <View style={styles.container}>
            <Text>{name}님을 위한 훈련 프로그램</Text>
            <Text>{program}</Text>
            <Button title="운동 기록하기" onPress={() => navigation.navigate('WorkoutRecord')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 }
});

export default TrainingProgramScreen;
