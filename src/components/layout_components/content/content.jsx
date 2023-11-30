import React from 'react'
import { Layout, } from 'antd';
import { Routes, Route} from 'react-router-dom';
import PaymentOrder from '../../../routes/payment_order/payment_order';
import Dashboard from '../../../routes/home/home';
import PassengerDepositeAcc from '../../../routes/passenger_deposite_acc/passenger_deposite_acc';
import AgentReceipt from '../../../routes/receipt/agent_receipt/agent_receipt';
import CashReceiptVoucher from '../../../routes/receipt/cash_receipt_voucher/cash_receipt_voucher';
import Commission from '../../../routes/report/commission/commission';
import Disbursement from '../../../routes/report/disbursement/disbursement';
import TotalIncome from '../../../routes/report/total_income/total_income';
import Home from '../../../routes/home/home';

const { Content,} = Layout;

export const ContentSection = () => {

  return (
    <Content
        style={{
            paddingTop: 5,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom:0,
            margin: 0,
            overflow: 'auto',
            minHeight: '30%',
            background: '#D3D3D3',
            height: 'calc(100vh - 8vh)', 
        }}
    >
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/passenger_deposite_acc/passenger_deposite_acc" element={<PassengerDepositeAcc />} />
            <Route path="/payment_order/payment_order" element={<PaymentOrder />} />
            <Route path="/receipt/agent_receipt" element={<AgentReceipt />} />
            <Route path="/receipt/cash_receipt_voucher" element={<CashReceiptVoucher />} />
            <Route path="/report/commission" element={<Commission />} />
            <Route path="/report/disbursement" element={<Disbursement />} />
            <Route path="/report/total_income" element={<TotalIncome />} />
        </Routes>
    </Content>
  )
}


 

