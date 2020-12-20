import {
    categorySVG,
    orderSVG,
    productSVG,
    providerSVG,
    questionSVG,
    userSVG,
    orderActiveSVG,
    categoryActiveSVG,
    providerActiveSVG,
    productActiveSVG,
    userActiveSVG,
    questionActiveSVG,
    aboutActiveSVG,
    aboutSVG
} from "../../assets/icons";

export const sideBarConfig = [
    {
        to: '/providers',
        name: 'Поставщики',
        svg: providerSVG,
        activeSvg: providerActiveSVG
    },
    {
        to: '/orders',
        name: 'Заказы',
        svg: orderSVG,
        activeSvg: orderActiveSVG
    },
    {
        to: '/products',
        name: 'Товары',
        svg: productSVG,
        activeSvg: productActiveSVG
    },
    {
        to: '/users',
        name: 'Пользователи',
        svg: userSVG,
        activeSvg: userActiveSVG
    },
    {
        to: '/categories',
        name: 'Категории',
        svg: categorySVG,
        activeSvg: categoryActiveSVG
    },
    {
        to: '/faq',
        name: 'Вопросы',
        svg: questionSVG,
        activeSvg: questionActiveSVG
    },
    {
        to: '/aboutus',
        name: 'О нас',
        svg: aboutSVG,
        activeSvg: aboutActiveSVG
    }
]