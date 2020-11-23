export const categoryInputConfig = [{
    label: "Название",
    placeholder: "Овощи",
    required: "Впишите название",
    min: 3,
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
    },]

