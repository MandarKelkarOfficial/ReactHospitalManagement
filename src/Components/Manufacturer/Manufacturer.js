import React from 'react'
import { Link } from 'react-router-dom'

export default function Manufacturer() {
  return (
    <div className='container mt-4'>
        <div className="tabs">
            <div className="row w-full">
          
                <div className="col">
                    <Link to="/m-inventory"><button type="button" className='btn btn-outline-primary w-100'>M - INVENTORY</button></Link>
                </div>
                <div className="col">
                    <Link to="/ms-stock"><button type="button" className='btn btn-outline-primary w-100'>S - STOCK</button></Link>
                </div>
                <div className="col">
                    <Link to="/v-stock"><button type="button" className='btn btn-outline-primary w-100'>V - STOCK</button></Link>
                </div>
      
            </div>
        </div>
      
    </div>
  )
}
