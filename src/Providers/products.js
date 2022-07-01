import { createContext } from 'react';

export const ProductsContext = createContext([]);

export function ProductsProvider({ children }) {
    const products = [
        {
            id: 1,
            name: "iPhone SE",
            price: 4199,
            img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-red-select-202203?wid=470&hei=556&fmt=png-alpha&.v=1646070494834",
        },
        {
            id: 2,
            name: "iPhone 11",
            price: 4999,
            img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144418",
        },
        {
            id: 3,
            name: "iPhone 13",
            price: 6374,
            img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-mini-midnight-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1645572315770",
        },
        {
            id: 4,
            name: "MacBook Pro M2",
            price: 14499,
            img: "https://www.apple.com/v/macbook-pro-13/m/images/overview/compare/compare_mbp_13__givmvd62t5ua_medium.png",
        },
        {
            id: 5,
            name: "MacBook Air M2",
            price: 13299,
            img: "https://www.apple.com/v/macbook-air-m2/b/images/overview/compare/compare_mba_m2__c7zi1oqk49yu_medium.png",
        },
        {
            id: 6,
            name: "iMac M1",
            price: 16799,
            img: "https://images.macrumors.com/t/mpCfavzzc9OOmjRYH4uokvfhXHg=/400x0/article-new/2013/09/imac-m1-blue-isolated-16x9-500k.png?lossy",
        },
        {
            id: 7,
            name: "Apple Watch Series 7",
            price: 5022,
            img: "https://t.ctcdn.com.br/y01ujDai_H-NZYQbbknN8j4W3OI=/fit-in/400x400/filters:format(webp):fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i518521.png",
        },
        {
            id: 8,
            name: "iPad Pro",
            price: 10235,
            img: "https://t.ctcdn.com.br/bnLvuC9Kvi3fzlVc-N_tOmveKuY=/fit-in/400x400/filters:format(webp):fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i413836.png",
        },
        {
            id: 9,
            name: "AirPods Pro",
            price: 2826,
            img: "https://t.ctcdn.com.br/qBE6kFr0VodTB10Oy90Mt7SmJ9M=/fit-in/400x400/filters:format(webp):fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i413719.png",
        }
    ]

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}
