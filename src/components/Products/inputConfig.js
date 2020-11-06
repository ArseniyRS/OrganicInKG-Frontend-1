export const productInputConfig = [
    {
        label: "Название товара",
        placeholder: "Картошка",
        required: "Впишите название товара",
        min: 3,
        max: 50,
    },
    {
        label: "Категория",
        placeholder: "Органические",
        type: 'selector'
    },
    {
        label: "Фото товара",
        type: 'image'
    },
    {
        label: "Описание",
        placeholder: "Самый вкусгый картофель",
    },
    {
        label: "Цена",
        placeholder: "30 сом/кг",
    },
    {
        label: "Рейтинг",
        placeholder: "0-5",
    },
    {
        label: "Количество продаж",
        placeholder: "100500",
    },
]