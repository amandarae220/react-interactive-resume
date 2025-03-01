import React from 'react';
import GanttChart from './components/GanttChart';
import './style.css';

const App: React.FC = () => {
  return (
    <div>
      <div id="nameTitleContainer">
        <h1 id="name">AMANDA LLOYD</h1>
        <h2 id="title">Front End Developer &amp; Visualization Engineer</h2>
      </div>

      <div id="vizContainer">
        <div id="ganttContainer" className="border">
          <div className="titleContainer">Work Experience</div>
          <div id="ganttChart"></div>
        </div>

        <div className="bottomHalf">
          <div id="skillsContainer" className="bottomHalfLeft">
            <svg className="skills"></svg>
          </div>
          <div id="detailsContainer" className="bottomHalfRight">
            <div id="detailsDiv" className="border">
              <div id="dynamicTitle" className="titleContainer"><p>Role/Skill Details</p></div>
              <div id="contentContainer" className="paddingClass">
                <div>
                  <p id="role"></p>
                  <p id="company"></p>
                  <p id="location"></p>
                </div>
                <p>
                  Duration: <span id="duration"></span>
                </p>
                <p>Description: </p>
                <div id="description"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="info">
        <p>Rotate screen for optimal viewing</p>
      </div>

      {/* The GanttChart component will run the D3 code on mount */}
      <GanttChart />
    </div>
  );
};

export default App;
