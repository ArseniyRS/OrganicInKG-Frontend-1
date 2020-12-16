export const recordViewCategoryConfig  =[
    {
        title: "Название",
        dataIndex: 'name',
    },
    {
        title: "Описание",
        dataIndex: 'description',
    },
    {
        title: "Родительская категория",
        dataIndex: 'parentCategory',
        object: 'name'
    },
    {
        title: "Иконка категории",

        dataIndex: 'imagePath',
        type: 'image'
    },
]