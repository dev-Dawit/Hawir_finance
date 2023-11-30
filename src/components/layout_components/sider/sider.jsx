import React from 'react'
import { Layout, Menu } from 'antd';
import { DashboardOutlined, BankOutlined, PrinterOutlined, DollarOutlined, FileOutlined } from '@ant-design/icons';
    
import { Link } from 'react-router-dom';
const { Sider } = Layout;   

export const SiderSection = () => {

    const DashboardIcon = () => (
      <div>
        <DashboardOutlined style={{ marginRight: '10px' }} /> 
      </div>
    );
  
    const PADicon = () => (
      <div style={{ marginRight: '7px', marginLeft: '-2px' }}>
        <BankOutlined style={{ marginRight: '10px' }}/>
      </div>
    );

    const ReportIcon = () => (
      <div>
          <FileOutlined  style={{ marginRight: '10px' }} />
        </div>
    )

    const ReceiptIcon = () => (
      <div>
          <PrinterOutlined style={{ marginRight: '10px' }}/> 
        </div>
    )

    const PaymentOrderIcon = () => (
      <div>
          <DollarOutlined style={{ marginRight: '10px' }} />
        </div>
    )

    const { SubMenu } = Menu;
    return (
      <Sider  style={{ background: '#f0f2f5', overflowY: 'auto' }}>
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">

            <Menu.Item key="1" icon={<DashboardIcon />}>
                <Link to='/'> Dashboard </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<PADicon />}>
                <Link to='/passenger_deposite_acc/passenger_deposite_acc'> Passenger Deposite Acc </Link>
            </Menu.Item>
            <SubMenu key="reportSubMenu" icon={<ReportIcon />} title="Report">
              <Menu.Item key="3">
                <Link to='/report/commission'>Commission</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to='/report/disbursement'>Disbursement</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to='/report/total_income'>Total Income</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="receiptSubMenu" icon={<ReceiptIcon />} title="Receipt">
              <Menu.Item key="6">
                <Link to='/receipt/cash_receipt_voucher'>Commission</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to='/receipt/agent_receipt'>Disbursement</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="8" icon={<PaymentOrderIcon />}>
                <Link to='/payment_order/payment_order'>Payment Order</Link>
            </Menu.Item>
          </Menu>
        </Sider>
    )
}



