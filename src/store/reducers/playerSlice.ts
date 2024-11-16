import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlayer } from "../models/IPlayer";

interface InitialState {
  players: IPlayer[];
}

const initialState: InitialState = {
  players: [
    {
      id: 1,
      name: "Жертва 1",
      gender: "male",
      inPair: false,
    },
    {
      id: 2,
      name: "Жертва 2",
      gender: "female",
      inPair: false,
    },
  ],
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    addPlayer: (state, action: PayloadAction<IPlayer>) => {
      state.players.push(action.payload);
    },
    removePlayer: (state, action: PayloadAction<number>) => {
      state.players = state.players.filter(
        (player) => player.id !== action.payload
      );
    },
    updatePlayerName: (
      state,
      action: PayloadAction<{ id: number; name: string }>
    ) => {
      const { id, name } = action.payload;
      const player = state.players.find((player) => player.id === id);
      if (player) {
        player.name = name;
      }
    },
    updatePlayerGender: (
      state,
      action: PayloadAction<{ id: number; gender: "male" | "female" }>
    ) => {
      const { id, gender } = action.payload;
      const player = state.players.find((player) => player.id === id);
      if (player) {
        player.gender = gender;
      }
    },
    setInPair: (state, action: PayloadAction<number>) => {
      const player = state.players.find(
        (player) => player.id === action.payload
      );
      if (player) {
        player.inPair = true;
      }
    },
    removeInPair: (state, action: PayloadAction<number>) => {
      const player = state.players.find(
        (player) => player.id === action.payload
      );
      if (player) {
        player.inPair = false;
      }
    },
  },
});

export const playerActions = playerSlice.actions;
export default playerSlice.reducer;
