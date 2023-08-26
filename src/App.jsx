import { useState } from "react";
import PersonalDetails from "./components/PersonaDetails";
import PortfolioView from "./components/PortfolioView";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ResumeViewer from "./components/ResumeViewer";
const App = () => {
  const [name, setName] = useState("");
  const nameHandler = (event) => {
    const newName = event.target.value;
    setName(newName);
  };
  const [email, setEmail] = useState("");
  const emailHandler = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };
  const [phone, setPhone] = useState("");
  const phoneHandler = (event) => {
    const newPhone = event.target.value;
    setPhone(newPhone);
  };
  const [address, setAddress] = useState("");
  const addressHandler = (event) => {
    const newAddress = event.target.value;
    setAddress(newAddress);
  };
  const [school, setSchool] = useState("");
  const schoolHandler = (event) => {
    const newSchool = event.target.value;
    setSchool(newSchool);
  };
  const [startDate, setStartDate] = useState("");
  const startDateHandler = (event) => {
    const newStartDate = event.target.value;
    setStartDate(newStartDate);
  };
  const [endDate, setEndDate] = useState("");
  const endDateHandler = (event) => {
    const newEndDate = event.target.value;
    setEndDate(newEndDate);
  };
  const [degree, setDegree] = useState("");
  const degreeHandler = (event) => {
    const newDegree = event.target.value;
    setDegree(newDegree);
  };
  const [location, setLocation] = useState("");
  const locationHandler = (event) => {
    const newLocation = event.target.value;
    setLocation(newLocation);
  };
  const [locationCompany, setLocationCompany] = useState("");
  const locationCompanyHandler = (event) => {
    const newLocationCompany = event.target.value;
    setLocationCompany(newLocationCompany);
  };
  const [company, setCompany] = useState("");
  const companyHandler = (event) => {
    const newCompany = event.target.value;
    setCompany(newCompany);
  };
  const [position, setPosition] = useState("");
  const positionHandler = (event) => {
    const newPosition = event.target.value;
    setPosition(newPosition);
  };
  const [description, setDescription] = useState("");
  const descriptionHandler = (event) => {
    const newDescription = event.target.value;
    setDescription(newDescription);
  };
  const [startCompanyDate, setStartCompanyDate] = useState("");
  const startCompanyDateHandler = (event) => {
    const newStartCompanyDate = event.target.value;
    setStartCompanyDate(newStartCompanyDate);
  };
  const [endCompanyDate, setEndCompanyDate] = useState("");
  const endCompanyDateHandler = (event) => {
    const newEndCompanyDate = event.target.value;
    setEndCompanyDate(newEndCompanyDate);
  };
  return (
    <div className="bg-[#f3f4f6] h-screen w-full flex">
      <div className="w-1/3 p-20">
        <PersonalDetails
          name={name}
          nameHandler={nameHandler}
          email={email}
          emailHandler={emailHandler}
          phone={phone}
          phoneHandler={phoneHandler}
          address={address}
          addressHandler={addressHandler}
        />
        <Education
          school={school}
          schoolHandler={schoolHandler}
          startDate={startDate}
          startDateHandler={startDateHandler}
          endDate={endDate}
          endDateHandler={endDateHandler}
          degree={degree}
          degreeHandler={degreeHandler}
          location={location}
          locationHandler={locationHandler}
        />
        <Experience
          location={locationCompany}
          locationCompanyHandler={locationCompanyHandler}
          company={company}
          companyHandler={companyHandler}
          position={position}
          positionHandler={positionHandler}
          description={description}
          descriptionHandler={descriptionHandler}
          startCompanyDate={startCompanyDate}
          startCompanyDateHandler={startCompanyDateHandler}
          endCompanyDate={endCompanyDate}
          endCompanyDateHandler={endCompanyDateHandler}
        />
      </div>
      <div className="flex flex-col	items-center w-2/3">
        <PortfolioView
          name={name}
          email={email}
          phone={phone}
          address={address}
        />
        <ResumeViewer
          school={school}
          startDate={startDate}
          endDate={endDate}
          degree={degree}
          location={location}
          locationCompany={locationCompany}
          company={company}
          position={position}
          description={description}
          startCompanyDate={startCompanyDate}
          endCompanyDate={endCompanyDate}
        />
      </div>
    </div>
  );
};
export default App;
