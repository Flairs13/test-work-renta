import {spawn} from "redux-saga/effects";
import item from './item/item-saga'






export default function* rootSaga () {
    yield spawn(item)
}