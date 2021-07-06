import React from 'react';
import styled from "styled-components/macro";
import Address from "./address";
import SelectorDelivery from "./selectorDelivery";
import {useSelector} from "react-redux";
import {getIsDelivery} from "../../../redux/item/item-select";


const Delivery:React.FC = () => {
    const isDelivery = useSelector(getIsDelivery)
    return (
        <DeliveryWrapper>
            <Address isDelivery={isDelivery}/>
            <SelectorDelivery  isDelivery={isDelivery}/>
        </DeliveryWrapper>
    );
};

export default Delivery;

const DeliveryWrapper = styled.div`
  margin-top: 143px;
  display: flex;
  @media (max-width: 970px){
    flex-direction: column;
    margin-top: 70px;
  }
`