import React from "react";
export const OrderColumns  =[
    {
        title: "Тип оплаты",
        dataIndex: 'paymentType'
    },
    {
        title: "Дата заказа",
        dataIndex: 'desiredDeliveryDate',
    },
    {
        title: "Статус",
        dataIndex: 'orderStatus',
        render: (value)=>
            value==='Ожидает доставку'  || value ==='Оплачен, ожидает доставку' ?
            <span style={{background: '#FF6800',color: '#f2f2f2',borderRadius: '5px',padding: '3px',margin: '3px 0'}}>{value}</span>
            :value==='Доставлен' || value === 'Доставлен и оплачен' ? <span style={{background: '#009B00',color: '#f2f2f2',borderRadius: '5px',padding: '3px'}}>{value}</span>
            :value==='Закрыт' ? <span style={{background: '#fff',color: '#000',borderRadius: '5px',padding: '3px'}}>{value}</span> : value

        }

]