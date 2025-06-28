import React from 'react'
import { Text } from 'react-native-rapi-ui'

const TabBarText = (props) => {
    return (
        <Text style={{ marginBottom: 5, fontSize: 10, marginTop: 4, fontFamily: 'Poppins-Medium',
            color : props.focused ? '#2C3D63' : "rgb(143, 155, 179)",
            fontWeight: props.focused ? 'bold' : 'normal',
         }}
            
        >{props.title}
        </Text>
    )
}

export default TabBarText