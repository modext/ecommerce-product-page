import React, {useState} from 'react'
import next from '../../images/icon-next.svg'
import prev from '../../images/icon-previous.svg'
import close from '../../images/icon-close.svg'

function Preview({
        toggleModal2,
        data}) {

            const [currentIndex2, setCurrentIndex2] = useState(null);
            const [clickedImage2, setClickedImage2] = useState(null);
            const handleClick = (item, index) => {
                setCurrentIndex2(index);
                setClickedImage2(item.main);
                console.log(index)
            }

            const handleRotationRight = ()=>{
                const totalLength = data.data.length;
                if (currentIndex2 + 1 >= totalLength) {
                  setCurrentIndex2(0);
                  const newPix = data.data[0].main;
                  setClickedImage2(newPix);
                  return;
                }
                const newIndex2 = currentIndex2 + 1
                const newPix= data.data.filter((item) => {
                  return data.data.indexOf(item) === newIndex2;
                });
                const newItem = newPix[0].main;
                setClickedImage2(newItem);
                setCurrentIndex2(newIndex2);
            }

            const handleRotationLeft = ()=>{
                const totalLength = data.data.length;
                if (currentIndex2 === 0 ) {
                  setCurrentIndex2(totalLength - 1);
                  const newPix = data.data[totalLength - 1].main;
                  setClickedImage2(newPix);
                  return;
                }
                const newIndex2 = currentIndex2 - 1
                const newPix= data.data.filter((item) => {
                  return data.data.indexOf(item) === newIndex2;
                });
                const newItem = newPix[0].main;
                setClickedImage2(newItem);
                setCurrentIndex2(newIndex2);
            }

    return (
    <div className='modal2 z-10 fixed top-0 left-0 right-0 bottom-0 bg-black/75 flex items-center content-center justify-center '>
        <div className=' flex flex-col items-center  content-center '>
                <div className='ml-96 ' >
                    <button className=' ' onClick={toggleModal2}> <img src={close} className='h-4 w-4 hover:fill-cyan-700 ' alt="" /> </button>
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <button onClick={handleRotationLeft} className='z-10 bg-white rounded-2xl -mr-4 w-8 h-8 '>
                        <div  className='  ml-2 mb-2 h-2 w-auto '>
                        <svg  className=' h-4 w-3 text-black hover:fill-current hover:text-orange-500' width="1" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M9 1 3 9l7 7" stroke="currentColor" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                        </div>
                        {/* <img src={prev} className='text-black hover:fill-current hover:text-red-400 pl-2 w-4 h-auto' alt="" /> */}
                    </button>
                    <div className='  flex '>
                        <img src={currentIndex2=== null ? data.data[0].main : clickedImage2 } onClick='' alt="" className='lg:rounded-2xl w-96 h-96 cursor-pointer' />
                    </div>
                    <button onClick={handleRotationRight} className='bg-white rounded-2xl w-8 h-8 -ml-4 content-center'>
                        <div className='  ml-3 mb-1 h-2 w-auto '>
                            <svg className=' h-6 w-3 text-black hover:fill-current hover:text-orange-500' width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path className='' d="m1 1 6 6-6 6" stroke="currentColor" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                        </div> 
                        {/* <img src={next}  className=' pl-2 ml-1 w-4 h-2.5' alt="" /> */}
                    </button>
                </div> 
                    <div className='flex justify-between pt-6 w-80  '>
                        {data.data.map((item, index)=>(
                        <div key={index} >
                            <img src={item.thumb} data-index={index} alt='' onClick= {()=> handleClick(item,index)} 
                            className={`${currentIndex2=== index ?'z-10 h-16 w-16 rounded-xl cursor-pointer hover:opacity-80 border-2 border-orange-500 opacity-80 ': 'h-16 w-16 rounded-xl cursor-pointer hover:opacity-80 '}`} />
                        </div>
                        ))}
                </div>
        </div>
    </div>
  )
}

export default Preview




// import React, {useState, Component} from 'react'
// import Lightbox from 'react-image-lightbox'
// import "react-image-lightbox/style.css"
// import prod1 from '../../images/image-product-1.jpg'
// import prod1thumb from '../../images/image-product-1-thumbnail.jpg'
// import prod2 from '../../images/image-product-2.jpg'
// import prod2thumb from '../../images/image-product-2-thumbnail.jpg'
// import prod3 from '../../images/image-product-3.jpg'
// import prod3thumb from '../../images/image-product-3-thumbnail.jpg'
// import prod4 from '../../images/image-product-4.jpg'
// import prod4thumb from '../../images/image-product-4-thumbnail.jpg'


// // const theImages = [
// //     prod1, prod2, prod3,prod4
// // ]
// // function Preview() {

// //     const [indexOfImages, setIndexOfImages] = useState(0);
// //     const [showModal, setShowModal] = useState(false);

// //   return (
// //     <div>
// //         {theImages.map((image, index)=> (
// //             <img 
// //                 key={image}
// //                 style={{ height: "200px", width: "300px", margin: "20px" }}
// //                 src={image}
// //                 alt={image}
// //                 onClick={() => (setIndexOfImages(index))}
// //             />
            
// //         ))}
// //         <div>
// //             <button type="button" onClick={() => setShowModal(true)}>
// //                 Show Lightbox
// //             </button>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Preview
// const images = [
//     prod1, prod2, prod3,prod4
//   ];
  
//   export default class LightboxExample extends Component {
//     constructor(props) {
//       super(props);
  
//       this.state = {
//         photoIndex: 0,
//         isOpen: false,
//       };
//     }
  
//     render() {
//       const { photoIndex, isOpen } = this.state;
  
//       return (
//         <div>
//           <button type="button" onClick={() => this.setState({ isOpen: true })}>
//             Open Lightbox
//           </button>
  
//           {isOpen && (
//             <Lightbox
//               mainSrc={images[photoIndex]}
//               nextSrc={images[(photoIndex + 1) % images.length]}
//               prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//               onCloseRequest={() => this.setState({ isOpen: false })}
//               onMovePrevRequest={() =>
//                 this.setState({
//                   photoIndex: (photoIndex + images.length - 1) % images.length,
//                 })
//               }
//               onMoveNextRequest={() =>
//                 this.setState({
//                   photoIndex: (photoIndex + 1) % images.length,
//                 })
//               }
//             />
//           )}
//         </div>
//       );
//     }
//   }