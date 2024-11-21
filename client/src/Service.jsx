import React from 'react'
import service1 from '../src/assets/service1.jpg'
import service2 from '../src/assets/service2.jpg'
import service3 from '../src/assets/service3.jpg'
// import pw from '../src/assets/pw.jpg'
import service from '../src/ServiceAPI.jsx'
import ServiceCard from './ServiceCard.jsx'
const Service = () => {
return (
<>
<br /><br />
<h1 className="text-red-500 text-3xl font-bold max-w-screen-xl flex flex-wrap items-center justify-between mx-auto" id="Service">Service Details</h1>
<hr className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto border-t-4 border-red-500" />
<div class="max-w-screen-xl flex flex-wrap items-center justify-items-start mx-auto p-4">
    {
        service.map((val)=>{
            return(
                <ServiceCard props={val}  />
            )
        })
    }
    </div>
</>
  )
}

export default Service