import React from 'react'
import { Popconfirm } from 'antd';

const PopConfirm = ({children, text, visible, confirm}) => (

    <div style={{ clear: 'both', whiteSpace: 'nowrap' }}>
       
        <Popconfirm 
            placement="bottom" 
            title={text} 
            visible={visible}
            onConfirm={confirm} 
            okText="Ok" 
            cancelText="Cancel"
        >
            {children}
        </Popconfirm>
       
    </div>

);

export default PopConfirm;