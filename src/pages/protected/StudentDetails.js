import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import StudentDetails from '../../features/studentDetails'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Student Details"}))
      }, [])


    return(
        <StudentDetails/>
    )
}

export default InternalPage