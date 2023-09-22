import React from "react";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Tooltip } from "@mui/material";
import {IconButton} from "@mui/material";
import { useState } from "react";
import ViewReq from "../components/ViewReq";
const AdminDashboard = () => {
    // animate on scroll initialization

    const [viewReq, setViewReq] = useState(false)

    return (
        <div className="bg-primary w-screen h-screen ">
            <div className="pt-36 font-bold text-white text-7xl  w-screen flex justify-center">Hello, Admin</div>

            <div className="flex justify-center mt-10">
                <Tooltip title="View Demo requests">
                    <IconButton>
                        
                        <ContactPhoneIcon className=" text-white text-5xl" onClick = {() => setViewReq((viewReq)=> !viewReq) }/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="View Notifications">
                    <IconButton>
                        <NotificationsNoneIcon className="text-white text-5xl" />                        
                    </IconButton>
                </Tooltip>
                </div>

                <div className="flex justify-center">
                    {viewReq? <ViewReq /> : <></>}
                </div>

        </div>
    );
};

export default AdminDashboard;