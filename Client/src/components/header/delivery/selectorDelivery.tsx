import React from 'react';
import styled from "styled-components/macro";
import classNames from "classnames";
import {setIsDelivery} from "../../../redux/item/item-action";
import {useDispatch} from "react-redux";


const SelectorDelivery:React.FC<{isDelivery: string}> = ({isDelivery}) => {

    const dispatch = useDispatch()

    return (
        <SelectorDeliveryWrapper>
            <SelectorContainer>
                <DeliveryBtn className={classNames({'is-active': isDelivery === 'delivery'})}
                             onClick={() => dispatch(setIsDelivery('delivery'))}>
                    Доставка
                </DeliveryBtn>
                <PickupBtn className={classNames({'is-active': isDelivery === 'pickup'})}
                           onClick={() => dispatch(setIsDelivery('pickup'))}>
                    Самовывоз
                </PickupBtn>
            </SelectorContainer>
        </SelectorDeliveryWrapper>
    );
};

export default SelectorDelivery;

const SelectorDeliveryWrapper = styled.div`
    width: 100%;
    @media(max-width: 970px){
      margin-top: 75px;
    }
`

const SelectorContainer = styled.div`
  display: flex;
  justify-content: flex-end;
   @media(max-width: 970px){
      justify-content: flex-start;
    }
`

const DeliveryBtn = styled.button`
  font-size: 16px;
  width: 100%;
  max-width: 146px;
  border: none;
  padding: 12px 18px;
  line-height: 24px;
  border-radius: 4px;
  background-color: var(--main-colorFill);
  color: var(--main-colorGray);
  &.is-active {
     background-color: var(--main-colorRed);
     color: white;
  }
`
const PickupBtn = styled(DeliveryBtn)`
  
`