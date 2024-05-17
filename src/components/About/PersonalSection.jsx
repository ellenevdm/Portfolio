import { LISTS } from "../../data/data";
import List from "./List";

export default function PersonalSection() {
	return (
		<>
			<h2>Personally</h2>
			<div className="about-section personal-container">
				<p>
					Originally from Nelspruit, I moved to Pretoria to study. I have
					obtained a BCom in Business Management, but after starting to play
					around with different coding languages I developed a deep passion for
					front end development
				</p>
				<div className="personal-sections">
					{LISTS.map((list) => (
						<List
							id={list.id}
							items={list.items}
							title={list.title}
							icon={list.icon}
						/>
					))}
				</div>
			</div>
		</>
	);
}
