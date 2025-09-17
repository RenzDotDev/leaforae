import React from 'react'

import "../style/appliedFilter.css"

function AppliedFilter() {
  return (
    <div className='applied-filter-con'>
        <h3>Applied Filters:</h3>
        
        <button className='sort-button'>
            <p>Sort by: <span>Popularity</span></p>
            <i class="fa-solid fa-angle-down"></i>
        </button>
    </div>
  )
}

export default AppliedFilter