import "./personalSection.scss";

import Accordion from "../UI/Accordion";
import { LISTS } from "../../data/data";
import { createPersonalLists } from "../../utils/utils";

const personalLists = createPersonalLists(LISTS);

export default function PersonalSection() {
  return (
    <div className="personal-section">
      <Accordion items={personalLists} />
    </div>
  );
}
