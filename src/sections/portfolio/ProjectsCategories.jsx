import React from 'react'
import CategoryButtom from './CategoryButtom'

const ProjectsCategories = (categories) => {
  return (
    <div className='portfolio__categories'>
        {
            categories.map(category => (
                <CategoryButtom key={category} category={category} className={`btn cat__btn white`}/>
            ))
        }
    </div>
  )
}

export default ProjectsCategories