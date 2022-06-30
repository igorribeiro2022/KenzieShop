
const initialState = [
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
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKUQ3_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171067000%2C1631661671000",
    },
    {
        id: 8,
        name: "iPad Pro",
        price: 10235,
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202104_GEO_BR?wid=545&hei=550&fmt=jpeg&qlt=95&.v=1617864717000",
    },
    {
        id: 9,
        name: "AirPods Pro",
        price: 2826,
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1591634795000",
    }
]

function productsReducer(state = initialState) {
    return state;
};

export default productsReducer;
