import {addressData} from "../../components/Inputs/SelectorInput/data/addressData";

export const orderInputConfig = [
    {
    label: "Адрес доставки",
   placeholder: "Бишкек Советская Боконбаева",
        type: 'selectInput',
        selectInputData:addressData
    },
    {
        label: "Тип доставки",
        placeholder: "Самовывоз/Курьер",
        type: 'selectInput',
        selectInputData:[{
            id: 1,
            name: "Курьер"
        },
            {
            id:2,
            name: "Самовывоз"
        }]
    },
    {
        label: "Дата заказа",
    },
    {
        label: "Тип оплаты",
        placeholder: "Эльсом/Наличные",
        type: 'selectInput',
        selectInputData:[{
            id: 1,
            name: "Эльсом"
        },
            {
                id:2,
                name: "Наличные"
            }]
    },
    {
        label: "Адрес склада",
        placeholder: "Бишкек Советская Боконбаева",
        type: 'selectInput',
        selectInputData:addressData
    },
   ]

