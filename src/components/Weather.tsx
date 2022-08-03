
import React, {ReactElement, useState} from 'react';
import useWeather from '../hooks/weather/useWeather';

import { Select, MenuItem } from '@mui/material'


export default function Weather (): ReactElement<any> {  
    const [selectedLocation, setSelectedLocation] = useState('London');
    
    let { weather, loading } = useWeather(selectedLocation);  
    const setLocation = (event: any) => {
        setSelectedLocation(event.target.value);
    }
    return (
        <div>
            <h1>Weather</h1>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedLocation}
                label="Location"
                onChange={setLocation}
            >
                <MenuItem value={'London'}>London</MenuItem>
                <MenuItem value={'Barcelona'}>Barcelona</MenuItem>
                <MenuItem value={'Madrid'}>Madrid</MenuItem>
            </Select>
                
            {
                loading && <div>Loading...</div>
            }
            {
                !loading && 
                <div>
                    Cº <h2>{weather?.current?.temp_c}</h2>
                </div>
            }
        </div>
    )
}