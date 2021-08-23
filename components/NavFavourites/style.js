import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  itemBorder: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  itemIcon: {
    marginRight: 10,
    borderRadius: 50,
    backgroundColor: 'gray',
    padding: 15,
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemTextDesc: {
    color: 'gray',
  }
})
