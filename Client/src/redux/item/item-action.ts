import {
    CLEAR_BASKET,
    DELETE_PRODUCT_IN_BASKET,
    GET_ITEM, SET_ACTIVE_PRODUCT_CATEGORY, SET_ADDRESS, SET_BASKET_STATUS, SET_BASKET_WITH_BACK_END,
    SET_CATEGORIES, SET_HOME,
    SET_IS_DELIVERY,
    SET_ITEM,
    SET_PRODUCT_IN_BASKET,
    SET_STATUS, SUBMIT_BASKET
} from "./item-const";
import {basketWithBackEnd, category, productItem} from "./item-reducer";

export const getItem = () => ({type: GET_ITEM} as const)
export const setItem = (payload: Array<productItem>) => ({type: SET_ITEM, payload} as const)
export const setCategories = (payload: Array<category>) => ({type: SET_CATEGORIES,payload}as const)
export const setStatus = (status:string) => ({type: SET_STATUS, status} as const)
export const setIsDelivery = (status: string) => ({type:SET_IS_DELIVERY,status} as const)
export const setProductInBasket = (product: productItem) => ({type: SET_PRODUCT_IN_BASKET,product}as const)
export const deleteProductInBasket = (id: string) => ({type: DELETE_PRODUCT_IN_BASKET,id}as const)
export const setActiveProductCategory = (category: string) => ({type: SET_ACTIVE_PRODUCT_CATEGORY,category}as const)
export const setAddress = (address: string) => ({type: SET_ADDRESS,address}as const)
export const setHome = (home: string) => ({type: SET_HOME,home}as const)
export const submitBasket = () => ({type: SUBMIT_BASKET}as const)
export const setBasketStatus = (status: string) => ({type: SET_BASKET_STATUS,status}as const)
export const clearBasket = () => ({type:CLEAR_BASKET}as const)
export const setBasketWithBackEnd = (basket:basketWithBackEnd) => ({type:SET_BASKET_WITH_BACK_END,basket}as const)
