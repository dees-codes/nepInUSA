/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { useState, useEffect, useCallback } from 'react';
import { Button, TextField, Modal, Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';
import { Input } from 'antd';
import { Chip } from '@mui/material'; // Import Chip component

const CollegeAdmin = () => {
  const handleSectionAdded = useCallback((newSection) => {
    // Refresh UI or perform any action after a new section is added.
    console.log('New section added:', newSection);
  }, []);

  return <AddSectionModal onSectionAdded={handleSectionAdded} />;
};

export default CollegeAdmin;

const AddSectionModal = ({ onSectionAdded }) => {
  const [sections, setSections] = useState([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [contentType, setContentType] = useState('paragraph');
  const [description, setDescription] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [collegeId, setCollegeId] = useState('');
  const [editingIndex, setEditingIndex] = useState(null); // Keep track of which section is being edited

  useEffect(() => {
    // On next load, it shoudld get the data from the API, that saved before
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get('/api/sections');
    //     setSections(response.data);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    // };
    // fetchData();
  }, []);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setContent('');
    setDescription([]);
    setCollegeId('');
    setImageFiles([]);
    setTitle('');
    setOpen(false);
  };

  const handleAddContent = () => {
    if (contentType === 'paragraph') {
      setDescription([...description, content]);
    } else {
      setDescription([...description, [content]]);
    }
    setContent('');
  };

  // Function to delete specific content within the section
  const handleDeleteContent = (contentIndex) => {
    const updatedDescription = [...description];
    updatedDescription.splice(contentIndex, 1);
    setDescription(updatedDescription);
  };

  const handleDelete = (index) => {
    const updatedSections = [...sections];
    updatedSections.splice(index, 1);
    setSections(updatedSections);
  };

  const handleEdit = (index) => {
    const section = sections[index];
    setTitle(section.title);
    setDescription(section.description);
    setImageFiles(section.imageFiles);
    setEditingIndex(index); // Set the index of the section being edited
    setOpen(true);
  };

  const handleOK = async () => {
    const updatedSection = {
      title,
      description,
      imageFiles,
    };

    if (editingIndex !== null) {
      // If editing, update the specific section
      const updatedSections = [...sections];
      updatedSections[editingIndex] = updatedSection;
      setSections(updatedSections);
    } else {
      // Otherwise, add a new section
      setSections([...sections, updatedSection]);
      if (onSectionAdded) {
        onSectionAdded(updatedSection);
      }
    }

    // Reset state variables
    setTitle('');
    setDescription([]);
    setImageFiles([]);
    setOpen(false);
    setEditingIndex(null); // Reset editing index
  };

  return (
    <Box sx={{ height: '60vh' }}>
      <Button variant="contained" onClick={handleModalOpen} sx={{ mb: 2 }}>
        Add a College
      </Button>
      <Modal open={open} onClose={handleModalClose}>
        <Box sx={{ p: 2, mt: '10%', margin: 'auto', width: '50%', bgcolor: 'white' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Add College
          </Typography>
          <TextField label="College ID" fullWidth sx={{ mb: 2 }} value={collegeId} onChange={(e) => setCollegeId(e.target.value)} />
          <TextField label="Title" fullWidth sx={{ mb: 2 }} value={title} onChange={(e) => setTitle(e.target.value)} />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="content-type-label">Content Type</InputLabel>
            <Select labelId="content-type-label" value={contentType} onChange={(e) => setContentType(e.target.value)}>
              <MenuItem value="paragraph">Paragraph</MenuItem>
              <MenuItem value="bullet">Bullet</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Content" fullWidth multiline rows={contentType === 'bullet' ? 1 : 4} sx={{ mb: 2 }} value={content} onChange={(e) => setContent(e.target.value)} />
          <Button disabled={!title || !content} onClick={handleAddContent} variant="contained" sx={{ mb: 1 }}>
            Add Content
          </Button>
          <Typography variant="subtitle" display={!title || !content ? 'block' : 'none'} sx={{ color: 'red', mb: 2 }}>
            Fill the Title and content
          </Typography>
          <Input type="file" fullWidth multiple sx={{ mb: 4 }} onChange={(e) => setImageFiles([...imageFiles, ...e.target.files])} />
          <Button disabled={!description.length} onClick={handleOK} variant="contained" sx={{ mr: 2, my: 2 }}>
            OK
          </Button>
          <Button onClick={handleModalClose} variant="contained">
            Cancel
          </Button>
          {description.map((desc, contentIndex) => (
            <Box key={contentIndex} sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
              <Chip
                key={contentIndex}
                label={
                  <Typography sx={{ overflowWrap: 'break-word' }} key={contentIndex}>
                    {Array.isArray(desc) ? `- ${desc}` : desc}
                  </Typography>
                }
                onDelete={() => handleDeleteContent(contentIndex)}
                sx={{ m: 1 }}
              ></Chip>
            </Box>
          ))}
        </Box>
      </Modal>
      {sections?.map((section, index) => (
        <Box key={index} sx={{ p: 2, my: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
          <Typography gutterBottom variant="h6">
            {section?.title}
          </Typography>
          {section?.description?.map((desc, descIndex) => (
            <Typography sx={{ overflowWrap: 'break-word' }} gutterBottom key={descIndex}>
              {Array.isArray(desc) ? `- ${desc}` : desc}
            </Typography>
          ))}
          <Button onClick={() => handleEdit(index)} variant="contained">
            Edit
          </Button>
          <Button sx={{ ml: 4 }} onClick={() => handleDelete(index)} variant="contained" color="secondary">
            Delete
          </Button>
        </Box>
      ))}
    </Box>
  );
};

AddSectionModal.propTypes = {
  onSectionAdded: PropTypes.func,
};
