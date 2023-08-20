import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

const NotesSection = () => {
  const [notes, setNotes] = useState([]);

  const handleUpdateNotes = (updatedNotes) => {
    setNotes(updatedNotes);
  };

  return (
    <div>
      <Note data={notes} onUpdate={handleUpdateNotes} />
    </div>
  );
};

const Note = ({ data, onUpdate }) => {
  const [note, setNote] = useState('');

  const handleAddNote = async () => {
    // Mocking an API call to save the note
    const newNote = { id: Date.now(), content: note };
    // After saving, add the note to the data list (assuming it's in state and gets passed to this component)
    onUpdate([...data, newNote]);
    setNote(''); // clear the input field
  };

  const handleDeleteNote = async (noteId) => {
    // Mocking an API call to delete the note
    const updatedData = data.filter((note) => note.id !== noteId);
    // Update the state after deletion
    onUpdate(updatedData);
  };

  return (
    <Box sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
      <Typography variant="h6">Notes</Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', mt: 2 }}>
        <TextField value={note} onChange={(e) => setNote(e.target.value)} multiline rows={3} fullWidth />
        <Button variant="contained" startIcon={<AddCircleOutlineIcon />} onClick={handleAddNote} sx={{ ml: 1, mb: '8px' }}>
          Add
        </Button>
      </Box>
      <Box sx={{ mt: 2, flexWrap: 'wrap', display: 'flex' }}>
        {data.map((note) => (
          <Chip key={note.id} label={note?.content} onDelete={() => handleDeleteNote(note.id)} deleteIcon={<DeleteIcon />} sx={{ mt: 1, mr: 1 }} />
        ))}
      </Box>
    </Box>
  );
};

Note.propTypes = {
  data: PropTypes.array,
  onUpdate: PropTypes.func,
};

export default NotesSection;
