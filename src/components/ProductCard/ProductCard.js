import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';
import './ProductCard.css';


const ProductCard = () => {
    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();
  
  return (
    <div className='productCard-section'>
       <div className='container'>
        <div className='row'>
            {items.map((item)=>{
               return (
                <div key={item.id} className="col-4" style={{marginBottom:"15px"}}>
        <div  className="card" style={{width:"18rem"}}>
<img src={item.img} className="card-img-top" alt="..." />
<div className="card-body">
<h5 className="card-title productCard">{item.title}</h5>
<p className="card-text productCard-price">{item.price}</p>
</div>
<button className="btn btn-primary" onClick={()=>{dispatch(addToCart(item));}}>Add to Cart</button>
</div>
        </div>
               );
            })}
        
 
         

        </div>

       </div>
    </div>
  )
}

export default ProductCard