import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Row = props => (
  <View style={styles.row}>
    <Text>{props.name}</Text>
    <Text>{props.phone}</Text>
  </View>
)

export default Row;

const styles = StyleSheet.create({
  row: {padding: 20},
});