import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: string | null;
  email: string | null;
  isAuthenticated: boolean; // Nuevo campo para autenticar al usuario
}

interface UserPayload {
  user: string;
  email: string;
}

const initialState: UserState = {
  user: null,
  email: null,
  isAuthenticated: false, // Inicialmente no está autenticado
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    AddUser: (state, action: PayloadAction<UserPayload>) => {
      const { user, email } = action.payload;
      state.user = user;
      state.email = email;
      state.isAuthenticated = true; // Marcar como autenticado
    },
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.email = null;
      state.isAuthenticated = false; // Logout: cambiar estado
    },
  },
});

export const { AddUser, changeEmail, logout } = userSlice.actions;
export default userSlice.reducer;
