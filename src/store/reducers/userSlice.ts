import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser";

interface IUserState {
  user: IUser | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: IUserState = {
  user: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
