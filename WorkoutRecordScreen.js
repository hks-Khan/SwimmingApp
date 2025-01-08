// WorkoutRecordScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const WorkoutRecordScreen = () => {
    const [date, setDate] = useState('');
    const [distance, setDistance] = useState('');
    const [time, setTime] = useState('');

    const handleRecord = () => {
        // 운동 기록 저장 로직 (예: 데이터베이스에 저장)
        console.log(`운동 기록: 날짜: ${date}, 거리: ${distance}, 시간: ${time}`);
    };

    return (
        <View style={styles.container}>
            <Text>운동 기록하기</Text>
            <TextInput placeholder="날짜" value={date} onChangeText={setDate} style={styles.input} />
            <TextInput placeholder="거리 (미터)" value={distance} onChangeText={setDistance} style={styles.input} keyboardType="numeric" />
            <TextInput placeholder="시간 (분)" value={time} onChangeText={setTime} style={styles.input} keyboardType="numeric" />
            <Button title="기록 저장" onPress={handleRecord} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    input: { borderWidth: 1, marginBottom: 10, padding: 8 }
});

export default WorkoutRecordScreen;
