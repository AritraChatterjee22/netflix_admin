import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./product.css"
import { Publish } from '@mui/icons-material'


function Product() {
  const location = useLocation();
  const movie = location.state?.movie;
  if (!movie) {
    return <div>Loading...</div>; // You can show a loading state here or redirect to another page
  }
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Movie</h1>
        <Link to="/newProduct">
          <button className='productAddButton'>Create</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img src={movie.img} alt='' className='productInfoImg' />
            <span className='productName'>{movie.title}</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>120</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>sales:</span>
              <span className='productInfoValue'>5120</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>active:</span>
              <span className='productInfoValue'>yes</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>No</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Product Name</label>
            <input type="text" placeholder='Manga Box set' />
            <label>In Stock</label>
            <select name='inStock' id='idStock'>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name='active' id='active'>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img src='https://i.ytimg.com/vi/FDIRYGsg6l0/maxresdefault.jpg' className='productUploadImg' />
              <label for="file">
                <Publish/>
              </label>
              <input type="file" id="file" style={{display: "none"}} />
            </div>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Product
