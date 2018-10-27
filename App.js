import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from './src/components/MemoList';
import AppBar from './src/components/AppBar';
import RoundBtn from './src/elements/RoundBtn';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppBar />
        <MemoList />
        <RoundBtn>+</RoundBtn>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});
