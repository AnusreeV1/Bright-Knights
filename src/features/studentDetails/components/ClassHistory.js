import { useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../../components/Input/InputText'
import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"

const INITIAL_LEAD_OBJ = {
    first_name : "",
    last_name : "",
    email : ""
}

function ClassHistory({closeModal}){
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ)


    const saveNewLead = () => {
            alert("Comment Updated")
            closeModal()
        
    }

    const updateFormValue = ({updateType, value}) => {
        setErrorMessage("")
        setLeadObj({...leadObj, [updateType] : value})
    }

    return(
        <>


            <InputText labelTitle="Date" type="Date" defaultValue={leadObj.first_name} updateType="first_name" containerStyle="mt-4" updateFormValue={updateFormValue}/>
            <InputText labelTitle="Comments" type="text" defaultValue={leadObj.first_name} updateType="first_name" containerStyle="mt-4"updateFormValue={updateFormValue}/>
            
            
            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button  className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button  className="btn btn-primary px-6" onClick={() => saveNewLead()}>Save</button>
            </div>


            

        </>
    )
}

export default ClassHistory