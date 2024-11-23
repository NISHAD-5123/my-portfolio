import React from 'react'
const CertificateCard = ({props}) => {
const{id, img, heading, description} = props;
return (
<>
<div  key={id} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={img} alt="google-certificate" />
    </a>
    <div class="p-5">
        <p>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
    </div>
</div>
</>
)
}

export default CertificateCard