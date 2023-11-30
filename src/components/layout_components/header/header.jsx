import React from 'react';
import { Layout, Menu } from 'antd';
import { Profile } from '../../layout/profile';
import { Typography } from '@mui/material';

const { Header } = Layout;

export const HeaderSection = () => {
    return (
        <Header>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ flex: '1', marginLeft: 0, paddingLeft: 0 }}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="horizontal">
                <Menu.Item key="1">
                    Hawir Finance Management System
                </Menu.Item>
            </Menu>
        </div>
        <div style={{ marginLeft: 'auto' }}>
            <Profile />
        </div>
    </div>
    
        </Header>
    );
};

