import React from 'react'
import { Layout, } from 'antd';
import { Routes, Route} from 'react-router-dom';
import PaymentOrder from '../../../routes/payment_order/payment_order';
import Dashboard from '../../../routes/home/home';
import PassengerDepositeAccContainer from '../../../routes/passenger_deposite_acc/passenger_deposite_acc_container';
import AgentReceipt from '../../../routes/receipt/agent_receipt/agent_receipt';
import Commission from '../../../routes/report/commission/commission_container';
import Disbursement from '../../../routes/report/disbursement/disbursement_container';
import TotalIncome from '../../../routes/report/total_income/total_income';
import Home from '../../../routes/home/home';
import CashReceiptVoucherContainer from '../../../routes/receipt/cash_receipt_voucher/cash_receipt_voucher_container';
import Setting from '../../../routes/setting/setting';
import CommissionContainer from '../../../routes/report/commission/commission_container';
import DisbursementContainer from '../../../routes/report/disbursement/disbursement_container';

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
            <Route path="/passenger_deposite_acc/passenger_deposite_acc_container" element={<PassengerDepositeAccContainer />} />
            <Route path="/payment_order/payment_order" element={<PaymentOrder />} />
            <Route path="/receipt/agent_receipt" element={<AgentReceipt />} />
            <Route path="/receipt/cash_receipt_voucher/cash_receipt_voucher_container" element={<CashReceiptVoucherContainer />} />
            <Route path="/report/commission_container" element={<CommissionContainer />} />
            <Route path="/report/disbursement_container" element={<DisbursementContainer />} />
            <Route path="/report/total_income" element={<TotalIncome />} />
            <Route path="/setting/setting" element={<Setting />} />
        </Routes>
    </Content>
  )
}


 

