import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user:null,
  error:null,
  loading:false
}

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('http://localhost:3000/auth/me', {
        withCredentials: true,
      });
      return res.data.user; // user data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const counterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
})

export const {} = counterSlice.actions

export default counterSlice.reducer