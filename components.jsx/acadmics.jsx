import React from "react";
import "../styles/acadmics.css";
import first from "../styles/1-52.jpg";
import second from "../styles/5-1022.jpg";
import third from "../styles/10-122.jpg";

export const Acadmics = () => {
  return (
    <div id="acadmics">
      <h2>Academics</h2>
      <div id="three">
        <div className="first">
          <img src={first} alt="Primary Year Program" />
          <div className="both">
            <h5>PRIMARY YEAR PROGRAM</h5>
            <p>
              The Primary section offers the Primary Years Programme (PYP) for
              children aged 3 - 12. The programme nurtures young students to be
              caring, lifelong learners who are internationally open-minded
              individuals.
            </p>
          </div>
        </div>

        <div className="first">
          <img src={second} alt="Middle Year Program" />
          <div className="both">
            <h5>MIDDLE YEARS PROGRAM</h5>
            <p>
              The Middle Years Programme (Grades 6-10) is a concept and
              skill-based curriculum that encourages student inquiry and aids in
              the development of personal understanding and a sense of
              responsibility in their community.
            </p>
          </div>
        </div>

        <div className="first">
          <img src={third} alt="Senior Year Program" />
          <div className="both">
            <h5>SENIOR YEAR PROGRAM</h5>
            <p>
              The Senior Years Programme prepares students for higher education,
              equipping them with critical thinking and problem-solving skills
              essential for university and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acadmics;
