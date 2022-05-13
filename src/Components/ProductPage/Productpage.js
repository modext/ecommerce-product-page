import React, {useState} from 'react'
import './Productpage.css'
import minus from '../../images/icon-minus.svg'
import plus from '../../images/icon-plus.svg'
import {ReactComponent as Cart} from '../../images/icon-cart.svg'
import  cart from '../../images/icon-cart.svg'
import prev from '../../images/icon-previous.svg'
import next from '../../images/icon-next.svg'
import prod1 from '../../images/image-product-1.jpg'
import prod1thumb from '../../images/image-product-1-thumbnail.jpg'
import prod2 from '../../images/image-product-2.jpg'
import prod2thumb from '../../images/image-product-2-thumbnail.jpg'
import prod3 from '../../images/image-product-3.jpg'
import prod3thumb from '../../images/image-product-3-thumbnail.jpg'
import prod4 from '../../images/image-product-4.jpg'
import prod4thumb from '../../images/image-product-4-thumbnail.jpg'
import data from '../images.json'
import Preview from '../Preview/Preview'

function Productpage(props) {
  

  const [clickedImage, setClickedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [modal2, setModal2] = useState(false);
  const handler = (e)=>{
    const focus = e.target.classList.toggle('h-24 w-24 rounded-2xl hover:opacity-50 border-2 border-orange-500  ')
    console.log(focus)
  }
  const toggleModal2 = () => {
      setModal2(!modal2);
      console.log(modal2)
    };

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImage(item.main);
    console.log(index)
  }

  
  
  
  return (
    <main className='lg:flex lg:flex-row w-full'>
      <div className='lg:p-20'>
        <div>
          <img src={currentIndex=== null ? data.data[0].main : clickedImage } onClick={toggleModal2} alt="" className='lg:rounded-2xl cursor-pointer' />
            {modal2 && (
              <Preview clickedImage={clickedImage} 
                setClickedImage={setClickedImage}
                modal2={modal2}
                setModal2={setModal2}
                toggleModal2={toggleModal2}
                data={data}
                currentIndex={currentIndex}
                setCurrentIndex = {setCurrentIndex}
              />
            )}
        </div>
        
        <div className='lg:flex lg:justify-between pt-10 lg:w-auto '>
        {data.data.map((item, index)=>(
          <div key={index} >
          <img src={item.thumb} data-index={index} alt='' onClick= {()=> handleClick(item,index)} className={`${currentIndex=== index ?'h-24 w-24 rounded-2xl cursor-pointer hover:opacity-50 border-2 border-orange-500 opacity-50 ': 'h-24 w-24 rounded-2xl cursor-pointer hover:opacity-50 '}`} />
          </div>
        ))}
        
        </div>
        
      </div>
      <div className=' lg:pr-20 lg:pt-16 lg:pl-14 lg:mt-16 p-6'>
        <div>
          <h2 className='text-orange-400 text-base font-bold'>SNEAKER COMPANY</h2>

          <h3 className='font-bold text-5xl mt-4'>Fall Limited Edition Sneakers</h3>

          <p className='lg:w-11/12 text-lg text-gray-500 mt-12'>
            These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <div className='letters flex w-full lg:grid  items-center mt-6'>
            <h3 className='  w-1/2  text-3xl font-bold justify-start flex items-center'>$125.00 <span className='bg-orange-100 text-orange-500 rounded text-lg ml-4 pl-2 pr-2'>50%</span> </h3>
            <h2 className='w-1/2 justify-end text-right lg:text-left items-end line-through text-lg text-gray-400 font-semibold'>$250.00</h2>
          </div>

          
        </div>
        <div className='lg:w-10/12 lg:flex lg:flex-row  lg:items-center'>
          <div className='pieces rounded-xl flex lg:w-2/5 lg:mr-4 w-auto justify-between items-center mt-5 mb-4 pl-5 pr-5 h-12'>
            <button onClick={() => {
                props.counter(Math.max(props.count - 1, 0));
                }}>
              <img src={minus} alt="minus" />
            </button>
            <h2 className='font-bold'>{props.count}</h2>
            <button onClick={() => {
                props.counter(props.count + 1);
                }}>
              <img src={plus} alt="plus" />
            </button>
          </div>
          <div className='flex lg:w-full w-auto justify-between  h-12'>
            <button className='bg-orange-500 rounded-xl text-white flex w-full items-center justify-center'>
              <img src={cart} className='ml-2 mr-3 h-4 w-4' alt="cart-img" /> <h3 className='font-bold ml-1'>Add to cart</h3> 
            </button>
          </div>
        </div>
      </div>
    </main>
    
    
  );
}
// <div style={{ display: "block", padding: 30 }}>
    //   <h4>How to create ShoppingCart Button in ReactJS?</h4>
    //   <div>
    //     <div>
    //       <img src={cart} alt="" /> 
    //       <h2>{itemCount}</h2>
    //     </div>
    //     <section>
    //       <button
    //         onClick={() => {
    //           setItemCount(Math.max(itemCount - 1, 0));
    //         }}
    //       >
    //         <img src={minus} alt="" />
    //       </button>
    //       <button
    //         onClick={() => {
    //           setItemCount(itemCount + 1);
    //         }}
    //       >
    //       <img src={plus} alt="" /> 
           
    //       </button>
    //     </section>
    //   </div>
    // </div>
export default Productpage