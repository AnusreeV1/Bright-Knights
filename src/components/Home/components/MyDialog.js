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
    const [email, setEmail] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        // console.log(email)
        setEmail(event.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let baseURL = "http://localhost:5000"

        try {
            // console.log(credentials)
            let response = await Axios.post(
              `${baseURL}/api/book`,
              {email: email}
            );
      
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
        <div >
            <Button
                variant="contained"
                className="float-left btn btn-primary flex items-center gap-x-[20px] group font-bold hover:text-secondary"
                data-aos="fade-up"
                data-aos-delay="600"
                onClick={handleClickOpen}
            >
                {title}
                <BsArrowRight className="text-2xl text-accent-quaternary group-hover:text-primary transition" />
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Enter your email</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <TextField id="email" label="Email" variant="outlined" onChange={handleChange}/>
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
