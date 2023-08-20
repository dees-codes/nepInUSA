import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import SendIcon from '@mui/icons-material/Send';

const NotifyStudent = () => {
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('info');
  const [sentMessages, setSentMessages] = useState([]);
  const handleSend = () => {
    // Make API call to send notification
    // After sending, add the message to the sentMessages list
    setSentMessages([...sentMessages, { message, severity }]);
    setMessage('');
  };

  const handleDeleteMessage = (index) => {
    // Make API call to delete message from db
    // After deletion, remove the message from the sentMessages list
    setSentMessages(sentMessages.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
      <Typography pb={1} variant="h6">
        Notify Student
      </Typography>
      <TextField sx={{ pb: 1 }} value={message} onChange={(e) => setMessage(e.target.value)} multiline rows={3} fullWidth />
      <Select value={severity} onChange={(e) => setSeverity(e.target.value)}>
        <MenuItem value={'info'}>Info</MenuItem>
        <MenuItem value={'warning'}>Warning</MenuItem>
        <MenuItem value={'error'}>Error</MenuItem>
        <MenuItem value={'success'}>Success</MenuItem>
      </Select>
      <Button variant="contained" onClick={handleSend} endIcon={<SendIcon />} sx={{ ml: 2 }}>
        Send
      </Button>

      <Box sx={{ mt: 2 }}>
        {sentMessages.map((sentMessage, index) => (
          <Chip key={index} label={`${sentMessage.severity.toUpperCase()}: ${sentMessage.message}`} onDelete={() => handleDeleteMessage(index)} sx={{ mt: 1, mr: 1 }} />
        ))}
      </Box>
    </Box>
  );
};

export default NotifyStudent;
