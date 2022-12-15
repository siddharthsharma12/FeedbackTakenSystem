import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// delete user part start======================================>
// export const DeleteUser = createAsyncThunk("auth/DeleteUser", async({id},{ rejectWithValue }) => {
//   try {
//       const response = await axios.post(`http://localhost:5000/:id`)
//       // toast.success("Login Successfully");
//       // navigate("/Usermanagement")
//        return response.data;
//   } catch (err) {
//     // toast.error("user doesn't exist");
//     return rejectWithValue(err.response.data);
    
//   }
// });

// delete user part ends=======================================>



// login part start=============================================================>
export const Login = createAsyncThunk("auth/Login", async({formValue,thunkAPI,navigate,toast},{ rejectWithValue }) => {
  try {
      const response = await axios.post('http://localhost:5000/login', (formValue))
      toast.success("Login Successfully");
      navigate("/AddSurveys")
       return response.data;
  } catch (err) {
    toast.error("user doesn't exist");
    return rejectWithValue(err.response.data);
    
  }
});
// login part ends=================================================================>


// signup part start==========================================================>
export const SignUp = createAsyncThunk("auth/SignUp", async({formValue,thunkAPI,navigate,toast},{ rejectWithValue }) => {
  try {
      const response = await axios.post('http://localhost:5000/signup', (formValue))
   
      navigate("/AddSurveys")
       return response.data;
  } catch (err) {
    // toast.error("user doesn't exist");
    return rejectWithValue(err.response.data);
    
  }
});

// sign up part ends===========================================================>




const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: null,
      error: "",
      loading: false,
     
    }, 
    extraReducers:{
      [Login.pending]:(state,action) =>{
        state.loading = true;
      },
      [Login.fulfilled]:(state,action) => {
        state.loading = false;
        localStorage.setItem("profile",JSON.stringify({...action.payload}))
        state.user = action.payload
      },
      [Login.rejected]:(state,action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [SignUp.pending]: (state, action) => {
        state.loading = true;
      },
      [SignUp.fulfilled]: (state, action) => {
        state.loading = false;
        localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
        state.user = action.payload;
      },
      [SignUp.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
    }
});

export default authSlice.reducer;