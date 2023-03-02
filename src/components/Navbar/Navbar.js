import React, { useEffect } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../features/cartSlice';

const Navbar = () => {
    const { cart, totalQuantity } = useSelector((state) => state.allCart);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getCartTotal());

    },[cart])
  return (
    <div className='nav-section'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbaritems">
  <a className="navbar-brand nav-items" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto navitems">
   
      <li className="nav-item active">
        <Link to="/" className='nav-style'>All Products</Link>
      </li>
      <li className="nav-item active">
        <Link to="/cart"  className='nav-items'>Carts({totalQuantity})</Link>
      </li>
    
    
    
    </ul>
  
  </div>
</nav>
    </div>
  )
}

export default Navbar