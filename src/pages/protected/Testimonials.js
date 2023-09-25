import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'

import Testimonials from '../../features/testimonials'

function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "Testimonials"}))
      }, [])


    return(
        <Testimonials />
    )
}

export default InternalPage