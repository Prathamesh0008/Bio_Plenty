import React from 'react'
import Testcart from './Testcart'
import Categorywisebox from './Categorywisebox';
const deviceType = "desktop";

const Bestsellers = () => {
  return (
    <>
      <h1 className='text-3xl font-bold mt-8 mb-5'>Best Sellers</h1>

      {/* <Topproducts /> */}
      <Testcart deviceType={deviceType} />
      {/* Category products */}
      <Categorywisebox/>
    </>
  )
}

export default Bestsellers
