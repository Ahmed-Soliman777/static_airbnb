import { createSlice } from "@reduxjs/toolkit";
import { homeData } from "@/Data/HomeData";



const homeSlice = createSlice({
    name: "Home",
    initialState: {homeData}
});

export default homeSlice.reducer;