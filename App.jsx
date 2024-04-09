import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function App() {
  const moonAnimation = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.timing(moonAnimation, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: false,
    }).start();
  }, [moonAnimation]);
  
  const moonLeft = moonAnimation.interpolate({
    inputRange: [0, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.60, 0.65, 0.70, 0.75, 0.80, 0.85, 0.90, 0.95, 1], 
    outputRange: ['0%', '3.2%', '6.8%', '10.8%', '15.2%', '20%', '25%', '30%', '34%', '38%', '40%', '38%', '34%', '30%', '25%', '20%', '15.2%', '10.8%', '6.8%', '3.2%', '0%']
  });

  const moonColor = moonAnimation.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['#d5dbdb', '#95a5a6', '#424949', '#95a5a6', '#d5dbdb']
  });

  const moontop = moonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '90%']
  });

  const backSun = moonAnimation.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['yellow', 'orange', '#873600', 'orange', 'yellow']
  });

  const backColor = moonAnimation.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: ['#aed6f1', '#2e86c1', '#1a5276', '#2e86c1', '#aed6f1']
  });
  
  return (
    <Animated.View style={[styles.container, { backgroundColor: backColor }]}>
      <View style={{ height: 20 }} />
      <Text>Eclipse 2024 🌒</Text>
      <Animated.View style={[styles.sun, { backgroundColor: backSun}]} />
      <Animated.View style={[styles.moon, { left: moonLeft, top: moontop, backgroundColor: moonColor }]} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moon: {
    position: 'absolute',
    bottom: '50%',
    width: 70,
    height: 70,
    borderRadius: 35,
    zIndex: 1,
  },
  sun: {
    position: 'absolute',
    bottom: '50%',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'orange',
  },
});
