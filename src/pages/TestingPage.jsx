// import React from "react";
// const projects = [
//   {
//     id: "proj1",
//     key: "1",
//     name: "Pawfectly Pampered",
//     sections: [
//       {
//         id: "sec1",
//         key: "1",
//         title: "Description",
//         content: (
//           <p>
//             Merging my passion for pets with front-end development, I created a
//             captivating online hub for 'Pawfectly Pampered,' uniting aesthetics
//             with function.
//           </p>
//         ),
//       },
//       {
//         id: "sec2",
//         key: "2",
//         title: "Features",
//         content: (
//           <ul>
//             <li>
//               <strong>Flexbox Layout:</strong> Used flexbox to design and build
//               the layout for the company's homepage.
//             </li>
//             <li>
//               <strong>Aesthetic Design:</strong> Created a visually appealing
//               and user-friendly interface for 'Pawfectly Pampered.'
//             </li>
//             <li>
//               <strong>Responsive Design</strong> Ensured the website is
//               responsive across different devices for optimal user experience.
//             </li>
//             <li>
//               <strong>Customization:</strong> Tailored the homepage design to
//               suit the theme of a pet-centered business, showcasing creativity
//               and attention to detail.
//             </li>
//           </ul>
//         ),
//       },
//       {
//         id: "sec3",
//         key: "3",
//         title: "Technologies",
//         content: (
//           <ul>
//             <li>CSS</li>
//             <li>HTML5</li>
//           </ul>
//         ),
//       },
//     ],
//     link: "https://pawfectly-pampered.netlify.app/",
//     githubRepo: "https://github.com/ellenevdm/pawfectlypampered",
//     imageResp: "pawResp",
//     imageMock: "pawMock",
//     responsive: true,
//     authenticationReq: false,
//   },
//   {
//     id: "proj2",
//     key: "2",
//     name: "Jammming",
//     sections: [
//       {
//         id: "jamsec1",
//         key: "1",
//         title: "Description",
//         content: (
//           <p>
//             I successfully built a React web application called Jammming. The
//             application leverages the Spotify API to offer users the ability to
//             search the Spotify library, create custom playlists, and save these
//             playlists directly to their Spotify account. This project involved
//             developing various React components, managing state, and handling
//             API requests.
//           </p>
//         ),
//       },
//       {
//         id: "jamsec2",
//         key: "2",
//         title: "Features",
//         content: (
//           <ul>
//             <li>
//               <strong>Spotify Library Search:</strong> Users can search for
//               songs, artists, or albums using the Spotify API.
//             </li>
//             <li>
//               <strong>Custom Playlist Creation: </strong> Users can add their
//               selected songs to a custom playlist.
//             </li>
//             <li>
//               <strong>Playlist Management:</strong> Users can name their
//               playlists and remove songs from them.
//             </li>
//             <li>
//               <strong>Spotify Integration:</strong> Users can save their custom
//               playlists to their Spotify account with a single click.
//             </li>
//             <li>
//               <strong>Drag and Drop:</strong>Users can easily rearrange songs
//               within their custom playlist using a drag-and-drop interface.
//             </li>
//           </ul>
//         ),
//       },
//       {
//         id: "jamsec3",
//         key: "3",
//         title: "Technologies",
//         content: (
//           <ul>
//             <li>CSS</li>
//             <li>REACT</li>
//             <li>Spotify API</li>
//           </ul>
//         ),
//       },
//     ],
//     link: "https://evdmjammmingapp.netlify.app/",
//     githubRepo: "https://github.com/ellenevdm/jammmingProject",
//     imageMock: "jamMock",
//     imageResp: "jamMock",
//     caption: "https://previewed.app/template/2AF7779A",
//     responsive: false,
//     authenticationReq: true,
//     errorMessage:
//       "The preview cannot be displayed due to Spotify’s API authentication requirements. Please visit the live site to log in to Spotify and access the content.",
//   },
//   {
//     id: "proj3",
//     key: "3",
//     name: "Readit-Hub",
//     sections: [
//       {
//         id: "readsec1",
//         key: "1",
//         title: "Description",
//         content: (
//           <p>
//             ReaditHub is a platform where users can explore Reddit content in a
//             streamlined and user-friendly interface. Leveraging React and Redux,
//             the application seamlessly integrates with the Reddit API to fetch
//             and display posts and comments.
//           </p>
//         ),
//       },
//       {
//         id: "readsec2",
//         key: "2",
//         title: "Features",
//         content: (
//           <ul>
//             <li>
//               <strong>Reddit API Integration:</strong>ReaditHub fetches data
//               from the Reddit API, enabling users to access a wide range of
//               posts and comments.
//             </li>
//             <li>
//               <strong>Post Viewing:</strong> Users can view posts along with
//               their associated comments, providing a comprehensive Reddit
//               browsing experience.
//             </li>
//             <li>
//               <strong>Search Functionality:</strong> The application offers a
//               search feature, allowing users to search for specific posts or
//               topics within Reddit.
//             </li>
//             <li>
//               <strong>Responsive Design:</strong> ReaditHub is designed to be
//               responsive, ensuring a smooth browsing experience across devices.
//             </li>
//           </ul>
//         ),
//       },
//       {
//         id: "readsec3",
//         key: "3",
//         title: "Technologies",
//         content: (
//           <ul>
//             <li>BOOTSTRAP</li>
//             <li>REACT</li>
//             <li>Reddit API (Snoowrap)</li>
//             <li>REDUX</li>
//           </ul>
//         ),
//       },
//     ],
//     link: "https://readit-hub.netlify.app/",
//     githubRepo: "https://github.com/ellenevdm/readit-hub",
//     imageMock: "readMock",
//     imageResp: "readResp",
//     responsive: true,
//     authenticationReq: false,
//   },
// ];

// import TestAccordion from "../components-new/UI/TestAccordion";
// export default function TestingPage() {
//   return (
//     <div className="page">
//       {projects.map((p) => {
//         return <TestAccordion items={p.sections} key={p.key} />;
//       })}
//     </div>
//   );
// }
