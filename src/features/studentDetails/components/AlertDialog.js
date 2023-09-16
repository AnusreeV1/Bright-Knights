import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog({ title, content }) {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [dialogText, setDialogText] = React.useState(content);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setDialogText(event.target.value);
  };

  const toggleEdit = () => {
    setEdit(!edit)
  }

  return (
    <div>
      <Button
        variant="contained"
        className="bg-purple-700 hover:bg-white hover:border-purple-700 hover:text-purple-700"
        onClick={handleClickOpen}
      >
        {title}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {edit && (
              <textarea id="message" rows="4" class="block p-2.5 w-full text-sm rounded-lg border border-gray-300 text-black focus:border-purple-700" onChange={handleChange}>{dialogText}</textarea>
            )}
            {!edit && dialogText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {edit && (
            <>
              <Button className="text-purple-700" onClick={toggleEdit}>Save</Button>
            </>
          )}

          {!edit && (<Button className="text-purple-700" onClick={toggleEdit}>Edit</Button>)}
          <Button className="text-purple-700" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
