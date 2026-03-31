import React, { createContext, useContext, useState } from 'react';

// Create context
const DeviceContext = createContext();

// Create provider component
export const DeviceProvider = ({ children }) => {
    const [wifiConnected, setWifiConnected] = useState(false);
    const [ecgData, setEcgData] = useState([]);
    const [alerts, setAlerts] = useState([]);
    const [history, setHistory] = useState([]);

    // Function to update WiFi connection status
    const updateWifiConnection = (status) => {
        setWifiConnected(status);
    };

    // Function to log ECG data
    const logEcgData = (data) => {
        setEcgData(prevData => [...prevData, data]);
        setHistory(prevHistory => [...prevHistory, { data, timestamp: new Date() }]);
    };

    // Function to add alert
    const addAlert = (alert) => {
        setAlerts(prevAlerts => [...prevAlerts, alert]);
    };

    return (
        <DeviceContext.Provider value={{ wifiConnected, updateWifiConnection, ecgData, logEcgData, alerts, addAlert }}>
            {children}
        </DeviceContext.Provider>
    );
};

// Custom hook to use the DeviceContext
export const useDeviceContext = () => {
    return useContext(DeviceContext);
};
