import React from 'react'
import { Link } from 'react-router-dom'

export default function Stockist() {
  return (
    <div className='container mt-4'>
        <div className="tabs">
            <div className="row w-full">
                <div className="col">
                    <Link to="/new-stockist-entry"><button type="button" className='btn btn-outline-primary w-100'>NEW ENTRY - STOKIST</button></Link>
                </div>
                <div className="col">
                    <Link to="/sm-inventory"><button type="button" className='btn btn-outline-primary w-100'>S - INVENTORY</button></Link>
                </div>
                <div className="col">
                    <Link to="/ss-stock"><button type="button" className='btn btn-outline-primary w-100'>D - STOCK</button></Link>
                </div>
                <div className="col">
                    <Link to="/sm-stock"><button type="button" className='btn btn-outline-primary w-100'>M - STOCK</button></Link>
                </div>
      
            </div>
        </div>
      
    </div>
  )
}
