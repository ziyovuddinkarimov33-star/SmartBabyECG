import React, { useEffect, useState } from 'react';

const DashboardScreen = () => {
    const [heartRate, setHeartRate] = useState(0);
    const [spo2, setSpo2] = useState(0);
    const [alert, setAlert] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            // Simulated fetching of data
            const randomHeartRate = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
            const randomSpo2 = Math.floor(Math.random() * (100 - 90 + 1)) + 90;

            setHeartRate(randomHeartRate);
            setSpo2(randomSpo2);

            if (randomHeartRate > 100) {
                setAlert('High Heart Rate!');
            } else if (randomHeartRate < 60) {
                setAlert('Low Heart Rate!');
            } else {
                setAlert('');
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>Live ECG Monitoring</h1>
            <h2>Heart Rate: {heartRate} bpm</h2>
            <h2>SpO2: {spo2}%</h2>
            {alert && <h3 style={{color: 'red'}}>{alert}</h3>}
        </div>
    );
};

export default DashboardScreen;
