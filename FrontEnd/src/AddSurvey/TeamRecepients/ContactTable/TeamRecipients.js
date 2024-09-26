import { useEffect, useState } from "react";
import { Container, Row, Col,ListGroup } from "react-bootstrap";
import "./TeamRecipients.css";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const TeamRecipients = ({setValidated, teams, selectedRecepients, setSelectedRecepeients }) => {

  const [selectedTeam, setSelectedTeam] = useState(teams[0]?.id);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  const getTeamEmployees = () => {
       const team = teams.find( team => team.id === selectedTeam);
       if(!team)
       return [];
       return team.employees;
  }


  const handleSelectAll = () => {

      if(isSelectAll) {
          handleChange("UnselectAll");
          setIsSelectAll(false);
      }else {
        handleChange("SelectAll");
        setIsSelectAll(true);
      }
  }

// select all functionality start==========================>

 const handleChange=(value) => { 

      if( value === "SelectAll")
      {
        setSelectedRecepeients(getTeamEmployees());

      } else if(value === "UnselectAll"){
        setSelectedRecepeients([]);
             
      } else{
        setSelectedRecepeients( prev => {
          const employeeFound = prev.find( recepient => recepient.id === value.id);
          if(employeeFound)
          return prev.filter(item => item.id !== value.id);
          return [...prev, value];
        })
      }
}
// slect all functionality ends=====================>

  return (
    <>
    <Container>
    <Row>
      {/*search part start================================> */}
    
  
      <Col  md={6} lg={6}>
        <div className="usermanagement">
          <h4>Receipients</h4>
         {/*get link pop up start================================> */}
         <a classname="dip" onClick={handleShow}>
         <i class="fa-solid fa-copy"></i>
         </a>
 
       <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
          <h4>Get Survey link</h4>
         </Modal.Header>
         <Modal.Body>
        
         <p>{window.location.origin + "/Surveyfill"}</p>
         </Modal.Body>
       
       </Modal>
           {/*get link pop up ends================================> */}
        </div>
        </Col>

        <Col  md={6} lg={6}  className="search-team">
        <div className="search-right">
        <form className="row g-3 ms-auto">
          <div className="col-auto">
            <input
              type="text"
              className="form-control ms-auto"
              placeholder="search data"
         
            />
          </div>
        </form>
        </div>
        </Col>
      
      </Row>
      {/*search part ends===========================================> */}

      {/* first table part start ==============================================*/}
      <Row>
        <Col md={2} lg={2}>
          {/* dropdown part start ==============================================*/}
          <div className="table-team ">
            <div className="d-flex">
              <div className="team">
                <p>
                  Teams
                </p>
              </div>

              <div className="brand-filter-zero">
                <select
                  className="form-select-extra"
                 
                >
                  <option value="Teams">Team</option>
                  {
                    teams.map( team => (
                      <option key={team.id} value={team.name} >{team.name}</option>
                    ))
                  }
                </select>
             </div>
            </div>
          </div>
          {/*dropdown part ends ==============================================*/}
          <Table striped bordered hover variant="light">
            <thead >
              <tr className="team-pick">
                <th scope="col">Teams</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
            {
              teams.map( team => (
                <tr key={team.id} onClick={() => setSelectedTeam(team.id)} >
                  <td>{team.name}</td>
                  <td>{team.employees.length}</td>
                </tr>
              ))
            }             
            </tbody>
          </Table>
        </Col>

        {/* first table part ends ================================================ */}
        <Col md={10} lg={10}>
        <Table className="rec" striped bordered hover variant="light">
        <thead>
          <tr>
            <th>
            <input
              className="unique"
              type="checkbox"
              name="allselect"
              onChange={() => handleSelectAll()}
              checked={isSelectAll}
              />
              </th>
            <th>name</th>
            <th>email</th>
            <th>jobtitle</th>
          </tr>
        </thead>
        <tbody>

         {getTeamEmployees().map( employee => {
            return (
              <tr key={employee.id}>
              <td>
              <input
               className="unique"
                type="checkbox"
                name={employee.name}   
                checked={!!selectedRecepients.find(item => item.id === employee.id)}
                onChange={() => handleChange(employee)}
              />
              </td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.jobtitle}</td>
            </tr>
            )
         })
          }
        </tbody>
      </Table>
        </Col>

      </Row>
  
  </Container>
    </>
  )
}

export default TeamRecipients;