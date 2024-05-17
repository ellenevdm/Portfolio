import pdf from "../../assets/documents/CV2024.pdf";

export default function CVDownload({ children }) {
	return (
		<>
			<a
				href={pdf}
				download="MyCVDoc"
				target="_blank"
			>
				{children}
			</a>
		</>
	);
}
