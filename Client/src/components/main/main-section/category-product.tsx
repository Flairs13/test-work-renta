import React, {useEffect, useRef} from 'react';
import {category, productItem} from "../../../redux/item/item-reducer";
import styled from "styled-components/macro";
import {Container} from "../../../style-components/style-components";
import {backgroundStyle} from "./main-section";
import ProductItem from "./product-item";
import {setActiveProductCategory} from "../../../redux/item/item-action";
import {useDispatch, useSelector} from "react-redux";
import {getBasket, getIsDelivery} from "../../../redux/item/item-select";

type PropsType = {
    category: category
    backgroundStyle: backgroundStyle
    productItems: Array<productItem>
}
const CategoryProduct: React.FC<PropsType> = ({category, backgroundStyle, productItems}) => {
    const refScrollBlock = useRef<HTMLDivElement>(null)
    const refProductWrapper = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()
    const isDelivery = useSelector(getIsDelivery)
    const basket = useSelector(getBasket)
    console.log('Render category')


    const activeProductCategory = () => {
        if (refScrollBlock.current && refProductWrapper.current) {
            if (window.pageYOffset >= refScrollBlock.current.offsetTop - 25
                && window.pageYOffset <= refScrollBlock.current.offsetTop + refProductWrapper.current.clientHeight / 2) {
                dispatch(setActiveProductCategory(category.name.en))
            }
        }
    }
    useEffect(() => {
        document.addEventListener('scroll', activeProductCategory)
        return () => document.removeEventListener("scroll", activeProductCategory)
    }, [])

    return (
        <>
            <ScrollBlock ref={refScrollBlock} id={category.name.en}/>
            <CategoryProductWrapper ref={refProductWrapper} backgroundStyle={backgroundStyle}>
                <Container>
                    <>
                        <Title>{category.name.rus}</Title>
                        <ProductItemsWrapper>
                            {category.products.filter(id => {
                                    const item = productItems.find(i => i._id === id)
                                    switch (isDelivery) {
                                        case 'pickup': {
                                            return true
                                        }
                                        case 'delivery': {
                                            if (item) {
                                                return item.delivery
                                            } else {
                                                return true
                                            }
                                        }
                                        default:
                                            return true
                                    }
                                }
                            ).map(id => {
                                const item = productItems.find(i => i._id === id)
                                const basketItem = basket.basketList.find(i => i._id === id)
                                if (basketItem) {
                                    return (
                                        <ProductItem key={basketItem._id} backgroundStyle={backgroundStyle} item={basketItem}/>
                                    )
                                } else if (item) {
                                    return (
                                        <ProductItem key={item._id} backgroundStyle={backgroundStyle} item={item}/>
                                    )
                                }
                            })}
                        </ProductItemsWrapper>
                    </>
                </Container>
            </CategoryProductWrapper>
        </>
    );
};

export default CategoryProduct;

const ScrollBlock = styled.div`
  :before {
  display: block;
  content: " ";
  height: 65px;
  margin-top: -65px;
  visibility: hidden;
}
`

const CategoryProductWrapper = styled.div<{ backgroundStyle: backgroundStyle }>`
  padding: 40px 5px 0;
  background-color: ${props => props.backgroundStyle.backgroundSection || '#fff'}};
`
const ProductItemsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 32px;
  padding: 32px 0;
  @media(max-width: 970px){
    grid-template-columns: repeat(3,1fr);
  }
   @media(max-width: 730px){
    grid-template-columns: repeat(2,1fr);
  }
`

const Title = styled.h3`
  font-size: 32px;
  line-height: 40px;
  font-weight: 400;
  @media(max-width: 685px){
    font-size: 24px;
    line-height: 32px;
  }
`

