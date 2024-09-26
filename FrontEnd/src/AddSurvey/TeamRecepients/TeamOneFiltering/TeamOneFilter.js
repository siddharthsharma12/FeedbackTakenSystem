import { useEffect, useState } from "react";
import "./TeamOneFilter.css";
import { Container } from "react-bootstrap";

export default function TeamOneFilter() {
  const employeeList = [
    {
      id: 1,
      name: "siddharth ",
      email: "sharmasiddhu8057@gmail.com",
      designation: "react developer",
      company: "transfunnel",
      mobile: "7727079509",
    },

    {
      id: 2,
      name: "Rishi ",
      email: "mayank8908@gmail.com",
      designation: "salesforce developer",
      company: "transfunnel",
      mobile: "7079509433",
    },

    {
      id: 3,
      name: "Abhinav ",
      email: "Abhinav232@gmail.com",
      designation: "react developer",
      company: "meta",
      mobile: "9509785432",
    },

    {
      id: 4,
      name: "harsh ",
      email: "harsh232@gmail.com",
      designation: "salesforce developer",
      company: "google",
      mobile: "5509785432",
    },
    {
      id: 5,
      name: "Bittu",
      email: "Bittu232@gmail.com",
      designation: "hubspot",
      company: "vipro",
      mobile: "6509785432",
    },
    {
      id: 6,
      name: "Brucelee",
      email: "brucelee23@gmail.com",
      designation: "sales",
      company: "meta",
      mobile: "7509785432",
    },
    {
      id: 7,
      name: "lee",
      email: "brucelee23@gmail.com",
      designation: "marketo",
      company: "tcs",
      mobile: "7509785432",
    },
    {
      id: 8,
      name: "rakesh",
      email: "brucelee23@gmail.com",
      designation: "sales",
      company: "accenture",
      mobile: "7509785432",
    },
    {
      id: 9,
      name: "nilesh",
      email: "brucelee23@gmail.com",
      designation: "salesforce",
      company: "meta",
      mobile: "7509785432",
    },
  ];

  // select all functionalities start===========================>
  // const [isCheckAll, setIsCheckAll] = useState(false);

  // select all functionalities ends=============================>


  // List of all cars satisfing all the filters
  const [filteredList, setFilteredList] = useState(employeeList);

  const [selectedDesignation, setSelectedDesignation] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");



  // filterby Designation start===================================>
  const filterByDesignation = (filteredData) => {
    if (!selectedDesignation) {
      return filteredData;
    }

    const filteredEmployee = filteredData.filter(
      (employee) =>
        employee.designation.split(" ").indexOf(selectedDesignation) !== -1
    );
    return filteredEmployee;
  };
  // filterby Designation  ends===================================>

  // filterby Company start===================================>
  const filterByCompany = (filteredData) => {
    if (!selectedCompany) {
      return filteredData;
    }
    const filteredCompany = filteredData.filter(
      (employee) => employee.company.split(" ").indexOf(selectedCompany) !== -1
    );
    return filteredCompany;
  };
  // filterby Company start===================================>

  // Update seletedBrand state=============================>
  const handleDesignationChange = (event) => {
    setSelectedDesignation(event.target.value);
  };

  // Update seletedCompany state=============================>
  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  // all actions perform here========================>
  useEffect(() => {
    var filteredData = filterByDesignation(employeeList);
    filteredData = filterByCompany(filteredData);
    setFilteredList(filteredData);
  }, [selectedDesignation, selectedCompany]);

  // all actions perform here========================>
  // select all functionality start===================>
  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allselect") {
      const checkedvalue = filteredList.map((item) => { return { ...item, isChecked: checked } });
      console.log(checkedvalue);
      setFilteredList(checkedvalue);
    } else {
      const checkedvalue = filteredList.map((item) =>
        item.name === name ? { ...item, isChecked: checked } : item);
      console.log(checkedvalue);
      setFilteredList(checkedvalue);
    }
  }
  // slect all functionality ends=====================>
  return (
    <>

      {/* filter start ======================================>*/}
      <div className="flower d-flex">
        <div className="brand-filter-one">

          <select
            className="form-select-extra"
            value={selectedDesignation}
            onChange={handleDesignationChange}
          >
            <option value="">Designation</option>
            <option value="react">react </option>
            <option value="salesforce">salesforce</option>
            <option value="sales">sales</option>
          </select>
        </div>

        <div className="brand-filter-one">

          <select
            className="form-select-extra"
            value={selectedCompany}
            onChange={handleCompanyChange}
          >
            <option value="">Company</option>
            <option value="meta">meta </option>
            <option value="transfunnel">transfunnel</option>
          </select>
        </div>
      </div>
      {/* filter ends======================================>*/}

      <table class="table">
        <thead>
          <tr className="team-pick">
            <th scope="col">
              <input type="checkbox"
                name="allselect"
                onChange={handleChange}
                checked={!filteredList.some((item) => item?.isChecked !== true)}
              />
            </th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Designation</th>
            <th scope="col">Company</th>
            <th scope="col">Mobile</th>
          </tr>
        </thead>
        {/* second part start ==============================================*/}
        <tbody>
          {filteredList.map((item) => (
            <tr key={item.id}>
              <th scope="row">
                <input type="checkbox"
                  name={item.name}
                  checked={item?.isChecked || false}
                  onChange={handleChange}
                />
              </th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.designation}</td>
              <td>{item.company}</td>
              <td>{item.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* second part ends ================================================ */}

    </>
  );
}
