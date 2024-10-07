import { StyleSheet } from "react-native";

const SettingsStyle = StyleSheet.create({
  
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin:10,
    justifyContent:'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
    padding:50,
    borderWidth:1,
    marginTop:10,
    borderRadius:10,
    backgroundColor:'#c6d8c0'
  },
  textstyle: {
    fontSize:15,
    fontWeight:'bold'
  },
  textstyle1: {
    fontSize:20,
    margin:20,
    fontWeight:'bold',
    textAlign:'center'
  },
  safearea: {
    flex:1,
    padding: 10,
    backgroundColor: '#E9FAE3',
  },
  total: {
  fontSize:5,
  }
});

export default SettingsStyle;
