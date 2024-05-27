import { LISTS } from "../../data/data";
import List from "./List";

export default function PersonalSection() {
	return (
		<div className="about-section personal-container">
			<h2>Personally</h2>
			Originally from Nelspruit, I moved to Pretoria to study. I have obtained a
			BCom in Business Management, but after starting to play around with
			different coding languages I developed a deep passion for front end
			development
			<div className="personal-sections">
				{LISTS.map((list) => (
					<List
						key={list.id}
						id={list.id}
						items={list.items}
						title={list.title}
						icon={list.icon}
					/>
				))}
			</div>
		</div>
	);
}
