import React, { useEffect, useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import Swal from 'sweetalert2';
import Axios from 'axios';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import DropDowm from "./Input/DropDown";


export default function ViewReq() {

    const [ready, setReady] = useState(false)
    const [requests, setRequests] = useState([])
    const [open, setOpen] = useState(false);
    const [reqIndex, setreqIndex] = useState(0)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [insID, setInsID] = useState("");
  


    const boxStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };

    let data = [{
        id: "bfst1321",
        name: "Sanjith",
        email: "sanjith.sent@gmail.com",
        phone: "9443559596",
        age: "21",
        location: "india"
    }, {
        id: "bfst1321",
        name: "Sanjith",
        email: "sanjith.sent@gmail.com",
        phone: "9443559596",
        age: "21",
        location: "india"
    }]

    let instructors = [{
        id: "1233",
        name: "navanneth"
    }, {
        id: "1233",
        name: "navanneth"
    }, {
        id: "1233",
        name: "navanneth"
    }, {
        id: "1233",
        name: "navanneth"
    }]

    useEffect(() => {
        fetchReq();
    }, []);

    const fetchReq = async () => {
        let baseURL = "http://localhost:5000";


        try {
            // console.log(credentials)
            // console.log(usrType)
            console.log(localStorage.getItem('token'))
            let response = await Axios.get(
                `${baseURL}/api/admin/demos`, {
                headers: {
                    'token': localStorage.getItem('token')
                }
            }
            );

            // console.log(response)
            if (response.status == 201) {
                setRequests(response.data.result)

            }
        } catch (err) {

            if (!err.response) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Couldn't reach server"
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: err.response.data.message
                });
            }

        }
    }

    const openMyDialog = (index) => {
        console.log(index)
        setreqIndex(index)
        handleOpen()
    }

    const bookInstructor = () => {
        handleClose()
    }
    
    return (
        <div className="mt-10 w-9/12 bg-white rounded-md">
            {data.map((obj, id) => (
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <div className="flex flex-row justify-start gap-2"><span className="font-bold text-xl text-slate-500 italic">{obj.id}</span><span className="h3card">{obj.name}</span>
                        </div>

                    </AccordionSummary>
                    <AccordionDetails>
                        <div className="flex flex-col">
                            <span className="font-primary text-primary text-xl">Email: <span className="text-slate-700">{obj.email}</span></span>
                            <span className="font-primary text-primary text-xl">Age <span className="text-slate-700">{obj.age}</span></span>
                            <span className="font-primary text-primary text-xl">Location <span className="text-slate-700">{obj.location}</span></span>
                            <span className="font-primary text-primary text-xl">Phone <span className="text-slate-700">{obj.phone}</span></span>
                        </div>
                        <div className="flex justify-center"><button className="text-white w-40 bg-primary  hover:bg-accent-secondary_hover font-bold py-2 px-4 rounded" onClick={()=> openMyDialog(id)}>Assign instructor</button></div>
                    </AccordionDetails>
                </Accordion>
            ))}

            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={boxStyle} className="flex flex-col items-center">
                    <div className="flex flex-row gap-4">
                    <div className="font-primary text-primary font-bold text-xl pt-1">Select instructor</div><DropDowm data={instructors} handleDropChange={setInsID}/>
                    </div>
                    
                    <button className="mt-6 w-24 text-white bg-primary  hover:bg-accent-secondary_hover font-bold py-2 px-4 rounded" onClick={bookInstructor}>Confirm</button>
                </Box>
            </Modal>
        </div>
    )

}