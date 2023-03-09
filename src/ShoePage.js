import React from 'react';
import ShoeCard from './ShoeCard';
import { v4 } from 'uuid';

function ShoePage(props) {
    const {shoes} = props;
  
    
    
    

  return (
    <div className='gridPage gap-12'>
       
        {shoes.map(el => {
            return(<ShoeCard shoe={el} key={v4()} />)
            
        })}
    </div>
  )
}

export default ShoePage