export const productInputConfig = [
    {
        label: "Название товара",
        placeholder: "Картошка",
        required: "Впишите название товара",
        min: 3,
        max: 50,
    },
    {
        label: "Категория товара",
        placeholder: "Выберите категорию товара",
        type: 'selector'
    },
    {
        label: "Изображение товара",
        type: 'image'
    },
    {
        label: "Описание товара",
        placeholder: "Самый вкусгый картофель",
    },
    {
        label: "Цена товара",
        placeholder: "30 сом/кг",
    },
    {
        label: "Количество товара",
        placeholder: "100500",
    },
]