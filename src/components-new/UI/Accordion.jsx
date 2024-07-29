import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import "./accordion.scss";

import { motion, AnimatePresence } from "framer-motion";

export default function TestAccordion({ items }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="accordion">
      {items.map((item) => (
        <AccordionItem
          key={item.key}
          i={item.key}
          item={item}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </div>
  );
}

const AccordionItem = ({ i, item, expanded, setExpanded }) => {
  const isOpen = i === expanded;

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: isOpen ? "#4f23fa" : "#96969684",
          color: isOpen ? "#fff" : "#000",
        }}
        onClick={() => setExpanded(isOpen ? null : i)}
        className={isOpen ? "accordion-header open" : "accordion-header"}
      >
        {" "}
        {item.title}
        <Icon icon="ic:round-expand-more" className="accordion-icon" />
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="accordion-content">{item.content}</div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
