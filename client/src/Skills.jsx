import React from 'react'
import skills from './SkillsAPI.jsx'
import SkillsCard from './SkillsCard.jsx'
const Skills = () => {
  return (
    <>
    <br /><br />
    <h1 className="text-red-500 text-3xl font-bold max-w-screen-xl flex flex-wrap items-center justify-between mx-auto" id="Skill">Skills Details</h1>
    <hr className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto border-t-4 border-red-500" />
    <div className="max-w-screen-xl flex flex-wrap items-center justify-start mx-auto p-6 gap-6">
            {
                skills.map((val)=>{
                    return(
                        <SkillsCard  props={val} />
                    )
                })
            }

        </div>
    </>
  )
}

export default Skills