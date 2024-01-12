import React, { useState, useEffect } from 'react'
import { View } from 'react-native';
import Svg, { Circle, Text } from 'react-native-svg';

const CircleProgress = ({ progress }) => {

    const [circumference, setCircumference] = useState(0);

    useEffect(() => {
        const radius = 50; // Change this based on your desired size
        const calculatedCircumference = 2 * Math.PI * radius;
        setCircumference(calculatedCircumference);
      }, []);


  return (
    <View>
        <Svg width="200" height="200">
            <Circle
                cx="100"
                cy="100"
                r="50"
                fill="transparent"
                stroke="#d3d3d5"  // Change this to the progress color
                strokeWidth="30"
                stroke-dasharray="439.8"
                stroke-dashoffset="0"
            />
            <Circle
                cx="100"
                cy="100"
                r="50"
                fill="transparent"
                stroke="#389dff"  // Change this to the progress color
                strokeWidth="30"
                stroke-dasharray="439.8"
                stroke-dashoffset="66"
            />
            <Text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">85%</Text>

        </Svg>
    </View>
  )
}

export default CircleProgress
