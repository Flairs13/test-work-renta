import React from 'react';
import styled, {keyframes} from "styled-components/macro";
import {category} from "../../../redux/item/item-reducer";
import CategoryProduct from "./category-product";
import {useSelector} from "react-redux";
import {getItems, getStatus} from "../../../redux/item/item-select";
import {Container, WrapperPreloader} from "../../../style-components/style-components";

type PropsType = {
    categories: Array<category>
    status: string
}
export type backgroundStyle = {
    backgroundSection?: string
    backgroundProduct?: string
}
const MainSection: React.FC<PropsType> = ({categories,status}) => {
    const items = useSelector(getItems)
    const mainSectionWrapperRender = (status:string) => {
        switch (status){
            case 'loading': {
                return (
                    <>
                       <CategoryProductWrapperPreloader>
                           <Container>
                               <ProductItemsWrapperPreloader>
                                   {[1,2,3,4,5,6,7,8].map(i => <ProductPreloader key={i}/>)}
                               </ProductItemsWrapperPreloader>
                           </Container>
                       </CategoryProductWrapperPreloader>
                    </>
                )
            }
            case 'complete': {
                return (
                    <>
                        {categories.map((category,index) => {
                            const backgroundStyle:backgroundStyle = {}
                            if ((index + 1) % 2 !== 0){
                                backgroundStyle.backgroundSection = 'var(--main-colorFill)'
                                backgroundStyle.backgroundProduct = '#fff'
                            } else {
                                backgroundStyle.backgroundSection = '#fff'
                                backgroundStyle.backgroundProduct = 'var(--main-colorFill)'
                            }
                            return <CategoryProduct productItems={items} key={category._id} category={category} backgroundStyle={backgroundStyle}/>
                        })}
                    </>
                )
            }
        }
    }

    return (
        <MainSectionWrapper>
            {mainSectionWrapperRender(status)}
        </MainSectionWrapper>

    );
};

export default MainSection;

const MainSectionWrapper = styled.section`
 
`

const CategoryProductWrapperPreloader = styled.div`
  padding: 40px 5px 0;
  background-color: var(--main-colorFill);
`
const ProductItemsWrapperPreloader = styled.ul`
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
const ProductPreloader = styled(WrapperPreloader)`
  width: 100%;
  height: 100%;
  min-width: 50px;
  min-height: 150px;
`
