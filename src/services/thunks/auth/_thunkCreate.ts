import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginDto } from "services/api/dto/LoginDto";
import { api } from "../../api";

export const fetchThunkLogin = createAsyncThunk(
  "auth/login",
  async ({ password, email }: LoginDto, { rejectWithValue }) => {
    try {
      const { data } = await api.auth.login({ password, email });
      return data;
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const fetchThunkMe = createAsyncThunk(
  "auth/me",
  async ({}: any, { rejectWithValue }) => {
    try {
      const { data } = await api.users.me();
      return data;
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const fetchThunkRefresh = createAsyncThunk(
  "auth/",
  async ({}: any, { rejectWithValue }) => {
    try {
      const { data } = await api.users.me();
      return data;
    } catch (err: any) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);
