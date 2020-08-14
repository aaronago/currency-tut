import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import colors from "../constants/colors";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  separator: {
    backgroundColor: colors.border,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

const RowItem = ({ rightIcon, text, onPress }) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
    {rightIcon}
  </TouchableOpacity>
);

export default RowItem;

export const RowSeparator = () => {
  return <View style={styles.separator} />;
};
