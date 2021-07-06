import * as actions from "./item-action"
import {
    CLEAR_BASKET,
    DELETE_PRODUCT_IN_BASKET,
    GET_ITEM, SET_ACTIVE_PRODUCT_CATEGORY, SET_ADDRESS, SET_BASKET_STATUS, SET_BASKET_WITH_BACK_END,
    SET_CATEGORIES, SET_HOME,
    SET_IS_DELIVERY,
    SET_ITEM,
    SET_PRODUCT_IN_BASKET,
    SET_STATUS
} from "./item-const";
export type productItem = {
    _id: string
    name: {
        en: string
        ru: string
    }
    price: number
    category: string
    delivery: boolean
    img: string
    count?: any
}
export type category = {
    _id: number
    name: {
        en: string
        rus: string
    }
    products: Array<string>
}
export type basketWithBackEnd = {
    basketList: Array<productItem>
    delivery: string
    street: string
    home: string
    total: number
}
type InitialStateType = {
    products: Array<productItem>
    categories: Array<category>
    status: string
    isDelivery: string,
    activeProductCategory: string
    basketStatus: string
    basket: {
        total: number
        basketList: Array<productItem>
    }
    userData: {
        street: string
        home: string
    }
    basketWithBackEnd: basketWithBackEnd
}
const initialState: InitialStateType = {
    products: [],
    categories: [],
    status: '',
    basketStatus: '',
    isDelivery: 'delivery',
    activeProductCategory: '',
    basket: {
        total: 0,
        basketList: []
    },
    userData: {
        street: '',
        home: ''
    },
    basketWithBackEnd: {
        basketList: [],
        home: '',
        street: '',
        total: 0,
        delivery: '',
    }
}


export const itemReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_ITEM: {
            return {
                ...state, products: [...action.payload]
            }
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case SET_IS_DELIVERY: {
            return {
                ...state, isDelivery: action.status
            }
        }
        case SET_CATEGORIES: {
            return {
                ...state, categories: action.payload
            }
        }
        case SET_PRODUCT_IN_BASKET: {
            const findIndex = state.basket.basketList.findIndex(i => i._id === action.product._id)
            const findItem = state.basket.basketList[findIndex]
            if (findItem){
                return {
                    ...state, basket: {
                        total: state.basket.total + action.product.price,
                        basketList: [
                            ...state.basket.basketList.slice(0,findIndex),
                            {...findItem,count: findItem.count + 1 },
                            ...state.basket.basketList.slice(findIndex + 1)
                        ]
                    }
                }
            }

            return {
                ...state, basket: {
                    total: state.basket.total + action.product.price,
                    basketList: [...state.basket.basketList,{...action.product,count: 1}]
                }
            }
        }
        case DELETE_PRODUCT_IN_BASKET: {
            const index = state.basket.basketList.findIndex(i => i._id === action.id)
            const item = state.basket.basketList[index]
            if (item.count >= 2){
                return {
                    ...state, basket: {
                        total: state.basket.total - item.price,
                        basketList: [
                            ...state.basket.basketList.slice(0,index),
                            {...item,count: item.count - 1},
                            ...state.basket.basketList.slice(index + 1)
                        ]
                    }
                }
            }
            const total = state.basket.total - item.price
            return {
                ...state, basket: {
                    total: total,
                    basketList: [
                        ...state.basket.basketList.slice(0,index),
                        ...state.basket.basketList.slice(index + 1)
                    ]
                }
            }
        }
        case SET_ACTIVE_PRODUCT_CATEGORY: {
            return {
                ...state, activeProductCategory: action.category
            }
        }
        case SET_ADDRESS: {
            return {
                ...state, userData: {
                    ...state.userData, street: action.address
                }
            }
        }
        case SET_HOME: {
            return {
                ...state, userData: {
                    ...state.userData, home: action.home
                }
            }
        }

        case SET_BASKET_STATUS: {
            return {
                ...state, basketStatus: action.status
                }
            }

        case CLEAR_BASKET: {
            return {
                ...state, basket: {
                    basketList: [],
                    total: 0
                }
            }
        }

        case SET_BASKET_WITH_BACK_END: {
            return {
                ...state, basketWithBackEnd: {...action.basket}
            }
        }
        default: {
            return state
        }
    }
}

type ActionType = ReturnType<InferValueType<typeof actions>>
type InferValueType<T> = T extends {[key: string]: infer U} ? U : never