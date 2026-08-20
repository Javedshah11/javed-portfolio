import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";

const commands = [
  ["Go to Projects", "#projects"],
  ["Go to Skills", "#skills"],
  ["View Credentials", "#credentials"],
  ["Open GitHub", profile.github],
  ["Open LinkedIn", profile.linkedin],
  ["Download Resume", "/Javed-Shah-CV.txt"],
  ["Contact", "#contact"],
];

export default function CommandPalette({ open, onClose }) {
  const dialog = useRef(null);
  const links = useRef([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (open) dialog.current?.focus();
  }, [open]);
  if (!open) return null;

  const keys = (event) => {
    if (event.key === "Escape") onClose();
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((value) => (value + 1) % commands.length);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((value) => (value - 1 + commands.length) % commands.length);
    }
    if (event.key === "Enter") {
      event.preventDefault();
      links.current[active]?.click();
    }
  };

  return (
    <div className="palette-backdrop" onMouseDown={onClose}>
      <div
        ref={dialog}
        role="dialog"
        aria-modal="true"
        aria-label="Portfolio commands"
        tabIndex="-1"
        className="palette"
        onMouseDown={(event) => event.stopPropagation()}
        onKeyDown={keys}
      >
        <div className="palette-head">
          <span>Navigate portfolio</span>
          <kbd>↑ ↓ · Enter · Esc</kbd>
        </div>
        {commands.map(([label, href], index) => (
          <a
            ref={(node) => {
              links.current[index] = node;
            }}
            className={active === index ? "selected" : ""}
            key={label}
            href={href}
            onMouseEnter={() => setActive(index)}
            onClick={onClose}
            target={href.startsWith("http") ? "_blank" : undefined}
            download={label === "Download Resume" || undefined}
            rel="noreferrer"
          >
            <span>{label}</span>
            <span>{label === "Download Resume" ? "↓" : "↗"}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
