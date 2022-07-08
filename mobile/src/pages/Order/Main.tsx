import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form'
import { useQuery } from '@apollo/client'
import { GET_CUSTOMERS } from '../../routes/customer'
import { GET_PRODUCTS } from '../../routes/product'

const Main: React.FC = () => {
  const { data: customerFromApi } = useQuery<IDataCustomer>(GET_CUSTOMERS)
  const { data: productFromApi } = useQuery<IDataProduct>(GET_PRODUCTS)

  const { 
    register, 
    handleSubmit, 
    formState: { errors }
  } = useForm()

  const onSubmit = useCallback((values) => {
    console.log(values)
  }, [])

  return(
    <View>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Cliente:</label>
        <select {...register('customer', { required: true })}>
          {customerFromApi && customerFromApi.customers.map(customer  => (
              <option key={customer.id}>{customer.name}</option>
          ))}
        </select>
        <br/>

        <label>Produto:</label>
        <label>Cliente:</label>
        <select {...register('product', { required: true })}>
          {productFromApi && productFromApi.products.map(product  => (
              <option key={product.id}>{product.name}</option>
          ))}
        </select>
        {errors.product && <span>This field is required</span>}
        <button>Adicionar</button>
        <br/>

        <button type='submit'>Finalizar</button>
      </form>
    </View>
  )

}

export default Main