import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { BsArrowRight } from "react-icons/bs";
import TextField from '@mui/material/TextField';
import Axios from "axios";
import Swal from "sweetalert2"

export default function MyDialog({ title, content }) {
    const [open, setOpen] = React.useState(false);
    const [details, setDetails] = React.useState({ email: "", name: "", age: "", location: "", contact: "" });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        // console.log(email)
        details[event.target.id] = event.target.value;
        setDetails(details)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let baseURL = "http://localhost:5000"

        try {
            // console.log(credentials)
            let response = await Axios.post(
                `${baseURL}/api/demo/book`,
                details);

            handleClose();

            // console.log(response)
            if (response.status == 200) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: response.data.message
                });

            } else {
                Swal.fire({
                    icon: "info",
                    title: "Info",
                    text: response.data.message
                });
            }
        } catch (err) {
            // console.log(err)
            Swal.fire({
                icon: "error",
                title: "Unknown Error",
                text: err.response.data.message
            });
        }

    }

    return (
        <div className="w-max">
            <button
                className="float-left btn btn-primary flex items-center gap-x-[20px] group font-bold hover:text-secondary"
                data-aos="fade-up"
                data-aos-delay="600"
                onClick={handleClickOpen}
            >
                {title}
                <BsArrowRight className="text-2xl text-accent-quaternary group-hover:text-primary transition" />
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="w-screen"
            >
                <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className="flex flex-col">
                        <div class="mb-4">
                            <label class="block text-primary text-sm font-bold mb-2" for="name">
                                Name
                            </label>
                            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="name" type="text" placeholder="Username" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-primary text-sm font-bold mb-2" for="email">
                                Email
                            </label>
                            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="email" type="text" placeholder="Username" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-primary text-sm font-bold mb-2" for="age">
                                Age
                            </label>
                            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="age" type="text" placeholder="Username" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-primary text-sm font-bold mb-2" for="location">
                                Location
                            </label>
                            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="location" type="text" placeholder="Username" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-primary text-sm font-bold mb-2" for="contact">
                                Contact
                            </label>
                            <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="contact" type="text" placeholder="Username" />
                        </div>
                        
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button className="text-purple-700" onClick={handleSubmit}>
                        Go
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
