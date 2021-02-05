import {addressData} from "../../components/Inputs/SelectorInput/data/addressData";

export const orderInputConfig = [
    {
        label: 'Имя',
        readonly: true
    },
    {
        label: 'Фамилия',
        readonly: true
    },
    {
        label: 'Номер телефона',
        readonly: true
    },
    {
    label: "Адрес доставки",
   placeholder: "Бишкек Советская Боконбаева",
    readonly: true
        // type: 'map',
        // selectInputData:addressData
    },
    {
        label: "Тип доставки",
        placeholder: "Самовывоз/Курьер",
        readonly: true
        // type: 'selector',
        // selectorProperty: 'deliveryType',
    },
    {
        label: "Дата заказа",
        readonly: true
    },
    {
        label: "Тип оплаты",
        placeholder: "Эльсом/Наличные",
        readonly: true
        // type: 'selector',
        // selectorProperty: 'paymentType',
    },
    {
        label: "Адрес склада",
        placeholder: "Бишкек Советская Боконбаева",
        readonly: true
        // type: 'map',
        // selectInputData:addressData
    },
    {
        label: "Статус заказа",
        placeholder: "Выберите статус",
        type: 'selector',
        selectorProperty: 'status',
    }
   ]

