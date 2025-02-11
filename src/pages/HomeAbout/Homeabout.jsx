import React from 'react'
import banner1 from '../../../src/Assests/IMG/banner2.webp'

const Homeabout = () => {
  return (
    <>
        <section className='bg-gray-100'>
                <div className='max-w-screen-xl grid md:grid-cols-2 grid-cols-1 mx-auto'>

                    <div className='p-6'>
                            <h1 className='font-bold text-3xl'>About BioPlentypeps</h1>

                            <div>
                            <div className='mt-4'>
                                <h1 className='font-bold text-md'>Our Company</h1>
                                <p>Bioplentypeps™ is a leading provider of USA manufactured, research peptides. We have negotiated and partnered with WHO/GMP and ISO 9001:2008 approved manufacturers for the best prices available and for the highest quality and highest purity products. We are happy to pass those savings on to our customers, and are proud to be a trusted resource for the products we provide to the scientific community.</p>
                            </div>
                            <div className='mt-4'>
                                <h1 className='font-bold text-md'>Perfection. Guidance. Cost-efficiency.</h1>
                                <p>A condition of impeccable quality or excellence, attaining the utmost standards without imperfections or deficiencies. It epitomizes optimal performance and outcomes, aiming for total accuracy and thoroughness in all aspects.</p>
                            </div>
                            <div className='mt-4'>
                                <h1 className='font-bold text-md'>Our Customer</h1>
                                <p>At Bioplentypeps™, we uphold a commitment to impeccable quality and excellence, setting the highest standards without compromise. Our dedication ensures ideal performance and results, striving for absolute precision and completeness in every aspect. We value each customer relationship and take pride in our exceptional service. With satisfied customers worldwide, trust us to deliver a secure and gratifying shopping experience, offering premier research products. From all of us at Bioplentypeps™, thank you for choosing us. For inquiries, please contact us at info@bioplentypeps.com.</p>
                            </div>

                            </div>
                    </div>

                    <div>
                        <img className='rounded shadow-lg h-[90%]' loading='lazy' src={banner1} alt="about image" title='Our company image' />
                    </div>
                </div>    
        </section>        
    </>
  )
}

export default Homeabout