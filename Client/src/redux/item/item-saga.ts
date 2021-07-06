import {fork,call,put,takeEvery,select} from "redux-saga/effects";
import {GET_ITEM, SUBMIT_BASKET} from "./item-const";
import {clearBasket, setBasketStatus, setBasketWithBackEnd, setCategories, setItem, setStatus} from "./item-action";
import {getBasketApi, getCategory, getItems, setBasket} from "../../api";
import {getBasket, getIsDelivery, getUserData} from "./item-select";


function* getItemWatcher() {
    yield takeEvery(GET_ITEM,getItemWorker)
}

function* getItemWorker() {
    yield put(setStatus('loading'))
    const {response,error} = yield call(getItems)
    yield getCategoryWorker()
    if (response){
       yield put(setItem(response.data))
    } else if (error) {
        console.log(error)
    }
    yield put(setStatus('complete'))
}

function* getCategoryWorker() {
    const {response,error} = yield call(getCategory)
    if (response){
        yield put(setCategories(response.data))
    } else if (error) {
        console.log(error)
    }

}


function* submitBasketWatcher(){
    yield takeEvery(SUBMIT_BASKET,setBasketWorker)
}
function* setBasketWorker(): any {
    yield put(setBasketStatus('loading'))
    const basket = yield select(getBasket)
    const userData = yield select(getUserData)
    const isDelivery = yield select(getIsDelivery)
    if (isDelivery === 'delivery'){
        basket.delivery = 'Доставка курьером'
    } else if (isDelivery === 'pickup'){
        basket.delivery = 'Самовывоз'
        basket.street = ''
        basket.home = ''
    }
    const {response,error} = yield call(setBasket,{...userData,...basket})
    yield basketWithBackEndWorker()
    if (response){
        yield put(setBasketStatus('complete'))
    } else if (error) {
        yield put(setBasketStatus('error'))
    }

}

function* basketWithBackEndWorker() {
    const {response,error} = yield call(getBasketApi)
    if (response){
        yield put(setBasketWithBackEnd(response.data))
    } else if (error) {
        console.error(error)
    }

}


export default function* rootSaga () {
    yield fork(getItemWatcher)
    yield fork(submitBasketWatcher)
}
