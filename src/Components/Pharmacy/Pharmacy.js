import React from 'react'
import { Link } from 'react-router-dom'

export default function Pharmacy() {
  return (
    <div className='container mt-4'>
        <div className="tabs">
            <div className="row w-full">
                <div className="col">
                    <Link to="/new-pharmacy-entry"><button type="button" className='btn btn-outline-primary w-100'>NEW ENTRY</button></Link>
                </div>
                <div className="col">
                    <Link to="/ph-inventory"><button type="button" className='btn btn-outline-primary w-100'>INVENTORY</button></Link>
                </div>
                <div className="col">
                    <Link to="/customer-request"><button type="button" className='btn btn-outline-primary w-100'>CUSTOMER - REQUEST</button></Link>
                </div>
                <div className="col">
                    <Link to="/dis-stock"><button type="button" className='btn btn-outline-primary w-100'>DIS - STOCK</button></Link>
                </div>
              
            </div>
        </div>
      
    </div>
  )
}
