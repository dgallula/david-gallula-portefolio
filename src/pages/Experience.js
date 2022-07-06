import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2000 - 2001"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            My  High School, Baccalaureat Mathematiques -2000 
          </h3>
          <p> High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Rabbinic School , juin2006 , rabbinical Degreee in Paris-
            Mohel since 2011 with Brit Yossef Itzhak Association 
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
          </h4>

          <p> </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Study school -Paris FullStack Paris 2019-2020 - Cours Online with degree -
             John Bryce Full stack Web application -Jerusalem 2021-2022 

          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>
          <p>Developed   4 projects at John Bryce and 5 tests .</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
             Formel - Listeners admin in marketing 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            
          </h4>
          <p>
             
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;


