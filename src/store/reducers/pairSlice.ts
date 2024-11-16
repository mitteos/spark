import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPair } from "../models/IPair";
import { IPlayer } from "../models/IPlayer";

interface IPairState {
  pairs: IPair[];
}

const initialState: IPairState = {
  pairs: [],
};

export const pairSlice = createSlice({
  name: "pair",
  initialState,
  reducers: {
    addPair: (state, action: PayloadAction<IPair>) => {
      state.pairs.push({
        id: action.payload.id,
        players: [...action.payload.players],
      });
    },
    addPlayerToPair: (
      state,
      action: PayloadAction<{ id: number; player: IPlayer }>
    ) => {
      const pair = state.pairs.find((pair) => pair.id == action.payload.id);
      if (pair) {
        pair.players.push(action.payload.player);
      }
    },
    removeFromPair: (
      state,
      action: PayloadAction<{ id: number; playerId: number }>
    ) => {
      const pair = state.pairs.find((pair) => pair.id == action.payload.id);
      if (pair) {
        pair.players = pair.players.filter(
          (player) => player.id !== action.payload.playerId
        );
        if (pair.players.length === 0) {
          state.pairs = state.pairs.filter(
            (pair) => pair.id !== action.payload.id
          );
        }
      }
    },
  },
});

export const pairActions = pairSlice.actions;
export default pairSlice.reducer;
