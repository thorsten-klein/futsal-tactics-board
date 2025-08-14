import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function PositionEditDialog({ open, x, y, onClose, onSave }) {
    const [posX, setPosX] = useState(x);
    const [posY, setPosY] = useState(y);

    React.useEffect(() => {
        setPosX(x);
        setPosY(y);
    }, [x, y, open]);

    const offsetX = 250;
    const offsetY = 250;

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Position</DialogTitle>
            <DialogContent>
                <TextField
                    label="X"
                    type="number"
                    value={posX - offsetX}
                    onChange={e => setPosX(Number(e.target.value) + offsetX)}
                    margin="dense"
                    fullWidth
                />
                <TextField
                    label="Y"
                    type="number"
                    value={posY - offsetY}
                    onChange={e => setPosY(Number(e.target.value) + offsetY)}
                    margin="dense"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={() => onSave(posX, posY)} color="primary" variant="contained">Save</Button>
            </DialogActions>
        </Dialog>
    );
}

export default PositionEditDialog;