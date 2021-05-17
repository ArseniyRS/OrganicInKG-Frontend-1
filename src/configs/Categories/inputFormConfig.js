export const categoryInputConfig = [{
    label: "Название",
    placeholder: "Овощи",
    required: "Введите название категории",
    key: 'name'
},
    {
        label: "Описание",
        placeholder: "...",
        key: 'description'
    },
    {
        label: "Родительская категория",
        placeholder: "Выберите родительскую категорию",
        type: 'selector',
        selectorProperty: 'category',
        nullable: true,
        key: 'parentCategoryId'
    },
    {
        title: "Иконка категории",
        dataIndex: 'image',
        type: 'image',
        fileTypes:'image/svg+xml',
        key: 'image'
    },
]

