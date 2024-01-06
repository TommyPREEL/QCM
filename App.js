import { StyleSheet } from 'react-native';
import React from 'react';
import { ModuleRouter } from './router/moduleRouter';

export default function App() {

  return (
    <ModuleRouter />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 30,
    fontSize: 24,
    textAlign: 'center',
  },
  button: {
    marginBottom: 15,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  checkbox: {
    padding: 10,
    color: 'black',
    display: 'flex',
    flexDirection: 'row',
  }
});
