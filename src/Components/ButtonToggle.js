import React from 'react'

export default function ButtonToggle(props) {
  return (
    <div>
         <div className="toggle-content">
      <a href="#" id="sidebar-toggler" onClick={ props.onClick }>Open sidebar</a>
    </div>
    </div>
  )
}
