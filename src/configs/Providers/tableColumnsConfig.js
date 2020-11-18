import {badStatusSVG, goodStatusSVG} from "../../assets/icons";
import React from "react";

export const ProviderColumns  =[
    {
        title: "ФИО",
        dataIndex: 'fullName',
    },
    {
        title: "Телефон",
        dataIndex: 'phone',

    },
    {
        title: "Статус",
        dataIndex: 'status',
        render: (value)=>value? <img src={goodStatusSVG} /> : <img src={badStatusSVG} alt=""/>
    }
]