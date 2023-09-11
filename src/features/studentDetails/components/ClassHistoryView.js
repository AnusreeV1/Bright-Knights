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

function ClassHistoryView({closeModal}){
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

            {/* 1 */}
            <InputText labelTitle="Date" type="date" defaultValue={leadObj.first_name} updateType="first_name" containerStyle="mt-4" updateFormValue={updateFormValue} />
            <InputText labelTitle="Comments" type="text" defaultValue={leadObj.first_name} updateType="first_name" containerStyle="mt-4"  updateFormValue={updateFormValue}/>
            
            
            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button  className="btn btn-primary px-6" onClick={() => saveNewLead()}>Edit & Save</button>
            </div>

            {/* 2 */}

            <InputText labelTitle="Date" type="date" defaultValue={leadObj.first_name} updateType="first_name" containerStyle="mt-4" updateFormValue={updateFormValue} />
            <InputText labelTitle="Comments" type="text" defaultValue={leadObj.first_name} updateType="first_name" containerStyle="mt-4"  updateFormValue={updateFormValue}/>
            
            
            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button  className="btn btn-primary px-6" onClick={() => saveNewLead()}>Edit & Save</button>
            </div>

            
        </>
    )
}

export default ClassHistoryView