import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SettingsScreen = () => {
    const [heartRateThreshold, setHeartRateThreshold] = React.useState('');
    const [notificationEnabled, setNotificationEnabled] = React.useState(false);

    const handleSaveSettings = () => {
        // Logic to save settings
        alert(`Settings saved! Heart Rate Threshold: ${heartRateThreshold}, Notifications: ${notificationEnabled ? 'Enabled' : 'Disabled'}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Text>Heart Rate Threshold (bpm):</Text>
            <TextInput
                style={styles.input}
                value={heartRateThreshold}
                onChangeText={setHeartRateThreshold}
                keyboardType='numeric'
            />
            <Text>Enable Notifications:</Text>
            <Button
                title={notificationEnabled ? 'Disable' : 'Enable'}
                onPress={() => setNotificationEnabled(!notificationEnabled)}
            />
            <Button title='Save Settings' onPress={handleSaveSettings} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default SettingsScreen;
