import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Payment } from './src/screens/Payment';

export default function App() {
  return (
    <>
      <StatusBar style='light' backgroundColor='transparent' translucent />
      <Payment />
    </>
  );
}
