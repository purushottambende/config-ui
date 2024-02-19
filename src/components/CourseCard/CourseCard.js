import React from 'react'
import './CourseCard.css'

function CourseCard({title,price,description, theme}) {
  return (
    <div className={`course-card ${theme}`}>
        <h1>{title}</h1>
        <h1>₹{price}</h1>
        <h1>{description}</h1>
    </div>
  );
}

export default CourseCard