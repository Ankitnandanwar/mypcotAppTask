import React from 'react'
import { Icons } from '../icons/iconssvg'


const TabBarIcons = ({ icon, focused }) => {
    const IconComponent = Icons[icon];
    if (!IconComponent) return null;
    return (
        <IconComponent width={22} height={22} style={{marginBottom: -8,}} fill={focused ? '#2C3D63' : "rgb(143, 155, 179)"} />
    )
}

export default TabBarIcons