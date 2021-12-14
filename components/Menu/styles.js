import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  icon: {
    color: "white",
  },
  menuItems: {
    marginTop:20,
    marginLeft: 20,
    marginRight: 20,
  },
  menuRow: {
    marginTop:15,
    marginBottom:15,
  flexDirection:"row",
   alignItems: "center",
  },
  menuTextBox: {
  flexGrow:1
  },
  menuText: {
    color: "white",
    marginLeft:16,
    fontSize:16,
    fontWeight:"bold",
    textTransform: "uppercase",
  },
  arrowIcon: {
    color:"#4D4D4E"
  },
  subTitle:{
    color:"grey",
    marginLeft:15,
    fontSize:14,
  }
});
export default styles;