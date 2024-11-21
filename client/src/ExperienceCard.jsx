import React from 'react'

const ExperienceCard = ({props}) => {
const {id, img, heading, description} = props;
return (
    <>
        <section class=" dark:bg-gray-900 mb-4">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-32 lg:py-16 lg:grid-cols-12">
          <div key={id} class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-3xl font-normal tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {heading}
            </h1>
            <p className='text-2xl'>{description}</p>
          </div>
          <div class="lg:mt-0 lg:col-span-5 lg:flex">
            <img className="rounded shadow-md"
              src={img} width="300" height="300"
              alt="profile-image"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default ExperienceCard;