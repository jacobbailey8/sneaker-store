import React from 'react';
import ShoeCard from './ShoeCard';
import { v4 } from 'uuid';

function ShoePage(props) {
    const {shoes, title} = props;

  return (
    <div>
        <div className='flex justify-center text-3xl pt-2 pb-8 text-text mt-20 md:mt-28'>{title}</div>
        <div className='gridPage gap-12 px-2 md:px-4'>
        
            {shoes.map(el => {
                return(<ShoeCard shoe={el} key={v4()} />)
                
            })}
        </div>
    </div>
  )
}

export default ShoePage