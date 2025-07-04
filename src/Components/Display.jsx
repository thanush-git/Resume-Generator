import "../display.css";

function Display({ masterObj }) {
  const formatMonthYear = (date) => {
    if (!date) return "";
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    }).format(new Date(date));
  };

  return (
    <div className="resumeContainer">
      <div className="resume">
        <div className="names">
          <h1 id="fullName">
            {masterObj.personalList.fname} {masterObj.personalList.lname}
          </h1>
        </div>
        <div className="personalDeets">
          <p id="creds">
            {masterObj.personalList.phno}{" "}
            {masterObj.personalList.email !== "" ? "| " : ""}
            {masterObj.personalList.email}{" "}
            {masterObj.personalList.linkedin !== "" ? "| " : ""}
            {masterObj.personalList.linkedin}{" "}
            {masterObj.personalList.portfolio !== "" ? "| " : ""}
            {masterObj.personalList.portfolio}
          </p>
        </div>
        <div className="education">
          <h2 id="edTitle">Education</h2>
          <hr id="edLine" />
          <div>
            {masterObj.edList.map((edItem, index) => (
              <div key={index}>
                <div id="uniLine1">
                  <div className="edName">
                    <h3>{edItem.university}</h3>
                    <p id="edPlace">{edItem.place}</p>
                  </div>
                </div>
                <div className="edLine2">
                  <div className="startEd">
                    <p>{edItem.course}</p>
                    <div className="edDates">
                      <p>{formatMonthYear(edItem.startDate)} -</p>
                      <p>- {formatMonthYear(edItem.endDate)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="Experience">
          <h2 id="edTitle">Experience</h2>
          <hr id="edLine" />
          <div>
            {masterObj.expList.map((expItem, index) => (
              <div key={index}>
                <div id="uniLine1">
                  <div className="edName">
                    <h3>{expItem.role}</h3>
                    <div className="edDates">
                      <p>{formatMonthYear(expItem.startDate)} -</p>
                      <p>
                        -{" "}
                        {expItem.endDate
                          ? formatMonthYear(expItem.endDate)
                          : "Present"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="edLine2">
                  <div className="startEd">
                    <p>{expItem.org}</p>
                    <p id="edPlace">{expItem.place}</p>
                  </div>
                </div>

                <div>
                  <ul className="Description">
                    {expItem.desc.split("\n").map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="Projects">
          <h2 id="edTitle">Projects</h2>
          <hr id="edLine" />
          <div className="projs">
            {masterObj.projList.map((projItem, index) => (
              <div key={index} className="projectItem">
                <div className="projectsLine">
                  <div className="projectsLine">
                    <h3 id="projTitle">{projItem.title}{" "}</h3>
                    <p>| {projItem.tech}</p>
                  </div>

                  <div className="projDates">
                    <p>{formatMonthYear(projItem.startDate)}</p>
                    <p>
                      {projItem.endDate
                        ? formatMonthYear(projItem.endDate)
                        : "Present"}
                    </p>
                  </div>
                </div>

                <ul className="projDescription">
                  {projItem.desc.split("\n").map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Display;
