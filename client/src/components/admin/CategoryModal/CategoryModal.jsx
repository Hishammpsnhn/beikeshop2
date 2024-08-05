import {
    Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

function CategoryModal({open,handleClose,selectedSize}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Selected Size</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You have selected the size: {selectedSize}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CategoryModal;
