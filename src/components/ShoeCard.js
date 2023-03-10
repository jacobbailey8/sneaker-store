import Quantity from "./Quantity";



function ShoeCard(props) {
    const {shoe} = props;
    

    
  return (

   <div className='flex items-center justify-center'>
        <div className='w-40 h-64 flex flex-col justify-between rounded-lg overflow-hidden drop-shadow-2xl bg-white '>
            <div className='w-full h-28'>
                <img className='w-full h-full object-cover' src={shoe.img} alt={shoe.name} />
            </div>
            <div className="pl-2 overflow-x-auto ">{shoe.name}</div>
            <div className="pl-2 ">${shoe.price}</div>
            <Quantity/>
            <button className="bg-primary text-darkOrange hover:bg-lightOrange hover:text-darkOrange transition duration-150 ease-linear p-2 font-bold  ">Add To Cart</button>

        </div>
   </div>



  )
}

export default ShoeCard