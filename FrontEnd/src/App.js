import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Profile from "./profile/Profile";
import DashBoard from "./DashBoard/DashBoard";
import MyPlan from "./Plan/MyPlan";
import Usermanagement from "./usermanagement/Usermanagement";
import ActivityLog from "./ActivityLog/ActivityLog";
import Setting from "./Settings/Setting";
import Scratch from "./AddSurvey/SurveyScreens/Scratch";
import AddSurveys from "./AddSurvey/OuterSurveyScreens/AddSurveys";
import Customers from "./AddSurvey/OuterSurveyScreens/Customers";
import axios from "axios";
import AllTeam from "./AllTeams/AllTeam";
import { AllTeams } from "./Teams";
import ViewInsights from "./viewinsights/ViewInsights";
import Ques from "./zcomponents/components"
// import { v4 as uuid } from 'uuid';

axios.defaults.withCredentials = true;



function App({ }) {

  // const unique_id = uuid();
  const [teams, setTeams] = useState(AllTeams);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const [question, setquestion] = useState(getSessionStoragequestion('question', Ques));
  const [format, setFormat] = useState(getSessionStorageSelectFormat('format', false));
  const [selectquestion, setselectquestion] = useState(getSessionStorageQuestion('selectquestion', false));
  const [required, setRequired] = useState(getSessionStorageRequired('required', false));
  const [selectedtemplate, setSelectedTemplate] = useState(getSessionStorageSelectTemplate('selectedtemplate', false));
  const [selectedRecepients, setSelectedRecepeients] = useState(getSessionStorageRecepeients('selectedRecepients', []));



  //  question session storage starts============================================>
  function getSessionStoragequestion(question, defaultValue) {
    const stored = sessionStorage.getItem(question);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  }
  useEffect(() => {
    sessionStorage.setItem('question', JSON.stringify(question));

  }, [question]);
  //question session storage ends================================>



  //select format session storage starts============================================>
  function getSessionStorageSelectFormat(key, defaultValue) {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  }

  useEffect(() => {
    sessionStorage.setItem('format', JSON.stringify(format));
  }, [format]);
  //select format session storage ends================================>


  //select selectquestion type session storage starts============================================>
  function getSessionStorageQuestion(key, defaultValue) {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  }

  useEffect(() => {
    sessionStorage.setItem('selectquestion', JSON.stringify(selectquestion));
  }, [selectquestion]);
  //select selectquestion type session storage ends================================>


  //select Required type session storage starts============================================>
  function getSessionStorageRequired(key, defaultValue) {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  }

  useEffect(() => {
    sessionStorage.setItem('required', JSON.stringify(required));
  }, [required]);
  //select Required type session storage ends================================>

  //Select template session storage starts============================================>
  function getSessionStorageSelectTemplate(key, defaultValue) {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  }

  useEffect(() => {
    sessionStorage.setItem('selectedtemplate', JSON.stringify(selectedtemplate));
  }, [selectedtemplate]);
  //Select Template session storage ends================================>


  //Recepeients session storage starts============================================>
  function getSessionStorageRecepeients(key, defaultValue) {
    const stored = sessionStorage.getItem(key);
    if (!stored) {
      return defaultValue;
    }
    return JSON.parse(stored);
  }

  useEffect(() => {
    sessionStorage.setItem('selectedRecepients', JSON.stringify(selectedRecepients));
  }, [selectedRecepients]);
  //Recepeients session storage ends============================================>

  return (
    <>
      <div className={`App ${theme}`}>
        <Router>
          <Routes>
            {/* <Route path="/" element={<Login/>} /> */}
            <Route exact path="/" element={<MyPlan />} />
            <Route path="/Usermanagement" element={<Usermanagement />} />
            <Route path="/ViewInsights" element={<ViewInsights />} />


            <Route path="/AllTeam" element={<AllTeam teams={teams} setTeams={setTeams} />} />

            {/* <Route path="/Register" element={<Register />} /> */}
            <Route path="/Profile" element={<Profile />} />
            <Route path="/AddSurveys" element={<AddSurveys />} />
            <Route path="/DashBoard" element={<DashBoard />} />

            <Route path="/ActivityLog" element={<ActivityLog />} />
            <Route path="/Setting" element={<Setting
              theme={theme}
              setTheme={setTheme}
            />} />
            <Route path="/Customers" element={<Customers />} />

            <Route
              path="/Scratch"
              element={
                <Scratch
                  question={question}
                  setquestion={setquestion}
                  teams={teams}
                  selectedRecepients={selectedRecepients}
                  setSelectedRecepeients={setSelectedRecepeients}
                  selectedtemplate={selectedtemplate}
                  setSelectedTemplate={setSelectedTemplate}
                  format={format}
                  setFormat={setFormat}
                  selectquestion={selectquestion}
                  setselectquestion={setselectquestion}
                  required={required}
                  setRequired={setRequired}

                />
              }
            />

          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
