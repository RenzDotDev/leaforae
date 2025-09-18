import React from 'react'

import ProductHeader from './component/ProductHeader';
import AppliedFilter from './component/AppliedFilter';
import Filter from './component/Filter';
import ProductList from './component/ProductList';
import Pagination from './component/pagination';

import '../Product_Page/productPage.css';


function ProductPage() {
  return (
    <div className="product-page-con">
      <ProductHeader />
      <AppliedFilter />
      <Filter />
      <ProductList />
      <Pagination />
      
    </div>
  )
}

export default ProductPage