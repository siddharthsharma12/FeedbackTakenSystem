import React from 'react';
import {Button} from "react-bootstrap";

const HandleFormOne = ({handleAddPost,handleChange,handleClose}) => {

  return (
     <>
        <div className='from-one' style={{margin:"20px 0px"}}>
         <form onSubmit={handleAddPost}>
           <div className="mb-3">
             <label className="form-label">
               Title
             </label>
             <input
               type="text"
               className="form-control"
               name="title"
               placeholder="title"
               onChange={handleChange("title")}
               required
             />
           </div>
           <div className="mb-3">
             <label className="form-label">
               Body
             </label>
             <textarea
               rows="4"
               cols="50"
               className="form-control"
               name="body"
               placeholder="body"
               required
               onChange={handleChange("body")}
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