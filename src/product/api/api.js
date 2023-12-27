import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// get 
export const getproduct = createAsyncThunk("getproduct", async () => {
    return axios.get("http://localhost:4000/posts").then((res) => {
        const data = res.data

        return {
            data
        }
    })
})

// post 
export const postproduct = createAsyncThunk("postproduct", async (data) => {
    return axios.post("http://localhost:4000/posts", data).then((res) => {
        const data = res.data

        return data
    })
})

// delete 
export const deleteproduct = createAsyncThunk("deleteproduct", async (id) => {
    return axios.delete("http://localhost:4000/posts/" + id).then((res) => {
        const data = res.data

        return id
    })
})

// update 
export const updateproduct = createAsyncThunk("updateproduct", async (data) => {
    return axios.put("http://localhost:4000/posts/" + data.id, data).then((res) => {
        const data = res.data

        return data
    })
})