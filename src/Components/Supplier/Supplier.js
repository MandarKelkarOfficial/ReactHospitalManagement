import React from 'react'
import { Link } from 'react-router-dom'

export default function Supplier() {
  return (
    <div className='container mt-4'>
        <div className="tabs">
            <div className="row w-full">
                <div className="col">
                    <Link to="/new-supplier-entry"><button type="button" className='btn btn-outline-primary w-100'>NEW ENTRY- SUPPLIER</button></Link>
                </div>
                <div className="col">
                    <Link to="/v-inventory"><button type="button" className='btn btn-outline-primary w-100'>V - INVENTORY</button></Link>
                </div>
                <div className="col">
                    <Link to="/mdf-stock"><button type="button" className='btn btn-outline-primary w-100'>MFD - STOCK</button></Link>
                </div>
             
      
            </div>
        </div>
      
    </div>
  )
}
