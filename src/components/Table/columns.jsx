import { withRouter, RouteComponentProps } from "react-router-dom"
import {useDispatch} from "react-redux";
import React,{useCallback} from "react";
import {badStatusSVG, goodStatusSVG} from "../../assets/icons";



// const ColumnActions:React.FC<ColumnActionsPropsType & RouteComponentProps> = (props)=>{
//
//     const ref=props.match.path.slice(1,props.location.pathname.length)
//     const dispatch = useDispatch()
//     // const openModal = useCallback(()=>{
//     //     dispatch(toggleModal({
//     //         isOpen: true,
//     //         type: 'DELETE',
//     //         data:{
//     //             typeRow: ref,
//     //             id: props.row.key}
//     //     }))
//     // },[dispatch])
//     return(
//         <Space size="middle">
//             <span onClick={()=>props.history.push(`/${ref}/edit-${ref}/${props.row.key}`)}>Изменить</span>
//             <span
//                 // onClick={()=>openModal()}
//             >Удалить</span>
//         </Space>
//
//     )
// }




export const ProductColumns  =[
    {
        title: "Название",
        dataIndex: 'title',
    },
    {
        title: "Категория",
        dataIndex: 'category',
    },
    {
        title: "Цена",
        dataIndex: 'price',

    },
    {
        title: "Описание",
        dataIndex: 'description',

    },
    {
        title: "Рейтинг",
        dataIndex: 'rate',

    },
    {
        title: "Кол-во продаж",
        dataIndex: 'sales_amount',

    },
    {
        title: 'Действие',
        key: 'action',
        // render: (row:CategoryColumns) => <ColumnActions row={row}/>,
    },
]

export const UsersColumns  =[
    {
        title: "ID",
        dataIndex: 'id',
    },
    {
        title: "Имя",
        dataIndex: 'first_name',
    },
    {
        title: "Фамилия",
        dataIndex: 'last_name',

    },
    {
        title: "Отчество",
        dataIndex: 'middle_name',

    },
    {
        title: "E-mail",
        dataIndex: 'email',

    },

]

export const OrdersColumns  =[
    {
        title: "ID",
        dataIndex: 'order_id',
    },
    {
        title: "Товар",
        dataIndex: 'product',
    },
    {
        title: "Количество",
        dataIndex: 'amount',
    },
    {
        title: "Сумма",
        dataIndex: 'total',

    },
    {
        title: "Адрес",
        dataIndex: 'delivery_address',

    },


]