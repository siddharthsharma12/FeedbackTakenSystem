import React from 'react';
import {Button} from "react-bootstrap";

const HandleFormOne = ({handleAddPost,handleChange,handleClose}) => {

  return (
    
     <>
        <div className='from-one' style={{margin:"20px 0px"}}>
         <form onSubmit={handleAddPost}>
           <div className="mb-3">
             <label className="form-label">
              Email
             </label>
             <input
               type="text"
               className="form-control"
               name="email"
               placeholder="Email"
               onChange={handleChange("email")}
               required
             />
           </div>
           <div className="mb-3">
             <label className="form-label">
               Role
             </label>
             <textarea
               rows="4"
               cols="50"
               className="form-control"
               name="role"
               placeholder="Role"
               required
               onChange={handleChange("role")}
             ></textarea>
            </div>
            <div className="modal-footer d-block">
             <Button
               type="submit"
              //  data-bs-dismiss="modal"
               className="btn btn-primary float-start"
               onClick={handleClose}
             >
              Add
             </Button>
             <Button
             variant="primary"
             onClick={handleClose}
             >
             Cancel
           </Button> 
           </div>
         </form>
         </div>
    
    </>
  )
}

export default HandleFormOne;