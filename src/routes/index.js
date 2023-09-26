// All components mapping with path for internal routes

import { lazy } from 'react'

const Welcome = lazy(() => import('../pages/protected/Welcome'))
const StudentDetails = lazy(() => import('../pages/protected/StudentDetails'))

const Students = lazy(() => import('../pages/protected/Students'))

const Testimonials = lazy(() => import('../pages/protected/Testimonials') )

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

  {
    path: '/testimonials',
    component: Testimonials,
  },

  
]

export default routes
