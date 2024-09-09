import { StyleSheet } from "react-native";


const ListStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E9FAE3',
    margin: 10,
    borderWidth: 1.5,
    borderRadius: 15,
  },
  text: {
    fontSize: 20,
    margin: 1,

  },
  list: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#c6d8c0',
    borderRadius: 10,
    margin:10
  
  },
  headertext: {
    fontSize: 22,
    margin: 10,
    padding: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    borderRadius: 50,
    height:25,
    width:25,
    alignSelf:'flex-end',
    position:'absolute',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent:'center',

  },
});

export default ListStyles;