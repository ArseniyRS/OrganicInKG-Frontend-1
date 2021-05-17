
export const providerInputConfig = [
    {
    label: "ФИО",
    placeholder: "Анисимова Виктория Викторовна",
    required: "Укажите имя поставщика",
        key: 'fullName'
    },
    {
        label: "Телефон",
        placeholder: "+(999) 00-00-00",
        required: "Укажите телефон поставщика",
        type: 'phone',
        key: 'phone'
    },
    {
        label: "E-mail",
        placeholder: "example@gmail.com",
        email: 'Невалидный email',
        key: 'email'
    },
    {
        label: "Адрес",
        placeholder: "Чуйская область Бишкек",
        type: 'map',
        required: "Укажите адрес поставщика",
        key: 'placeOfProduction'
    },
    {
        label: "Товар",
        placeholder: "Картошка,...",
        required: "Укажите товар поставщика",
        key: 'produces'
    },
    {
        label: "Банковский счет",
        placeholder: "40702810500000000001",
        key: 'walletNumber'
    },
    {
        label: "Фото паспорта",
        type: 'image',
        fileTypes:'image/png,image/jpeg,application/pdf',
        imageCount: 2,
        key: 'PASSPORT'
    },
    {
        label: "Фото сертификата",
        type: 'image',
        fileTypes:'image/png,image/jpeg,application/pdf',
        imageCount: 6,
        key: 'SERTIFICATE'
    },
    {
        label: "Фото контракта",
        type: 'image',
        fileTypes:'image/png,image/jpeg,application/pdf',
        imageCount: 6,
        key: 'CONTRACT'
    },
    {
        label: "Статус",
        type: 'check',
        key: 'isActive'
    },

    ]