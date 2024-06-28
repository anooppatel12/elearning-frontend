import React from 'react'
import './dashboard.css'
import { CourseData } from '../../context/CourseContext'
import CourseCard from '../../components/coursecard/CourseCard';

const Dashboard = () => {
    const {myCourse} = CourseData();
  return (
    <div className="student-dashboard">
        <h2>All Enrolled Course</h2>
        <div className="dashboard-content">
            {
                myCourse && myCourse.length>0 ?(
                    myCourse.map((e)=>(
                    <CourseCard key={e.id} course={e} />)
                )) : (<p>No Course Enrolled Yet</p>)
            }
        </div>
    </div>
  )
}

export default Dashboard