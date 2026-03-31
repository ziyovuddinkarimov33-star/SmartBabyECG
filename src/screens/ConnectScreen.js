import React, { useEffect, useState } from 'react';

const ConnectScreen = () => {
    const [devices, setDevices] = useState([]);
    const [connectedDevice, setConnectedDevice] = useState(null);

    useEffect(() => {
        // Logic to fetch available WiFi devices
        // Placeholder for device connection logic

        const fetchDevices = async () => {
            // Simulate fetching devices, replace with real API calls
            const fetchedDevices = await new Promise((resolve) => {
                setTimeout(() => resolve(['Device 1', 'Device 2', 'Device 3']), 1000);
            });
            setDevices(fetchedDevices);
        };

        fetchDevices();
    }, []);

    const connectToDevice = (device) => {
        setConnectedDevice(device);
        alert(`Connected to ${device}`);
        // Additional connection logic goes here
    };

    return (
        <div>
            <h1>Connect to a WiFi Device</h1>
            <ul>
                {devices.map((device, index) => (
                    <li key={index}>
                        <button onClick={() => connectToDevice(device)}>{device}</button>
                    </li>
                ))}
            </ul>
            {connectedDevice && <p>Currently connected to: {connectedDevice}</p>}
        </div>
    );
};

export default ConnectScreen;