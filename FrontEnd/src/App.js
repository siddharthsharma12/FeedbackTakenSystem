import React, { useState } from "react";
import Header from "./header/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import { v4 as uuid } from "uuid";
import Profile from "./profile/Profile";
import Dashboard from "./DashBoard/Dashboard";
import MyPlan from "./Plan/MyPlan";
import Usermanagement from "./usermanagement/Usermanagement";
import Footer from "./footer/Footer";
import IdeaBoards from "./IdeaBoard.js/IdeaBoards";
import ActivityLog from "./ActivityLog/ActivityLog";
import Setting from "./Settings/Setting";
import Template from "./AddSurvey/SurveyScreens/Template";
import Scratch from "./AddSurvey/SurveyScreens/Scratch"
import Excel from "./AddSurvey/SurveyScreens/Excel"
import Copy from "./AddSurvey/SurveyScreens/Copy"
import Format from "./AddSurvey/SurveyScreens/Format"
import FullPageView from './AddSurvey/Pagination/FullPageView';
import PageTwo from './AddSurvey/Pagination/PageTwo';
import PageThree from './AddSurvey/Pagination/PageThree';
import AddSurveys from "./AddSurvey/OuterSurveyScreens/AddSurveys";
import Customers from "./AddSurvey/OuterSurveyScreens/Customers";
import Internal from "./AddSurvey/OuterSurveyScreens/Internal";
import Hear from "./AddSurvey/SurveyScreens/TemplatesScreen/Hear";
import Csat from "./AddSurvey/SurveyScreens/TemplatesScreen/Csat";
import Nps from "./AddSurvey/SurveyScreens/TemplatesScreen/Nps";
import Favourate from "./AddSurvey/SurveyScreens/TemplatesScreen/Favourate";
import Promote from "./AddSurvey/SurveyScreens/TemplatesScreen/Promote";
import Login from "./login/Login"
// import Farzi from "./Farzi"





function App() {

  const [components, setComponents] = useState([{id: uuid(),question: { type: "Boolean", title: ""}}]);
  
  

  return (
    <>
    <div>
      <Router>
      
        <Routes>
          <Route path="/"  element={<Login/>}/>
          <Route path="/Profile"  element={<Profile/>}/>
          <Route path="/AddSurveys" element={<AddSurveys/>}/>
          <Route path="/Dashboard" element={<Dashboard />}/>
          <Route path="/MyPlan" element={<MyPlan/>}/>
          <Route path="/Usermanagement" element={<Usermanagement/>}/>
          <Route path="/IdeaBoards" element={<IdeaBoards/>}/>
          <Route path="/ActivityLog" element={<ActivityLog/>}/>
          <Route path="/Setting" element={<Setting/>}/>
          <Route path="/Customers" element={<Customers/>}/>
          <Route path="/Internal" element={<Internal/>}/>
          <Route path="/Template" element={<Template/>}/>
          <Route path="/Scratch" element={<Scratch components={components} setComponents={setComponents}/>} />
          <Route path="/Excel" element={<Excel/>} />
          <Route path="/Copy" element={<Copy/>}/>
          <Route path="/Format" element={<Format/>}/>
          <Route path="/FullPageView" element={<FullPageView components={components} setComponents={setComponents}/>} />
          <Route path="/PageTwo" element={<PageTwo components={components} setComponents={setComponents}/>} />
          <Route path="/PageThree" element={<PageThree/>} />
          <Route path="/Favourate" element={<Favourate/>} />
          <Route path="/Csat" element={<Csat/>} />
          <Route path="/Promote" element={<Promote/>} />
          <Route path="/Nps" element={<Nps/>} />
          <Route path="/Hear" element={<Hear/>} />
        </Routes>
    
      </Router>
      </div>
    </>
  );
}

export default App;
