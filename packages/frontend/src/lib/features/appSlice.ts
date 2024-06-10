import { Slice, createSlice } from '@reduxjs/toolkit';
import { SectionId } from '@data/dataDef';
export interface AppState {
    showHeader: boolean;
    backgroundImageMobile: string;
    backgroundImageDesktop: string;
    backgroundColor: string;
    photographyIndex: number;
    selectedWorksIndex: number;
    activeHeaderTab: SectionId;
}
export const initialAppState: AppState = {
    showHeader: true,
    backgroundImageMobile:
        "url('/images/bg/mobile_home.png'), linear-gradient(161deg, #0C0C0C 31.65%, #323232 134.46%)",
    backgroundImageDesktop:
        "url('/images/bg/desktop_home.png'), linear-gradient(161deg, #0C0C0C 31.65%, #323232 134.46%)",
    backgroundColor: '',
    photographyIndex: 0,
    selectedWorksIndex: 0,
    activeHeaderTab: 'home',
};
export const appSlice: Slice = createSlice({
    name: 'app',
    initialState: initialAppState,
    reducers: {
        setShowHeader: (state, action) => {
            state.showHeader = action.payload;
        },
        setBackgroundImageMobile: (state, action) => {
            state.backgroundImageMobile = action.payload;
        },
        setBackgroundImageDesktop: (state, action) => {
            state.backgroundImageDesktop = action.payload;
        },
        setBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload;
        },
        setPhotographyIndex: (state, action) => {
            state.photographyIndex = action.payload;
        },
        setSelectedWorksIndex: (state, action) => {
            state.selectedWorksIndex = action.payload;
        },
        setActiveHeaderTab: (state, action) => {
            state.activeHeaderTab = action.payload;
        },
    },
});
export const {
    setShowHeader,
    setBackgroundImage,
    setBackgroundImageDeskto,
    setBackgroundColor,
    setPhotographyIndex,
    setSelectedWorksIndex,
    setActiveHeaderTab
} = appSlice.actions;
export default appSlice.reducer;
