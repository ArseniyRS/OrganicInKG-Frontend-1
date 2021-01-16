export const toBeautifyFieldsValue = (value)=>{
    switch (value) {

        case 'CASH':
            return 'Наличные'
        case 'ELSOM':
            return 'Эльсом'
        case 'COURIER':
            return 'Курьер'
        case 'STORAGE':
            return 'Самовывоз'
        case 'AWAITING_DELIVERY':
            return 'Ожидает доставку'
        case 'PAID_AWAITNG_DELIVERY':
            return 'Оплачен, ожидает доставку'
        case 'DELIVERED_AND_PAID':
            return 'Доставлен и оплачен'
        case 'DELIVERED':
            return 'Доставлен'
        case 'CLOSED':
            return 'Закрыт'
        case null:
            return 'Не указано'
        case 'null':
            return 'Не указано'
        case '':
            return 'Не указано'
        case NaN:
            return 'Не указано'
        case undefined:
            return 'Не указано'
        case 'SOM':
            return 'сом'
        case 'USD':
            return '$'
        default:
            return value
    }
}