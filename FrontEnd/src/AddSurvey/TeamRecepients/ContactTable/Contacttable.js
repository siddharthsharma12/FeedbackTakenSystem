import { useEffect, useState } from "react";
import { Container, Row, Col,ListGroup } from "react-bootstrap";
import "./Contacttable.css";
import TeamOne from "../ContactTable/TeamOne";
import TeamTwo from "../ContactTable/TeamTwo";

function Contacttable() {
  // const [team, setTeam] = useState("Teams");
  const [team, setTeam] = useState("team one");
  const [TeamONeVisible, setTeamOneVisible] = useState(false);
  const [TeamTwoVisible, setTeamTwoVisible] = useState(false);

  useEffect(() => {
    team === "team one" ? setTeamOneVisible(true) : setTeamOneVisible(false);
    team === "team two" ? setTeamTwoVisible(true) : setTeamTwoVisible(false);
  }, [team]);

  const handleOnChange = (e) => {
    setTeam(e.target.value);
  };

  //Search Filter Data

  return (
    <>
      <Container>
        <Row>
          {/*search part start================================> */}
        
      
          <Col  md={6} lg={6}>
            <div className="usermanagement">
              <h4>Receipients</h4>
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
                      value={team}
                      onChange={handleOnChange}
                    >
                      <option value="Teams">Team</option>
                      <option value="team one">Team 1</option>
                      <option value="team two">Team 2</option>
                    </select>
                  </div>
                </div>
              </div>
              {/*dropdown part ends ==============================================*/}
              <table class="table">
                <thead >
                  <tr className="team-pick">
                    <th scope="col">Teams</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>All Users</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <td>Team 1</td>
                    <td>98</td>
                  </tr>

                  <tr>
                    <td>Team 2</td>
                    <td>50</td>
                  </tr>

                  <tr>
                    <td>Team 3</td>
                    <td>74</td>
                  </tr>

                  <tr>
                    <td>Team 4</td>
                    <td>51</td>
                  </tr>
                </tbody>
              </table>
            </Col>

            {/* first table part ends ================================================ */}

            {/* second part starts ================================================ */}
            <Col md={10} lg={10}>
              {TeamONeVisible && <TeamOne />}
              {TeamTwoVisible && <TeamTwo />}
            </Col>
            {/* second part ends ================================================ */}
          </Row>
      
      </Container>
    </>
  );
}

export default Contacttable;
