import { useEffect, useState } from "react";
import { ListGroup, Container, Row, Col, Table ,Form} from "react-bootstrap";
// import { CloseCircleOutline, CheckmarkCircleOutline } from "react-ionicons";
import Sidebar from "../sidebar/Sidebar";
import "./ActivityLog.css";
import Header from "../header/Header";

const ActivityLog = () => {
 
  const employeeList = [
    {
      id: 1,
      type: "360",
      date: "26.01.2022",
      name: "sid-one",
      sname:"null",
      email: "tysonlee23@gmail.com",
      status:"completed"
    },

    {
      id: 2,
      type: "customer",
      date: "26.01.2022",
      name: "sid-two",
      sname:"null",
      email: "brucelee23@gmail.com",
      status:"notcompleted"
    },

    {
      id: 3,
      type: "nps",
      date: "28.02.2022",
      name: "sid-three",
      sname:"null",
      email: "brucelee23@gmail.com",
      status:"completed"
    },

    {
      id: 4,
      type: "online",
      date: "26.01.2022",
      name: "sid-four",
      sname:"null",
      email: "brucelee23@gmail.com",
      status:"notcompleted"
    },
    {
      id: 5,
      type: "online",
      date: "26.01.2022",
      name: "sid-five",
      sname:"null",
      email: "brucelee23@gmail.com",
      status:"notcompleted"
    },
    {
      id: 6,
      type: "online",
      date: "26.01.2022",
      name: "sid-six",
      sname:"null",
      email: "brucelee23@gmail.com",
      status:"notcompleted"
    },
    {
      id: 7,
      type: "online",
      date: "26.01.2022",
      name: "sid-seven",
      sname:"null",
      email: "brucelee23@gmail.com",
      status:"completed"
    },
    {
      id: 8,
      type: "nps",
      date: "28.02.2022",
      name: "sid-eight",
      sname:"null",
      email: "brucelee23@gmail.com",
      status:" notcompleted"
    },
    {
      id: 9,
      type: "nps",
      date: "28.02.2022",
      name: "sid-nine",
      sname:"null",
      email: "brucelee23@gmail.com",
      status:" notcompleted"
    },
  ];

  // List of all cars satisfing all the filters
  const [filteredList, setFilteredList] = useState(employeeList);
  const [selectedType, setSelectedType] = useState("");
  const [setstatus, setSelectedStatus] = useState("");
  // const [setdate,setSelectedDate]= useState("");
  


  // filterby type start===================================>
  const filterByType = (filteredData) => {
    if (!selectedType) {
    return filteredData;
    }
   const filteredSurveyType = filteredData.filter(
       (item) =>
       item.type.split(" ").indexOf(selectedType) !== -1
    );
    return filteredSurveyType;
   };
  // filterby type  ends===================================>



  // filterby status start===================================>
  const filterByStatus = (filteredData) => {
    if (!setstatus) {
     return filteredData;
    }
    const filteredStatusType = filteredData.filter(
      (item) => item.status.split(" ").indexOf(setstatus) !== -1
    );
    return filteredStatusType;
  };
  // filterby status start===================================>


  // Update seletedType state=============================>
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  //Update seleted state=============================>
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };
 // all actions perform here========================>
  useEffect(() => {
    var filteredData = filterByType(employeeList);
    filteredData = filterByStatus(filteredData);
    setFilteredList(filteredData);
  }, [selectedType,setstatus]);

  // all actions perform here========================>

  {
    /* Activity table coding ends=====================================> */
  }

  return (
    <>
    <Header/>
      <ListGroup bsPrefix="my-activity">
        <Container fluid>
          <Row>
            <Col className="leftside-content width-fix">
              <Sidebar />
            </Col>

            <Col>
              <ListGroup bsPrefix="rightside-content">
                {/* Activity table HTML start=====================================> */}
                {/*  searching functionality start ==========================*/}
               
                <ListGroup bsPrefix="activity-head">
                <Row>
                <Col md={6} lg={6} >
                <div className="left-heading">
                <h3>Activity Log</h3>
                </div>
                </Col>

                <Col md={6} lg={6} className="right-search">
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
               />
                </Col>
                </Row>
                </ListGroup>

               {/*  searching functionalityends ==========================*/}

                {/* filter start ======================================>*/}
                <div className="flower d-flex">
                  <div className="brand-filter">
                    <div className="filter-designation">
                    <p>Survey Type</p>
                    </div>
                    <div>
                    <select
                      id="state"
                      value={selectedType}
                      onChange={handleTypeChange}
                    >
                      <option value="">All</option>
                      <option value="online">online</option>
                      <option value="nps">nps</option>
                     
                    </select>
                    </div>
                  </div>

                  <div className="brand-filter">
                    <div className="sent-on">
                    <p>Sent On</p>
                    </div>
                    <div>
                    <select
                      id="state-one"
                      // value={selectedCompany}
                      // onChange={handleCompanyChange}
                    >
                      <option value="">All</option>
                      <option value="">26.02.2022 </option>
                      <option value="">28.02.2022</option>
                    </select>
                    </div>
                  </div>

                  <div className="brand-filter">
                    <div className="sent-on">
                    <p>Sent By Name</p>
                    </div>
                    <div>
                    <select
                      id="state-four"
                      // value={selectedCompany}
                      // onChange={handleCompanyChange}
                    >
                      <option value="">All</option>
                      <option value="">Sid </option>
                      <option value="">Hrx</option>
                    </select>
                    </div>
                  </div>
                  <div className="brand-filter">
                    <div className="sent-on">
                    <p>Status</p>
                    </div>
                    <div>
                    <select
                      id="state-five"
                      value={setstatus}
                      onChange={handleStatusChange}
                    >
                      <option value="">All</option>
                      <option value="completed">completed</option>
                      <option value="notcompleted">not completed</option>
                    </select>
                    </div>
                  </div>
                </div>
                {/* filter ends======================================>*/}

                <table class="table">
                  <thead>
                    <tr className="active-row">
                      <th scope="col" >
                        <input type="checkbox" />
                      </th>
                      <th scope="col" className="active">Survey Type</th>
                      <th scope="col" className="active">Sent On</th>
                      <th scope="col" className="active">Sent By Name</th>
                      <th scope="col" className="active">Survey Name</th>
                      <th scope="col" className="active">Sent Email</th>
                      <th scope="col" className="active">Status</th>
                    </tr>
                  </thead>
                  {/* second part start ==============================================*/}
                  <tbody>
                    {filteredList.map((item, index) => (
                      <tr key={item.id} className="active-row-two">
                        <th scope="row" className="td">
                          <input type="checkbox" />
                        </th>
                        <td className="td">{item.type}</td>
                        <td className="td">{item.date}</td>
                        <td className="td">{item.name}</td>
                        <td className="td">{item.sname}</td>
                        <td className="td">{item.email}</td>
                        <td className="td">{item.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* second part ends ================================================ */}

                {/* Activity table HTML ends=====================================> */}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </ListGroup>
    </>
  );
};

export default ActivityLog;
