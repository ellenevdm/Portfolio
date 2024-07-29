import { Icon } from "@iconify/react/dist/iconify.js";
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
          id: "sec1",
          key: "1",
          title: "Description",
          content: (
            <p>
              Merging my passion for pets with front-end development, I created
              a captivating online hub for 'Pawfectly Pampered,' uniting
              aesthetics with function.
            </p>
          ),
        },
        {
          id: "sec2",
          key: "2",
          title: "Features",
          content: (
            <ul>
              <li>
                <strong>Flexbox Layout:</strong> Used flexbox to design and
                build the layout for the company's homepage.
              </li>
              <li>
                <strong>Aesthetic Design:</strong> Created a visually appealing
                and user-friendly interface for 'Pawfectly Pampered.'
              </li>
              <li>
                <strong>Responsive Design</strong> Ensured the website is
                responsive across different devices for optimal user experience.
              </li>
              <li>
                <strong>Customization:</strong> Tailored the homepage design to
                suit the theme of a pet-centered business, showcasing creativity
                and attention to detail.
              </li>
            </ul>
          ),
        },
        {
          id: "sec3",
          key: "3",
          title: "Technologies",
          content: (
            <ul className="proj-tech">
              <li>
                <span className="tech-tooltip css">CSS</span>
                <span className="tech-icon css">
                  {" "}
                  <Icon icon="bxl:css3" />
                </span>
              </li>
              <li>
                {" "}
                <span className="tech-tooltip html">HTML</span>
                <span className="tech-icon html">
                  <Icon icon="bxl:html5" />
                </span>{" "}
              </li>
            </ul>
          ),
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
          id: "jamsec1",
          key: "1",
          title: "Description",
          content: (
            <p>
              Jammming is a React web application I developed that uses the
              Spotify API to offer users the ability to search the Spotify
              library, create custom playlists, and save these playlists
              directly to their Spotify account. This project involved
              developing various React components, managing state, and handling
              API requests.
            </p>
          ),
        },
        {
          id: "jamsec2",
          key: "2",
          title: "Features",
          content: (
            <ul>
              <li>
                <strong>Spotify Library Search:</strong> Users can search for
                songs, artists, or albums using the Spotify API.
              </li>

              <li>
                <strong>Playlist Management:</strong> Users can create custom
                playlists, name them, and add and remove songs from them.
              </li>
              <li>
                <strong>Spotify Integration:</strong> Users can save their
                custom playlists to their Spotify account with a single click.
              </li>
              <li>
                <strong>Drag and Drop:</strong> Users can add and remove songs
                to and from the playlist as well as easily rearrange songs
                within the custom playlist using a drag-and-drop interface.
              </li>
            </ul>
          ),
        },
        {
          id: "jamsec3",
          key: "3",
          title: "Technologies",
          content: (
            <ul className="proj-tech">
              <li>
                {" "}
                <span className="tech-tooltip css">CSS</span>
                <span className="tech-icon css">
                  {" "}
                  <Icon icon="bxl:css3" />
                </span>{" "}
              </li>
              <li>
                <span className="tech-tooltip react">React</span>
                <span className="tech-icon react">
                  <Icon icon="bxl:react" />
                </span>
              </li>
              <li>
                <span className="tech-tooltip spotify">Spotify API</span>
                <span className="tech-icon spotify">
                  <Icon icon="bxl:spotify" />
                </span>
              </li>
            </ul>
          ),
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
          id: "readsec1",
          key: "1",
          title: "Description",
          content: (
            <p>
              ReaditHub is a platform where users can explore Reddit content in
              a streamlined and user-friendly interface. Leveraging React and
              Redux, the application seamlessly integrates with the Reddit API
              to fetch and display posts and comments.
            </p>
          ),
        },
        {
          id: "readsec2",
          key: "2",
          title: "Features",
          content: (
            <ul>
              <li>
                <strong>Reddit API Integration:</strong>ReaditHub fetches data
                from the Reddit API, enabling users to access a wide range of
                posts and comments.
              </li>
              <li>
                <strong>Post Viewing:</strong> Users can view posts along with
                their associated comments, providing a comprehensive Reddit
                browsing experience.
              </li>
              <li>
                <strong>Search Functionality:</strong> The application offers a
                search feature, allowing users to search for specific posts or
                topics within Reddit.
              </li>
              <li>
                <strong>Responsive Design:</strong> ReaditHub is designed to be
                responsive, ensuring a smooth browsing experience across
                devices.
              </li>
            </ul>
          ),
        },
        {
          id: "readsec3",
          key: "3",
          title: "Technologies",
          content: (
            <ul className="proj-tech">
              <li>
                <span className="tech-tooltip bootstrap">Bootstrap</span>
                <span className="tech-icon bootstrap">
                  <Icon icon="bxl:bootstrap" />
                </span>
              </li>
              <li>
                <span className="tech-tooltip react">React</span>
                <span className="tech-icon react">
                  <Icon icon="bxl:react" />
                </span>
              </li>
              <li>
                <span className="tech-tooltip redux">Redux</span>
                <span className="tech-icon redux">
                  <Icon icon="bxl:redux" />
                </span>
              </li>
              <li>
                <span className="tech-tooltip reddit">Reddit API </span>
                <span className="tech-icon reddit">
                  {" "}
                  <Icon icon="bxl:reddit" />
                </span>
              </li>
            </ul>
          ),
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
