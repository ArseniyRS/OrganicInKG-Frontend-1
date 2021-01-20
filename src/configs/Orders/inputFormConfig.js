import {addressData} from "../../components/Inputs/SelectorInput/data/addressData";

export const orderInputConfig = [
    {
        label: 'Имя'
    },
    {
        label: 'Фамилия'
    },
    {
        label: 'Номер телефона'
    },
    {
    label: "Адрес доставки",
   placeholder: "Бишкек Советская Боконбаева",
        type: 'map',
        selectInputData:addressData
    },
    {
        label: "Тип доставки",
        placeholder: "Самовывоз/Курьер",
        type: 'selector',
        selectorProperty: 'deliveryType',
    },
    {
        label: "Дата заказа",
    },
    {
        label: "Тип оплаты",
        placeholder: "Эльсом/Наличные",
        type: 'selector',
        selectorProperty: 'paymentType',
    },
    {
        label: "Адрес склада",
        placeholder: "Бишкек Советская Боконбаева",
        type: 'map',
        selectInputData:addressData
    },
    {
        label: "Статус заказа",
        placeholder: "Выберите статус",
        type: 'selector',
        selectorProperty: 'status',
    }
   ]

