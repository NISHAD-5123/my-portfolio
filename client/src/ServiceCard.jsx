import React from 'react'

const ServiceCard = ({props}) => {
const{id,img,heading,description} = props;
return (
    <>
<div class="max-w-screen-xl flex flex-wrap items-center justify-items-start mx-auto p-4 gap-10">
<div key={id} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg mx-auto" src={img} alt="google-certificate" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>

    </div>
</div>
</div>
    </>
  )
}

export default ServiceCard