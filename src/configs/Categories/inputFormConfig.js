export const categoryInputConfig = [{
    label: "Название",
    placeholder: "Овощи",
    required: "Введите название категории",

},
    {
        label: "Описание",
        placeholder: "...",
    },
    {
        label: "Родительская категория",
        placeholder: "Выберите родительскую категорию",
        type: 'selector',
        selectorProperty: 'category',
        nullable: true
    },
    {
        title: "Иконка категории",
        dataIndex: 'image',
        type: 'image',
       // required: 'Добавьте иконку'
    },
]

