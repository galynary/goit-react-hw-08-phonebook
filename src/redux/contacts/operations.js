import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// GET @ /contacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// POST @ /contacts
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// DELETE @ /contacts
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
