
export const settingsInputConfig = [
    {
    label: "Цена за доставку",
    placeholder: "150",
        dataType: 'number',
        min: {
        number: 0,
            text: 'Минимальная сумма доставки: '
        },
    required: "Укажите цену доставки",
        key: 'deliveryPrice'
    }
    ]