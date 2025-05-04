import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "u1",
    name: "Contact 1",
    lastSeen: "2025-05-03T10:18:55.226Z",
    profilePic:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid:MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib:rb-1.2.1&w:1000&q:80",
  },
  {
    id: "u2",
    name: "Contact 2",
    lastSeen: "2025-05-03T10:18:55.226Z",
    profilePic:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid:MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib:rb-1.2.1&w:1000&q:80",
  },
  {
    id: "u3",
    name: "Contact 3",
    lastSeen: "2025-05-03T10:18:55.226Z",
    profilePic:
      "https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:750&q:80",
  },
  {
    id: "u4",
    name: "Contact 4",
    lastSeen: "2025-05-03T10:18:55.226Z",
    profilePic:
      "https://images.unsplash.com/photo-1479813183133-f2e9b38ed6c4?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:710&q:80",
  },
  {
    id: "u5",
    name: "Contact 5",
    lastSeen: "2025-05-03T10:18:55.226Z",
    profilePic:
      "https://images.unsplash.com/photo-1489993360877-883980cc7333?ixid:MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib:rb-1.2.1&auto:format&fit:crop&w:750&q:80",
  },
];
6;
const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action) => action.payload,
    addContact: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setContacts, addContact } = contactsSlice.actions;
export default contactsSlice.reducer;
