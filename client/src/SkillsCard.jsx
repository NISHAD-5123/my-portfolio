import React from 'react'

const SkillsCard = ({props}) => {
const {id, img} = props;
return (
<>

    <div key={id} className='p-4 mx-2 border-2 border-red-300'>
        <img className="h-auto max-w-full rounded-lg" height='70' width='70' src={img} alt="tech-images" />
    </div>
    </>
  )
}

export default SkillsCard
