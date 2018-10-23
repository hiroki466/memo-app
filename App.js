import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.appBar}>
          <View>
            <Text style={styles.appBarText}>MEMOT</Text>
          </View>
        </View>

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

        <View style={styles.memoAddButton}>
          <Text style={styles.memoAddButtonText}>+</Text>
        </View>

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
  appBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 78,
    backgroundColor: '#555',
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    zIndex: 2,
  },
  appBarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
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
  memoAddButton: {
    position: 'absolute',
    right: 34,
    bottom: 34,
    width: 50,
    height: 50,
    backgroundColor: '#e0537e',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  memoAddButtonText: {
    fontSize: 34,
    color: '#fff',
    lineHeight: 34,
  },
});
