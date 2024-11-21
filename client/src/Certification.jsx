import React from 'react'
import certificate from './CertificateAPI.jsx'
import CertificateCard from './CertificateCard.jsx'
const Certification = () => {
return (
<>
    <br /><br />
    <h1 className="text-red-500 text-3xl font-bold max-w-screen-xl flex flex-wrap items-center justify-between mx-auto" id="Certification">Certification Details</h1>
    <hr className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto border-t-4 border-red-500" />
    <div className=" p-8">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-items-start mx-auto p-4 gap-10">
    {
        certificate.map((val)=>{
            return(
                <CertificateCard props={val} />
            )
        })
    }
    </div>
</div>
</>
  )
}

export default Certification;