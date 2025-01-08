// UserInfoScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const UserInfoScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [experience, setExperience] = useState('');
    const [goal, setGoal] = useState('');

    const handleSubmit = () => {
        // 처리 로직 (예: 데이터 저장, 다음 화면으로 이동)
        navigation.navigate('TrainingProgram', { name, age, gender, experience, goal });
    };

    return (
        <View style={styles.container}>
            <Text>사용자 기본 정보 입력</Text>
            <TextInput placeholder="이름" value={name} onChangeText={setName} style={styles.input} />
            <TextInput placeholder="나이" value={age} onChangeText={setAge} style={styles.input} keyboardType="numeric" />
            <TextInput placeholder="성별" value={gender} onChangeText={setGender} style={styles.input} />
            <TextInput placeholder="수영 경험 (초보, 중급, 고급)" value={experience} onChangeText={setExperience} style={styles.input} />
            <TextInput placeholder="훈련 목표" value={goal} onChangeText={setGoal} style={styles.input} />
            <Button title="제출" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    input: { borderWidth: 1, marginBottom: 10, padding: 8 }
});

export default UserInfoScreen;
