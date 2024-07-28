

const Skills = (skills) => {
  return (
    <div className="skills text-start mt-5">
        <h3 className='pb-3 mb-3 fw-semibold'>Skills</h3>
        <div className="skill d-flex flex-wrap gap-4 align-items-center">
{skills.skills?.map((skill)=>(
<span className='fw-medium px-2' key={skill}>{skill}</span> 
))}
    </div>
    </div>  )
}

export default Skills