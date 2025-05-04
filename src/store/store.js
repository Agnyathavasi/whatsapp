import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactSlice";
import messagesReducer from "./messageSlice";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    chat: messagesReducer,
  },
});

export default store;
