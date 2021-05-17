export const productInputConfig = [
    {
        label: "Название товара",
        placeholder: "Картошка",
        required: 'Введите название товара',
        key: 'name'
    },
    {
        label: "Категория товара",
        placeholder: "Выберите категорию товара",
        type: 'selector',
        selectorProperty: 'category',
        required: 'Выберите категорию товара',
        nullable: true,
        key: 'categoryId'
    },
    {
        label: "Поставщик товара",
        placeholder: "Выберите поставщика товара",
        type: 'selector',
        selectorProperty: 'provider',
        nullable: true,
        required: 'Выберите поставщика товара',
        key: 'supplierId'
    },

    {
        label: "Описание товара",
        placeholder: "Самый вкусный картофель",
        type: 'textarea',
        key: 'description'
    },
    {
        label: "Цена товара",
        placeholder: "30 сом/кг",
        dataType: 'number',
        required: 'Укажите цену товара',
        min: {
            number: 0,
            text: `Минимальная цена: `
        },
        max:{
            number: 10000000,
            text: `Максимальная цена: `
        },
        key: 'price'
    },
    {
        label: "Валюта",
        type: 'selector',
        selectorProperty: 'currency',
        nullable: true,
        placeholder: "сом",
        required: 'Укажите валюту',
        key: 'currency'
    },
    {
        label: "Количество товара",
        placeholder: "100500",
        dataType: 'number',
        required: 'Укажите количество товара',
        min: {
            number: 0,
            text: `Минимальное количество: `
        },
        max:{
            number: 100000000,
            text: `Максимальное количество: `
        },
        key: 'measure'
    },
    {
        label: "Ед.измерения",
        type: 'selector',
        selectorProperty: 'units',
        nullable: true,
        placeholder: "кг",
        required: 'Укажите ед.измерения',
        key: 'measureUnitId'
    },
    {
        label: "Фото товара",
        type: 'image',
        fileTypes:'image/jpeg,image/png',
        imageCount: 6,
        required: 'Загрузите изображение',
        key: 'images'
    },

    ]



