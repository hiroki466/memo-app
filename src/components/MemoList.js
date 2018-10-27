import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>
        <View style={styles.memoItems}>
          <Text style={styles.memoTitle}>メモのタイトルが入ります。</Text>
          <Text style={styles.memoDate}>2018/02/19</Text>
        </View>
        <View style={styles.memoItems}>
          <Text style={styles.memoTitle}>メモのタイトルが入ります。</Text>
          <Text style={styles.memoDate}>2018/02/19</Text>
        </View>
        <View style={styles.memoItems}>
          <Text style={styles.memoTitle}>メモのタイトルが入ります。</Text>
          <Text style={styles.memoDate}>2018/02/19</Text>
        </View>
        <View style={styles.memoItems}>
          <Text style={styles.memoTitle}>メモのタイトルが入ります。</Text>
          <Text style={styles.memoDate}>2018/02/19</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoItems: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  memoDate: {
    fontSize: 12,
    color: '#999',
  },
});

export default MemoList;
