export const toUglyfyFieldsValue = (value)=>{
    switch (value) {

        case 'Наличные':
            return 'CASH'
        case 'Эльсом':
            return 'ELSOM'
        case 'Курьер':
            return 'COURIER'
        case 'Самовывоз':
            return 'STORAGE'
        case 'В доставке':
            return 'AWAITING_DELIVERY'
        case 'Доставлен и оплачен':
            return 'DELIVERED_AND_PAID'
        case 'Закрыт':
            return 'CLOSED'

        default:
            return value
    }
}