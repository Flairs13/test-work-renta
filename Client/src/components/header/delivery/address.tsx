import React from 'react';
import styled from "styled-components/macro";
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {setAddress, setHome, submitBasket} from "../../../redux/item/item-action";
import {getUserData} from "../../../redux/item/item-select";


const Address: React.FC<{ isDelivery: string }> = ({isDelivery}) => {
    const dispatch = useDispatch()
    const onSubmit = () => {
        dispatch(submitBasket())
    }

    const userData = useSelector(getUserData)
    const validationSchema = yup.object().shape({
        street: yup.string().required('Нужно заполнить для оформления доставки'),
        home: yup.string().required('Укажите дом')
    });

    const render = (isDelivery: string) => {
        switch (isDelivery) {
            case 'delivery': {
                return (
                    <>
                        <Title>Доставка г.Москва</Title>
                        <Formik validateOnBlur={false} validationSchema={validationSchema}
                                initialValues={{street: userData.street, home: userData.home}} onSubmit={onSubmit}>
                            {({values,isSubmitting,handleChange}) => {
                                if (isSubmitting && Object.values(values).some(i => i === '')){
                                    window.scrollTo(0,0)
                                }
                                return (
                                    <>
                                        <Forms id='my-form'>
                                            <FormItem>
                                                <FormItemTitle>Улица</FormItemTitle>
                                                <InputWrapper>
                                                    <Input onBlur={() => dispatch(setAddress(values.street))} value={values.street} onChange={handleChange} placeholder='Остоженка'
                                                           name='street'
                                                           type="text"/>
                                                    <Error name={'street'} component={'span'}/>
                                                </InputWrapper>
                                            </FormItem>
                                            <FormItem>
                                                <FormItemTitle>Дом</FormItemTitle>
                                                <InputWrapper>
                                                    <Input onBlur={() => dispatch(setHome(values.home))} value={values.home} onChange={handleChange} placeholder='Остоженка' name='home'
                                                           type="text"/>
                                                    <Error name={'home'} component={'span'}/>
                                                </InputWrapper>
                                            </FormItem>
                                        </Forms>
                                    </>
                                )
                            }}
                        </Formik>

                    </>
                )
            }
            case 'pickup': {
                return (
                    <>
                        <Title>В ресторане</Title>
                        <SubTitle>KFC Белорусская Москва</SubTitle>
                    </>
                )
            }
        }
    }


    return (
        <AddressWrapper>
            {render(isDelivery)}
        </AddressWrapper>
    );
};

export default Address;

const AddressWrapper = styled.div`
  
`
const Title = styled.h2`
  font-family: 'Cabin Condensed', sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: 72px;
  white-space: nowrap;
   @media(max-width: 685px){
     font-size: 35px;
     line-height: 40px;
    }
    @media(max-width: 400px){
     font-size: 20px;
     line-height: 35px;
    }
`
const SubTitle = styled(Title)`
  font-size: 20px;
`
const Forms = styled(Form)`
  display: flex;
  margin-top: 45px;
   @media(max-width: 685px){
     flex-direction: column;
     margin-top: 20px;
    }
`
const FormItem = styled.label`
  display: flex;
  align-items: center;
  margin-right: 42px;
  :last-child {
    margin-right: 0;
  } 
  @media(max-width: 685px){
     margin-right: 0;
     display: grid;
     grid-template-columns: 100px 3fr;
     margin-bottom: 50px;
       :last-child {
      margin-bottom: 0;
      }
    }
    @media(max-width: 400px){
      grid-template-columns: 60px 3fr;
    }
`
const FormItemTitle = styled.span`
    font-size: 32px;
   line-height: 40px;
   margin-right: 12px;
   @media(max-width: 685px){
    font-size: 24px;
    line-height: 32px;
    margin-right: 8px;
   }
    @media(max-width: 400px){
    font-size: 16px;
    line-height: 22px;
    margin-right: 5px;
   }
`

const InputWrapper = styled.div`
  position: relative;
`

const Input = styled(Field)`
  width: 210px;
  height: 42px;
  border: none;
  background-color: var(--main-colorFill);
  padding: 10px 16px;
   ::placeholder {
    color: var(--main-colorGray);
    font-size: 16px;
  }
  @media(max-width: 685px){
    width: 100%;
  }
`
const Error = styled(ErrorMessage)`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  margin-top: 15px;
  font-size: 18px;
  line-height: 22px;
  font-family: 'Cabin Condensed', sans-serif;
  font-weight: 700;
  background-color: black;
  padding: 12px 15px;
  white-space: nowrap;
  border-radius: 8px;
  z-index: 20;
    @media(max-width: 740px){
      font-size: 14px;
      line-height: 18px;
      padding: 6px 13px;
      margin-top: 8px;
  }
   @media(max-width: 500px){
      font-size: 10px;
      line-height: 14px;
      padding: 6px 13px;
      margin-top: 8px;
  }
  :before {
      position: absolute;
      content: '';
      pointer-events: none;
      height: 0;
      width: 0;
      border: 8px solid transparent;
      border-bottom: 6px solid black;
      transform: translateX(-50%);
      bottom: 100%;
      left: 50%;
        @media(max-width: 740px){
      border: 4px solid transparent;
      border-bottom: 3px solid black;
    }
  }
`