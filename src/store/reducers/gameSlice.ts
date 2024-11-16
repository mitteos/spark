import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  selectedGameId: number;
}

const initialState: initialState = {
  selectedGameId: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setSelectedGameId: (state, action: PayloadAction<number>) => {
      state.selectedGameId = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;
export default gameSlice.reducer;
