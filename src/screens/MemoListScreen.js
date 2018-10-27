import React from 'react';
import { StyleSheet, View } from 'react-native';

import MemoList from '../components/MemoList';
import RoundBtn from '../elements/RoundBtn';

class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <MemoList />
        <RoundBtn>+</RoundBtn>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: '100%',
  },
});

export default MemoListScreen;
