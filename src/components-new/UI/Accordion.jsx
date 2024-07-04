import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function Accordion({
  sections,
  className = "",
  itemClassName = "",
  itemTitleClassName = "",
}) {
  const [activeSection, setActiveSection] = useState(null);
  const toggleSection = (sectionTitle) => {
    setActiveSection(activeSection === sectionTitle ? null : sectionTitle);
  };

  return (
    <div className={`accordion ${className}`}>
      {sections.map((section, index) => (
        <div className={`accordion-item ${itemClassName} `} key={index}>
          <div
            onClick={() => toggleSection(section.title)}
            className={`accordion-title ${itemTitleClassName} `}
          >
            {section.title}{" "}
            <span>
              <Icon
                icon={
                  activeSection === section.title
                    ? "ic:baseline-expand-less"
                    : "ic:baseline-expand-more"
                }
              />
            </span>
          </div>
          {activeSection === section.title && (
            <div className="accordion-content">
              {Array.isArray(section.content) ? (
                <ul>
                  {section.content.map((item, idx) => (
                    <li key={idx}>
                      <Icon icon={section.icon} className="item-icon" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                section.content
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
