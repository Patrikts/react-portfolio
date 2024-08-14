import React from 'react'

const CategoryButtom = ({category, className}) => {
  return (
    <button className={className}>{category}</button>
  )
}

export default CategoryButtom