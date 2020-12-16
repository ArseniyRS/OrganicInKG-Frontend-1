import React from "react";
export const OrderColumns  =[
    {
        title: "Номер заказа",
        dataIndex: 'orderNumber'
    },
    {
        title: "Дата заказа",
        dataIndex: 'desiredDeliveryDate',
    },
    {
        title: "Статус",
        dataIndex: 'cashPaymentOrderStatus',
        render: (value)=>value==='В доставке' ? <span style={{background: '#FF6800',color: '#f2f2f2',borderRadius: '5px',padding: '3px',boxSizing: 'content-box'}}>{value}</span>
            :value==='DELIVERED' ? <span style={{background: '#009B00',color: '#f2f2f2',borderRadius: '5px'}}>{value}</span>
            :value==='CLOSED' ? <span style={{background: '#fff',color: '#000',borderRadius: '5px'}}>{value}</span> : undefined

        }

]