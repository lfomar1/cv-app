const ResumeViewer = ({
  startDate,
  endDate,
  school,
  location,
  degree,
  locationCompany,
  company,
  position,
  description,
  startCompanyDate,
  endCompanyDate,
}) => {
  return (
    <div className="w-4/5 h-2/3 bg-white shadow-lg rounded-md">
      <div className="p-10 mt-10 text-black">
        <div className="flex justify-center bg-slate-300">
          <h1>Education</h1>
        </div>
        <div className="gap-x-32 flex">
          <div className="">
            <div className="flex gap-x-1">
              <p>{startDate} -</p>
              <p>{endDate}</p>
            </div>
            <div>
              <p>{location}</p>
            </div>
          </div>
          <div>
            <p>
              <b>{school}</b>
            </p>
            <p>{degree}</p>
          </div>
        </div>
        <div className="flex justify-center bg-slate-300 mt-10">
          <h1>Experience</h1>
        </div>
        <div>
          <div className="gap-x-32 flex">
            <div>
              <div className="flex gap-x-1">
                <p>{startCompanyDate} -</p>
                <p>{endCompanyDate}</p>
              </div>
              <div>
                <p>{locationCompany}</p>
              </div>
            </div>
            <div>
              <p>
                <b>{company}</b>
              </p>
              <p>{position}</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeViewer;
