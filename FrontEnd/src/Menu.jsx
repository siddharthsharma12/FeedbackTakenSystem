// Image gallery project start======================================================>
import { Container, Row, Col, Offcanvas, Button } from "react-bootstrap";
import "./Menu.css";
// import {Modal} from "react-bootstrap";
// import Combine from "./AddSurvey/combine/Combine";
// import Modal from "./Modals/Modal";
const Menu = [
   
      {
        id : 1,
        image: "../images/pre1.png",
        title : "lorem alupis ad",
        para : "lorta esiu",
        // questions: [{
             
        // }],
        preview :
        <div className="orange">
        <Container>
        <Row>
        <div className="ques-one">
        <h5>1. Lorem ipsum dolor sit amet,cosecuter adipicing elit</h5>
        </div>
       
        <div className="black-one col-md-6 col-lg-6">
        <input class="first" type="radio" name="gender" value="Normal"/>lorem liter go elimpus de rue
        </div>
       
        <div className="black-one col-md-6 col-lg-6">
        <input class="first" type="radio" name="gender" value="Normal"/>lorem liter go elimpus de rue
        </div>
     
        <div className="black-one col-md-6 col-lg-6">
        <input class="first" type="radio" name="gender" value="Normal"/>lorem liter go elimpus de rue
        </div>
     
        <div className="black-one col-md-6 col-lg-6">
        <input class="first" type="radio" name="gender" value="Normal"/>lorem liter go elimpus de rue
        </div>
        
        </Row>
        </Container>
        </div>
       },
    

    {
        id : 2,
        image: "../images/pre2.png",
        title : " alupis ad",
        para : "ta esiu",
        preview :<h1>Test</h1>

    },
    
   
];


export default Menu;




// Image gallery project ends======================================================>

