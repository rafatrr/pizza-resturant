import Image from 'next/image'
import { singleProduct } from '@/data'
import Price from '@/components/Price'



const SingleProducts = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-96px)] md:h-[calc(100vh-144px)]  flex flex-col justify-around items-center text-red-500 md:flex-row '>  
      {/* imageContaier */}
      {singleProduct.img &&
        <div className=" relative w-full h-1/2 p-4">
          <Image src={singleProduct.img} alt='' className='object-contain' fill />
        </div>
      }
      {/* textContaier */}
      <div className="h-1/2 flex flex-col gap-4" >
        <h1 className='text-3xl font-bold uppercase'>{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.Price} id={singleProduct.id} options={singleProduct.options}/>



      </div>
    </div>
  )
}

export default SingleProducts;
