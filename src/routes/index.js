// All components mapping with path for internal routes

import { lazy } from 'react'

const Welcome = lazy(() => import('../pages/protected/Welcome'))
const StudentDetails = lazy(() => import('../pages/protected/StudentDetails'))

const Students = lazy(() => import('../pages/protected/Students'))


const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))


const routes = [
  
  {
    path: '/welcome', // the url
    component: Welcome, // view rendered
  },
  {
    path: '/students',
    component: Students,
  },

  {
    path: '/student-details',
    component: StudentDetails,
  },
 
 
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  
]

export default routes
