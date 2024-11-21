import React from 'react'
import experience from './ExperienceAPI.jsx';
import ExperienceCard from './ExperienceCard.jsx';
const Experience = () => {
  return (
    <>
    <br /><br />
    <h1 className="text-red-500 text-3xl font-bold max-w-screen-xl flex flex-wrap items-center justify-between mx-auto" id="Experience">Experience Details</h1>
    <hr className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto border-t-4 border-red-500" />
        {
          experience.map((val) => {
            return (
              <ExperienceCard props={val} />
            )
          })
        }

    </>
  )
}

export default Experience;