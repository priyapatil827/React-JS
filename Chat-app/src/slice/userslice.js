import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { auth,db, provider } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import {collection,getDocs,setDoc} from 'firebase/firestore'

export const signIn = createAsyncThunk(
  "user/signin",
  async ({ email, password }) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = {
      name: userCredential.user.displayName,
      email: userCredential.user.email,
    };
    return user;
  }
);

export const signUp = createAsyncThunk(
  "user/signup",
  async ({ email, password }) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = {
      name: userCredential.user.displayName,
      email: userCredential.user.email,
    }
    return user;
  }
)

export const signinwithgoogles = createAsyncThunk("user/google", async (_, thunkAPI) => {
  try {
    const result = await signInWithPopup(auth, provider);

    const user = {
      name: result.user.displayName,
      email: result.user.email,
      photo: result.user.photoURL,
    };

    // ✅ Optionally save user to Firestore (using UID)
    await setDoc(doc(db, "users", result.user.uid), user, { merge: true });

    alert("Sign in with Google successful!!");
    return user;
  } catch (error) {
    // Properly reject the thunk with error message
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.isLoading = false;
        alert("user signin successfully !!");
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "signin failed !!";
      }).addCase(signUp.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.isLoading = false;
        alert("user signin successfully !!");
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "signin failed !!";
      });
  },
});

export default userSlice.reducer;