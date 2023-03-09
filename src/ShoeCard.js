


function ShoeCard(props) {
    const {shoe} = props;
    

    
  return (

   <div className='flex items-center justify-center'>
        <div className='w-40 h-64 bg-primary rounded-lg overflow-hidden'>
            <div className='w-full h-28'>
                <img className='w-full h-full object-cover' src={shoe.img} alt={shoe.name} />
            </div>
            <div>{shoe.name}</div>
            <div>{shoe.price}</div>
            <div>Quantity</div>
            <button>Add</button>

        </div>
   </div>



  )
}

export default ShoeCard