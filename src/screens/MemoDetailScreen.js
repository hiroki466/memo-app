import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import RoundBtn from '../elements/RoundBtn';

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.detailHeader}>
          <Text style={styles.detailHeaderTitle}>メモタイトル</Text>
          <Text style={styles.detailHeaderDate}>memo date</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}>test texts for body</Text>
        </View>
        <RoundBtn color="white" style={styles.editBtn}>+</RoundBtn>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  detailHeader: {
    height: 100,
    justifyContent: 'center',
    backgroundColor: '#ccc',
    paddingLeft: 20,
  },
  detailHeaderTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  detailHeaderDate: {
    fontSize: 12,
  },
  bodyContainer: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  bodyText: {},
  editBtn: {
    top: 75,
  },
});

export default MemoDetailScreen;
