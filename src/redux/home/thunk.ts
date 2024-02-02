import { createAsyncThunk } from "@reduxjs/toolkit"
import { ITEM_LIST } from "../../mocks"

export const fetchList = createAsyncThunk('home/fetchList', async () => {
    return ITEM_LIST
})
