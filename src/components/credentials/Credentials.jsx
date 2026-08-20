import { useMemo, useState } from "react";
import Reveal from "../Reveal";
import {
  certifications,
  credentialCategories,
  credentialYears,
} from "../../data/certifications";

function CredentialPanel({ credential, index }) {
  const [expanded, setExpanded] = useState(false);
  const metadataAvailable =
    credential.issuer || credential.issued || credential.credentialUrl;
  return (
    <article
      className={`credential-panel ${credential.featured ? "featured" : ""}`}
    >
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((value) => !value)}
      >
        <span className="credential-count">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="credential-main">
          <small>{credential.category}</small>
          <strong>{credential.title}</strong>
          <span>
            {credential.issuer || "Issuer not provided"} ·{" "}
            {credential.issued || "Date not provided"}
          </span>
        </span>
        <span className="credential-toggle" aria-hidden="true">
          {expanded ? "−" : "+"}
        </span>
      </button>
      {expanded && (
        <div className="credential-details">
          <dl>
            <div>
              <dt>Issuer</dt>
              <dd>{credential.issuer || "Not provided"}</dd>
            </div>
            <div>
              <dt>Issued</dt>
              <dd>{credential.issued || "Not provided"}</dd>
            </div>
            <div>
              <dt>Credential</dt>
              <dd>
                {credential.credentialUrl ? (
                  <a
                    href={credential.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Credential ↗
                  </a>
                ) : (
                  "URL not provided"
                )}
              </dd>
            </div>
          </dl>
          {!metadataAvailable && (
            <p>
              This credential is listed from the supplied portfolio information;
              verification metadata has not yet been added.
            </p>
          )}
        </div>
      )}
    </article>
  );
}

export default function Credentials() {
  const [filter, setFilter] = useState("Featured");
  const visible = useMemo(
    () =>
      filter === "Featured"
        ? certifications.filter(({ featured }) => featured)
        : filter === "All"
          ? certifications
          : certifications.filter(({ category }) => category === filter),
    [filter],
  );
  return (
    <section id="credentials" className="section credentials">
      <div className="container">
        <Reveal className="credential-heading">
          <div>
              <p className="eyebrow">05 · Credentials</p>
            <h2>
              CERTIFIED KNOWLEDGE.
              <br />
              <span>CONTINUOUSLY LEARNING.</span>
            </h2>
            <p>
              Structured learning across full-stack development, software
              engineering, programming, data, systems, and design.
            </p>
          </div>
          <div className="credential-orbit" aria-hidden="true">
            <span>JS</span>
            {credentialYears.map((year, index) => (
              <i key={year} style={{ "--i": index }}>
                {year}
              </i>
            ))}
          </div>
        </Reveal>
        <Reveal className="credential-track" aria-label="Credential timeline">
          <span>2024</span>
          <i />
          <span>2025</span>
          <i />
          <span>2026</span>
        </Reveal>
        <div className="credential-filters" aria-label="Filter credentials">
          {["Featured", "All", ...credentialCategories].map((item) => (
            <button
              className={filter === item ? "active" : ""}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="credential-list" aria-live="polite">
          {visible.map((credential, index) => (
            <Reveal
              key={credential.title}
              delay={Math.min(index * 0.035, 0.25)}
            >
              <CredentialPanel credential={credential} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
