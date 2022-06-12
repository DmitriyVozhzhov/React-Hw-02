import React, { useState, useEffect } from 'react'

export function Timer() {
    let [date, setDate] = useState(new Date());
    let [status, setStatus] = useState(true)

    useEffect(() => {
        let interval;
        if (status) {
            interval = setInterval(() => {
                setDate(new Date())
            }, 1000);
        }

        return () => {
            clearInterval(interval)
        }
    }, [status])

    return (
        <div>
            <h2>HW 13</h2>
            <div className="time">
                <h2>{date.toLocaleTimeString()}</h2>
            </div>
            <button className="stop" onClick={() => setStatus(false)}>Stop</button>
            <button className="start" onClick={() => setStatus(true)}>Start</button>
        </div >
    );
}

export default Timer