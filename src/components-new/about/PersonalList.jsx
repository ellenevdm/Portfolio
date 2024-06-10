import "./personalList.scss";

import Accordion from "../UI/Accordion";
import { LISTS } from "../../data/data";
import { createPersonalLists } from "../../utils/utils";

export default function PersonalList() {
	const sections = createPersonalLists(LISTS);

	return (
		<div className="personal-lists">
			<Accordion sections={sections} />
		</div>
	);
}
