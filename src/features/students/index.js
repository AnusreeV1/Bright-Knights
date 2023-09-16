import moment from "moment"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { getLeadsContent } from "./leadSlice"

import MaterialIcon, {colorPalette} from 'material-icons-react';

const TopSideButtons = () => {

    const dispatch = useDispatch()

}

function Leads(){

    const {leads } = useSelector(state => state.lead)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLeadsContent())
    }, [])

    
    const deleteCurrentLead = (index) => {
        window.location.href = '/app/student-details'
    }

    return(
        <>
            
            <TitleCard title="Current Leads" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

                {/* Leads List in table format loaded from slice after api call */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parent Name</th>
                        <th>Joined On</th>
                        <th>Level</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            leads.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={l.avatar} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{l.first_name}</div>
                                                <div className="text-sm opacity-50">{l.last_name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    {/* <td>{l.email}</td> */}
                                    <td>Parent name</td>
                                    <td>{moment(new Date()).add(-5*(k+2), 'days').format("DD MMM YY")}</td>
                                    {/* <td>{getDummyStatus(k)}</td> */}
                                    {/* <td>{l.last_name}</td> */}
                                    <td>Advanced</td>
                                    <td><button className="btn btn-square btn-ghost" onClick={() => deleteCurrentLead(k)}><MaterialIcon icon="arrow_forward" /></button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </TitleCard>
        </>
    )
}


export default Leads