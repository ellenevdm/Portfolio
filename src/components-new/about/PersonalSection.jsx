import "./personalSection.scss";

import Accordion from "../UI/Accordion";
import { LISTS } from "../../data/data";
import { createPersonalLists } from "../../utils/utils";

export default function PersonalSection() {
  const sections = createPersonalLists(LISTS);

  return (
    <div className="personal-section">
      <p>
        {" "}
        Originally from Nelspruit, I moved to Pretoria to study. I have obtained
        a BCom in Business Management, but after starting to play around with
        different coding languages I developed a deep passion for front end
        development
      </p>
      <Accordion sections={sections} />
    </div>
  );
}
