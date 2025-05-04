import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: {
    u1: [
      {
        id: "m1",
        sender: "me",
        receiver: "u1",
        isSeen: true,
        isDelivered: true,
        content:
          "Hey there! Hey there!Hey there!Hey there!Hey there!Hey there!Hey there!Hey there!Hey there!Hey there!Hey there!Hey there!Hey there!Heys there!Hey there!Hey there!",
        timestamp: "2025-05-02T14:31:00Z",
      },
      {
        id: "m2",
        sender: "u1",
        receiver: "me",
        isSeen: false,
        isDelivered: false,
        content:
          "Hi! What's up? Hi! What's up? Hi! What's up? Hi! What's up? Hi! What's up? Hi! What's up? Hi! What's up? Hi! What's up? Hi! What's up? Hi! What's up? Hi! What's up? ",
        timestamp: "2025-05-02T14:32:00Z",
      },
      {
        id: "m3",
        sender: "u1",
        receiver: "me",
        isSeen: false,
        isDelivered: true,
        content: "Nothing much wbu?",
        timestamp: "2025-05-02T14:32:00Z",
      },
      {
        id: "m4",
        sender: "me",
        receiver: "u1",
        isSeen: false,
        isDelivered: true,
        content: "Same here",
        timestamp: "2025-05-02T14:32:00Z",
      },
      {
        id: "m5",
        sender: "me",
        receiver: "u1",
        isSeen: false,
        isDelivered: false,
        content: "JK",
        timestamp: "2025-05-02T14:32:00Z",
      },
    ],
    u2: [],
  },
  activeChatId: null,
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setActiveChat: (state, action) => {
      state.activeChatId = action.payload;
    },
    addMessage: (state, action) => {
      const { contactId, message } = action.payload;
      if (!state.messages[contactId]) {
        state.messages[contactId] = [];
      }
      state.messages[contactId].push(message);
    },
  },
});

export const { addMessage, setActiveChat } = messagesSlice.actions;
export default messagesSlice.reducer;
