import {AppStateType} from "../store";

export const getItems = (state: AppStateType) => {
    return state.itemReducer.products
}
export const getCategories = (state: AppStateType) => {
    return state.itemReducer.categories
}
export const getStatus = (state: AppStateType) => {
    return state.itemReducer.status
}
export const getIsDelivery = (state: AppStateType) => {
    return state.itemReducer.isDelivery
}
export const getTotalPrice = (state: AppStateType) => {
    return state.itemReducer.basket.total
}
export const getActiveProductCategory = (state: AppStateType) => {
    return state.itemReducer.activeProductCategory
}
export const getBasket = (state: AppStateType) => {
    return state.itemReducer.basket
}
export const getBasketStatus = (state: AppStateType) => {
    return state.itemReducer.basketStatus
}
export const getUserData = (state: AppStateType) => {
    return state.itemReducer.userData
}
export const getBasketWithBackEndSelect = (state: AppStateType) => {
    return state.itemReducer.basketWithBackEnd
}


