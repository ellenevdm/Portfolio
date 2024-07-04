import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      id: "proj1",
      key: "1",
      name: "Pawfectly Pampered",
      sections: [
        {
          title: "Description",
          content:
            "Merging my passion for pets with front-end development, I created a captivating online hub for 'Pawfectly Pampered,' uniting aesthetics with function.",
        },
        {
          title: "Features",
          content: [
            "Flexbox Layout: Used flexbox to design and build the layout for the company's homepage.",
            "Aesthetic Design: Created a visually appealing and user-friendly interface for 'Pawfectly Pampered.'",
            "Responsive Design: Ensured the website is responsive across different devices for optimal user experience.",
            "Customization: Tailored the homepage design to suit the theme of a pet-centered business, showcasing creativity and attention to detail.",
          ],
        },
        {
          title: "Technologies",
          content: ["CSS", "HTML5"],
        },
      ],
      link: "https://pawfectly-pampered.netlify.app/",
      githubRepo: "https://github.com/ellenevdm/pawfectlypampered",
      imageResp: "pawResp",
      imageMock: "pawMock",
      responsive: true,
      authenticationReq: false,
    },
    {
      id: "proj2",
      key: "2",
      name: "Jammming",
      sections: [
        {
          title: "Description",
          content:
            "I successfully built a React web application called Jammming. The application leverages the Spotify API to offer users the ability to search the Spotify library, create custom playlists, and save these playlists directly to their Spotify account. This project involved developing various React components, managing state, and handling API requests.",
        },
        {
          title: "Features",
          content: [
            "Spotify Library Search: Users can search for songs, artists, or albums using the Spotify API.",
            "Custom Playlist Creation: Users can add their selected songs to a custom playlist.",
            "Playlist Management: Users can name their playlists and remove songs from them.",
            "Spotify Integration: Users can save their custom playlists to their Spotify account with a single click.",
            "Drag and Drop: Users can easily rearrange songs within their custom playlist using a drag-and-drop interface.",
          ],
        },
        {
          title: "Technologies",
          content: ["CSS", "REACT", "Spotify API"],
        },
      ],
      link: "https://evdmjammmingapp.netlify.app/",
      githubRepo: "https://github.com/ellenevdm/jammmingProject",
      imageMock: "jamMock",
      imageResp: "jamMock",
      caption: "https://previewed.app/template/2AF7779A",
      responsive: false,
      authenticationReq: true,
      errorMessage:
        "The preview cannot be displayed due to Spotify’s API authentication requirements. Please visit the live site to log in to Spotify and access the content.",
    },
    {
      id: "proj3",
      key: "3",
      name: "Readit-Hub",
      sections: [
        {
          title: "Description",
          content:
            "ReaditHub is a platform where users can explore Reddit content in a streamlined and user-friendly interface. Leveraging React and Redux, the application seamlessly integrates with the Reddit API to fetch and display posts and comments.",
        },
        {
          title: "Features",
          content: [
            "Reddit API Integration: ReaditHub fetches data from the Reddit API, enabling users to access a wide range of posts and comments.",
            "Post Viewing: Users can view posts along with their associated comments, providing a comprehensive Reddit browsing experience.",
            "Search Functionality: The application offers a search feature, allowing users to search for specific posts or topics within Reddit.",
            "Responsive Design: ReaditHub is designed to be responsive, ensuring a smooth browsing experience across devices.",
          ],
        },
        {
          title: "Technologies",
          content: ["BOOTSTRAP", "REACT", "REDUX", "Reddit API (Snoowrap)"],
        },
      ],
      link: "https://readit-hub.netlify.app/",
      githubRepo: "https://github.com/ellenevdm/readit-hub",
      imageMock: "readMock",
      imageResp: "readResp",
      responsive: true,
      authenticationReq: false,
    },
  ];

  const selectProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <ProjectContext.Provider
      value={{
        selectedProject,
        selectProject,
        projects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
