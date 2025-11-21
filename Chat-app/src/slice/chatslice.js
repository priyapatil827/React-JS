import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { db } from '../firebase'
import { doc, setDoc, getDocs, addDoc, collection } from 'firebase/firestore'

export const readMessage = createAsyncThunk("chat/read", async ({ sender, receiver }) => {
  const docId = sender + "_" + receiver;
  const snapshots = await getDocs(collection(db, "chatroom", docId, "chats"));
  const chatList = snapshots.docs.map((snap) => snap.data());
  return chatList;
})

export const sendMessage = createAsyncThunk("chat/send", async ({ sender, receiver }) => {
  const docId = sender + "_" + receiver;;
  const chatId = Date.now().toLocaleString();
  try {
    await setDoc(doc(db, "chatroom", docId, "chats", chatId), {
      message: "hello",
    })
  } catch (error) {
    console.log("Error adding document: ", error);
  }
})

const initialState = {
  chats: [],
  isLoading: false,
  error: null,
};

const chatslice = createSlice({
  name: "chat",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendMessage.fulfilled, (state) => {
        state.isLoading = false;
        alert("message sended sucessfully!");
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }).addCase(readMessage.pending, (state) => {
        state.isLoading = true;
      }).addCase(readMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chats = action.payload;
      }).addCase(readMessage.rejected, (state) => {
        state.error = "could not read the data";
      });
  }
});

export default chatslice.reducer;