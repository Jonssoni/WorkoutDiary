import { StyleSheet } from "react-native";


const ListStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E9FAE3',
    borderTopWidth: 1,
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
    fontWeight: 'bold',
    borderBottomWidth:2,
  },
  deleteButton: {
  
    position: 'absolute',
    right: 5, 
    top: 5, 

  },
  deleteImage: {
    width: 25, 
    height: 25,
  },
});

export default ListStyles;