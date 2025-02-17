// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";


// const initialState = {
//     user: null,
//     isError: false,
//     isSuccess: false,
//     isLoading: false,
//     message: ""
// }
// // 
// // export default axios.create({
// //     baseURL: "http://localhost:8080/",
// //     headers: {
// //         'Content-Type': 'application/json',
// //         'Accept': 'application/json'
// //     }
// // });
// // const instance = axios.create({
// //     withCredentials: true
// // });
// // instance.get("http://localhost:5000")
// //     .then(response => console.log(response.data));


// export const SignupUser = createAsyncThunk("user/SignupUser", async(user, thunkAPI) => {
//     try {
//         const response = await axios.post('http://localhost:5000/signupuser', {
//             email: user.email,
//             password: user.password
//         });
//         return response.data;
//     } catch (error) {
//         if(error.response){
//             const message = error.response.data.msg;
//             return thunkAPI.rejectWithValue(message);
//         }
//     }
// });




// export const LoginUser = createAsyncThunk("user/loginuser", async(user, thunkAPI) => {
//     try {
//         const response = await axios.post('http://localhost:5000/login', {
//             email: user.email,
//             password: user.password
//         });
//         return response.data;
//     } catch (error) {
//         if(error.response){
//             const message = error.response.data.msg;
//             return thunkAPI.rejectWithValue(message);
//         }
//     }
// });


// export const getMe = createAsyncThunk("user/getMe", async(_, thunkAPI) => {
//     try {
//         const response = await axios.get('http://localhost:5000/me');
//         return response.data;
//     } catch (error) {
//         if(error.response){
//             const message = error.response.data.msg;
//             return thunkAPI.rejectWithValue(message);
//         }
//     }
// });

// export const LogOut = createAsyncThunk("user/LogOut", async() => {
//     await axios.delete('http://localhost:5000/logout');
// });


// export const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers:{
//         reset: (state) => initialState
//     },
//     extraReducer:(builder) => {
//         builder.addCase(SignupUser.pending, (state) =>{
//             state.isLoading = true;
//         });
//         builder.addCase(SignupUser.fulfilled, (state, action) =>{
//             state.isLoading = false;
//             state.isSuccess = true;
          
//             state.user = action.payload;
//         });
//         builder.addCase(SignupUser.rejected, (state, action) =>{
//             state.isLoading = false;
//             state.isError = true;
//             state.message = action.payload;
//         });
//     },
    
    

//     extraReducers:(builder) => {
//         builder.addCase(LoginUser.pending, (state) =>{
//             state.isLoading = true;
//         });
//         builder.addCase(LoginUser.fulfilled, (state, action) =>{
//             state.isLoading = false;
//             state.isSuccess = true;
//             localStorage.setItem("user", JSON.stringify({...action.payload}))
//             state.user = action.payload;
//         });
//         builder.addCase(LoginUser.rejected, (state, action) =>{
//             state.isLoading = false;
//             state.isError = true;
//             state.message = action.payload;
//         })

//  //  user protect route
//         builder.addCase(getMe.pending, (state) =>{
//             state.isLoading = true;
//         });
//         builder.addCase(getMe.fulfilled, (state, action) =>{
//             state.isLoading = false;
//             state.isSuccess = true;
//             state.user = action.payload;
//         });
//         builder.addCase(getMe.rejected, (state, action) =>{
//             state.isLoading = false;
//             state.isError = true;
//             state.message = action.payload;
//         })
//     }

// });

// export const {reset} = authSlice.actions;
// export default authSlice.reducer;