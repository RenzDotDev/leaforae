import React from 'react'

import "../style/filter.css"

function Filter() {
  return (
    <div className='filter-con'>
        <FilterHeader />
    </div>
  )
}

export default Filter

// Inner Components
function FilterHeader() {
    return(
        <>
            <section className="filter-header-con">
                <p className='filter-header-text'>Filters</p>
                <button>
                    <p>Clear all filters</p>
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </section>

            <section className="category-con">
                <p className='category-text' style={{color: "#f2f2f2", fontWeight: "500", fontSize: "16px"}}>Categories</p>
            </section>
        </>
    )
}