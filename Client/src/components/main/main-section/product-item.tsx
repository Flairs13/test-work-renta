import React, {useEffect, useLayoutEffect, useState} from 'react';
import styled from 'styled-components/macro';
import {productItem} from "../../../redux/item/item-reducer";
import { backgroundStyle } from './main-section';
import {ReactComponent as AddIcon} from "../../../assets/add.svg";
import {ReactComponent as DecrementIcon} from "../../../assets/decrement.svg";
import {deleteProductInBasket, setProductInBasket} from "../../../redux/item/item-action";
import {useDispatch} from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


type PropsType = {
    item: productItem
    backgroundStyle: backgroundStyle
}
const ProductItem:React.FC<PropsType> = ({item,backgroundStyle}) => {
    const [isAddItem,showCounterItem] = useState(false)
    const [countProduct,setCount] = useState(1)
    const dispatch = useDispatch()
    const foo = (str:string) => {
       return str.split('/').map(i => {
           if(i === 'localhost'){
               return 'localhost:5000'
           }
           return i
       }).join('/')
    }
    useLayoutEffect(() => {
        if (item.count){
            showCounterItem(true)
            setCount(item.count)
        } else {
            showCounterItem(false)
        }
    },[item])
    return (
        <ProductItemWrapper backgroundStyle={backgroundStyle}>
            <ProductImageWrapper>
                    <ImageWrapper>
                        <LazyLoadImage alt={item.name.ru}
                                       effect="blur"
                                       src={foo(item.img)}/>
                    </ImageWrapper>
                <AddItem onClick={() => {
                    showCounterItem(true)
                    dispatch(setProductInBasket(item))
                }}>
                    <SvgWrapper>
                        <AddIconComponent/>
                    </SvgWrapper>
                </AddItem>
                <Counter showCounter={isAddItem}>
                    <CounterItemWrapper
                        onClick={() => {
                            dispatch(deleteProductInBasket(item._id))
                            if (countProduct <= 1){
                                showCounterItem(false)
                            } else {
                                setCount(prevState => prevState - 1)
                            }
                        }}>
                        <SvgWrapper >
                            {countProduct <= 1 ? <CancelProductCounterIcon/> : <DecrementIconSvg/>}
                        </SvgWrapper>
                    </CounterItemWrapper>
                    <span style={{fontSize: '20px', lineHeight: '24px'}}>{countProduct}</span>
                    <CounterItemWrapper onClick={() => {
                        dispatch(setProductInBasket(item))
                        setCount(prevState => prevState + 1)
                    }}>
                        <SvgWrapper >
                            <AddIconComponent fill={'white'}/>
                        </SvgWrapper>
                    </CounterItemWrapper>
                </Counter>
            </ProductImageWrapper>
            <PriceWrapper>
                <Description>
                    {item.name.ru}
                </Description>
                <Price>
                    {item.price} ₽
                </Price>
            </PriceWrapper>
        </ProductItemWrapper>
    );
};

export default ProductItem;

const ProductItemWrapper = styled.li<{backgroundStyle:backgroundStyle}>` 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0;
    border-radius: 8px;
    user-select: none;
    :hover {
      background-color: ${props => props.backgroundStyle.backgroundProduct || '#fff'};
    }
`

const ProductImageWrapper = styled.div`
  width: 208px;
  height: 208px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
   @media(max-width: 490px){
    width: 140px;
    height: auto;
  }
   @media(max-width: 370px){
    width: 120px;
  }
`
const ImageWrapper = styled.div`
  img {
    width: 100%;
  }
`

const AddItem = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);
`
const SvgWrapper = styled.div`
  width: 14px;
  height: 16px;
  display: flex;
  align-items: center;
`
const AddIconComponent = styled(AddIcon)<{fill?:string}>`
  width: 100%;
  fill: ${props => props.fill || 'black'};
`

const CancelProductCounterIcon = styled(AddIconComponent)`
    fill: var(--main-colorRed);
    transform: rotate(45deg);
    transition: all 2s ease;
`

const PriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12px;
     @media(max-width: 490px){
      margin-top: 5px;
  }
`
const Description = styled.div`
  font-size: 24px;
  line-height: 32px;
  color: var(--main-colorGray);
    @media(max-width: 490px){
      font-size: 17px;
      line-height: 24px;
  }
`

const Price = styled.div`
  font-size: 32px;
  line-height: 40px;
  color: var(--main-colorRed);
  margin-top: 15px;
   @media(max-width: 490px){
      font-size: 21px;
      line-height: 27px;
  }
`

const Counter = styled.div<{showCounter:boolean}>`
  position: absolute;
  display: ${props => props.showCounter ? 'flex' : 'none'};
  background-color: black;
  color: white;
  border-radius: 25px;
  align-items: center;
  bottom: 20px;
  right: 16px;
  
`
const DecrementIconSvg = styled(DecrementIcon)`
  fill: white;
  width: 100%;
`

const CounterItemWrapper = styled.div`
  padding: 12px;
`