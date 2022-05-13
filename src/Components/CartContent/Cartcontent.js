import React, {useState}  from 'react'
import './Cartcontent.css'
import deleteIcon from '../../images/icon-delete.svg'
import product1 from '../../images/image-product-1-thumbnail.jpg'

function Cartcontent(props) {
    const reset = props.counter
    const count=  props.count
    const price = (125.00).toFixed(2) 
    const total =(count * price).toFixed(2)
    console.log(count)





    
    


  return (
    <div className='cart-container border bg-white h-56   rounded-xl shadow-2xl fixed '>
        <div className='pl-6 h-1/4 border-b border-gray-300 flex  items-center'>
            <h2 className='font-bold pt-2 '> Cart</h2>
        </div>
        {count>=1 ? (
        <div className='h-2/5 justify-center items-center'>
            <div className='flex items-center justify-between pt-6 pb-4 pl-6 pr-6'>
                <img src={product1} alt="" className=' rounded h-12 w-auto' />
                <div className='text-left text-xs'>
                    <p className='text-sm text-gray-500'>Fall Limited Edition Sneakers </p>
                    <p className=' text-gray-500'>{`$${price}  x  ${count}`} <span className='font-bold pl-1'>{` $${total}`}</span></p>
                </div>
                <button><img   onClick={reset} src={deleteIcon} alt="" className='h-4 w-3 items-center' /></button> 
            </div>
            <div className='pl-6 pr-6 pt-2'>
                <button className='h-12  bg-orange-500 rounded-xl text-white flex w-full items-center justify-center font-bold'>Checkout</button>
            </div>
            
            
        </div>
        ) : (
            <div className=' flex justify-center items-center h-2/3 font-bold'>
                <h3>Your cart is empty</h3>
            </div>
        )}
        
    </div>
  )
}

export default Cartcontent