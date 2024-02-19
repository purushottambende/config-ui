import React from 'react'
import "./Home.css"
import CourseCard from "./../../components/CourseCard/CourseCard"
import ImgHeader from "./header.png"
import { COURSE_DATA, PAGE_TITLE, THEME } from "./../../config";

function Home() {
  return (
    <div>
      <h1 className='heading'>{PAGE_TITLE}</h1>
      <img src={ImgHeader} className='header-img' />

      {
        COURSE_DATA.map((courseObj, index) => {
          const { title, price, description } = courseObj;

          return (<CourseCard
            title={title}
            price={price}
            description={description}
            key={index}
            theme={THEME}
          />)
        })
      }
    </div>
  )
}

export default Home