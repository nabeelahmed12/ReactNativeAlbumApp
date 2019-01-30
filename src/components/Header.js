import React from 'react';
import {Text,View} from 'react-native';

const Header= (props)=> {
 // const {textStyle, ViewStyle} = styles;
    return (
        <View style={styles.ViewStyle}>
            <Text style={styles.textStyle} >{props.headerText}</Text>
        </View>
    );
};

const styles = {
   ViewStyle:{
       backgroundColor: '#F8F8F8',
       justifyContent: 'center',
       alignItems: 'center',
       height: 50,
       paddingTop: 15,
       shadowColor: '#000',
       shadowOffset: { width: 0  , height : 2},
       elevation: 2,
       position: 'relative',
       shadowOpacity: 0.2

   },
    textStyle :{
        fontSize : 20
        
    }
}


export default Header