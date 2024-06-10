import { configureStore } from "@reduxjs/toolkit";
import appSlice from "@lib/features/appSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            app: appSlice,
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
