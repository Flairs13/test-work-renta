import React, {useState} from 'react';
import styled from "styled-components/macro";
import {ReactComponent as BasketSvg} from "../../../assets/Basket.svg";
import {useDispatch, useSelector} from "react-redux";
import {
    getBasket,
    getBasketStatus,
    getBasketWithBackEndSelect,
    getIsDelivery,
    getTotalPrice,
    getUserData
} from "../../../redux/item/item-select";
import {ReactComponent as Preloader} from "../../../assets/Preloader.svg";
import Modal from "../../../common/modal";
import {clearBasket, setBasketStatus, submitBasket} from "../../../redux/item/item-action";

const Basket: React.FC = () => {
    const basketStatus = useSelector(getBasketStatus)
    const dispatch = useDispatch()
    const total = useSelector(getTotalPrice)
    const basket = useSelector(getBasket)
    const isDelivery = useSelector(getIsDelivery)
    const basketWithBackEnd = useSelector(getBasketWithBackEndSelect)
    const closeModal = () => {
        dispatch(setBasketStatus(''))
        dispatch(clearBasket())
    }

    const renderBasketInModal = (basketStatus:string) => {
        switch (basketStatus) {
            case 'loading': {
                return (
                    <PreloaderWrapper>
                        <PreloaderIcon/>
                    </PreloaderWrapper>
                )
            }
            case 'complete': {
                return (
                    <ModalWrapper>
                        <h2>Корзина успешно ушла на сервер</h2>
                        <p>Здесь показаны данные уже с сервера</p>
                        <p>Общая цена: {basketWithBackEnd.total}</p>
                        <p>Тип доставки: {basketWithBackEnd.delivery}</p>
                        {basketWithBackEnd.street && <p>Улица: {basketWithBackEnd.street}</p>}
                        {basketWithBackEnd.home && <p>Дом: {basketWithBackEnd.home}</p>}
                        {basketWithBackEnd.basketList.map(basketItem => {
                            return (
                                <pre key={basketItem._id}>
                                    {JSON.stringify(basketItem)}
                                </pre>
                            )
                        })}
                    </ModalWrapper>
                )
            }
            case 'error': {
                return (
                    <h2>Что то пошло не так, попробуйте снова</h2>
                )
            }
        }
    }
    const renderBasket = (isDelivery: string) => {
        switch (isDelivery) {
            case 'delivery': {
                return (
                    <BasketWrapper  disabled={basket.basketList.length === 0} type='submit' form='my-form'>
                        <BasketPrice>{total > 0 ? `${total} ₽` : 'Нет товаров'}</BasketPrice>
                        <SvgWrapper>
                            <BasketIcon/>
                        </SvgWrapper>
                    </BasketWrapper>
                )
            }
            case 'pickup': {
                return (
                    <BasketWrapper onClick={() => dispatch(submitBasket())}  disabled={basket.basketList.length === 0}>
                        <BasketPrice>{total > 0 ? `${total} ₽` : 'Нет товаров'}</BasketPrice>
                        <SvgWrapper>
                            <BasketIcon/>
                        </SvgWrapper>
                    </BasketWrapper>
                )
            }
        }
    }

    return (
        <>
            {renderBasket(isDelivery)}
            {
                basketStatus &&
                <Modal padding={'15px'} closeModal={closeModal}>
                    {renderBasketInModal(basketStatus)}
                </Modal>
            }
        </>
    );
};

export default Basket;

const BasketWrapper = styled.button`
  background-color: var(--main-colorRed);
  display: flex;
  align-items: center;
  color: white;
  padding: 6px 10px;
  border-radius: 18px;
  align-self: center;
  margin-left: auto;
  border: none;
  cursor: pointer!important;
`
const BasketPrice = styled.div`
  font-size: 20px;
  margin-right: 4px;
   @media(max-width: 600px){
      font-size: 13px;
  }
`
const SvgWrapper = styled.div`
  width: 24px;
  height: 24px;
`
const BasketIcon = styled(BasketSvg)`
  
`

const PreloaderWrapper = styled.div`
  width: 50px;
`

const PreloaderIcon = styled(Preloader)`
  width: 100%;
  height: 100%;
`

const ModalWrapper = styled.div`
  h2 {
    margin-bottom: 10px;
  }
  p {
    margin-bottom: 10px;
  }
  pre {
    font-size: 17px;
  }
`
