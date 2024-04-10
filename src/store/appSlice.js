import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isSideNavOpen: true
    },
    reducers: {
        // toggling sidenav caould happen anywhere from app so we put the actions at app level
        toggleSideNav: (state) => {
            state.isSideNavOpen = !state.isSideNavOpen;
        },
        closeSideNav: (state) => {
            state.isSideNavOpen = false;
        }
    }
});

export const { toggleSideNav, closeSideNav } = appSlice.actions;
export default appSlice.reducer; // exporting appslice reducer so that it can be used to configureStore
