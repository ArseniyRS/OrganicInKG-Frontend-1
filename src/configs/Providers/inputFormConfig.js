export const providerInputConfig = [
    {
    label: "ФИО",
    placeholder: "Анисимова Виктория Викторовна",
    //required: "Укажите имя поставщика",
    },
    {
        label: "Телефон",
        placeholder: "+(999) 00-00-00",
        //required: "Укажите телефон поставщика",
        type: 'phone'
    },
    {
        label: "E-mail",
        placeholder: "example@gmail.com",
    },
    {
        label: "Адрес",
        placeholder: "Чуйская область Бишкек",
        type: 'selectInput',
      //  required: "Укажите адрес поставщика",
    },
    {
        label: "Товары",
        placeholder: "Картошка,...",
      //  required: "Укажите товары поставщика",
    },
    {
        label: "Банковский счет",
        placeholder: "40702810500000000001",
    },
    // {
    //     label: "Фото пасспорта",
    //     type: 'image'
    // },
    // {
    //     label: "Фото сертификата",
    //     type: 'image'
    // },
    {
        label: "Статус",
        type: 'check'
    },

    ]