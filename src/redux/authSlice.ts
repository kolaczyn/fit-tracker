import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import firebase from 'firebase';
import { UserCredentials } from '../customTypes';
import { auth } from '../firebaseConfig';

type State = {
  user: firebase.User | null;
  isLoading: boolean;
};

const initialState: State = {
  user: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoading: (state: State, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setUser: (state: State, action: PayloadAction<firebase.User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setLoading, setUser } = authSlice.actions;

export const logIn = createAsyncThunk(
  'auth/logIn',
  async ({ email, password }: UserCredentials, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      thunkAPI.dispatch(setUser(result.user));
    } catch (error) {
      return error.message;
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }: UserCredentials, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));
    try {
      const result = await auth.createUserWithEmailAndPassword(email, password);
      console.log(result);
      thunkAPI.dispatch(setUser(result.user));
    } catch (error) {
      return error.message;
    } finally {
      thunkAPI.dispatch(setLoading(false));
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  thunkAPI.dispatch(setLoading(true));
  try {
    const result = await auth.signOut();
    setUser(null);
    console.log(result, 'result');
  } catch (error) {
    return error;
  } finally {
    thunkAPI.dispatch(setLoading(false));
  }
});

export default authSlice.reducer;
