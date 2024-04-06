import React from 'react'
import { Link } from 'react-router-dom'

export default function Distributor() {
  return (
    <div className='container mt-4'>
        <div className="tabs">
            <div className="row w-full">
                <div className="col">
                    <Link to="/new-entry-dist"><button type="button" className='btn btn-outline-primary w-100'>NEW - ENTRY DISTRIBUTOR</button></Link>
                </div>
                <div className="col">
                    <Link to="/d-inventory"><button type="button" className='btn btn-outline-primary w-100'>D - INVENTORY</button></Link>
                </div>
                <div className="col">
                    <Link to="/pharmacy-stock"><button type="button" className='btn btn-outline-primary w-100'>PHARMACY STOCK</button></Link>
                </div>
                <div className="col">
                    <Link to="/s-stock"><button type="button" className='btn btn-outline-primary w-100'>STOCKIST STOCK</button></Link>
                </div>
            </div>
        </div>
      
    </div>
  )
}
