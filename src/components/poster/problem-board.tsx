"use client";

import { Fragment, useId, useRef, useState, type KeyboardEvent } from "react";
import { Drop } from "@/components/poster/ornaments";
import type { Situation } from "@/lib/site";

type ProblemBoardProps = {
  situations: Situation[];
  phone: { display: string; href: string };
};

/**
 * Wood-type words as tabs. The chosen problem takes the solid blue pass and
 * its panel is pressed onto the sheet with one short stamp. Every panel is in
 * the server HTML; inactive ones are hidden.
 */
export function ProblemBoard({ situations, phone }: ProblemBoardProps) {
  const [activeId, setActiveId] = useState(situations[0].id);
  const [presses, setPresses] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();

  function select(index: number, moveFocus: boolean) {
    const next = situations[index];
    if (next.id !== activeId) {
      setActiveId(next.id);
      setPresses((count) => count + 1);
    }
    if (moveFocus) {
      tabs.current[index]?.focus();
    }
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = situations.length - 1;
    let next: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = index === last ? 0 : index + 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = index === 0 ? last : index - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;

    if (next !== null) {
      event.preventDefault();
      select(next, true);
    }
  }

  return (
    <div>
      <div role="tablist" aria-label="What's playing up?" className="tabs">
        {situations.map((situation, index) => {
          const selected = situation.id === activeId;
          return (
            <Fragment key={situation.id}>
              {index > 0 ? <Drop /> : null}
              <button
                ref={(element) => {
                  tabs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`${id}-tab-${situation.id}`}
                aria-selected={selected}
                aria-controls={`${id}-panel-${situation.id}`}
                tabIndex={selected ? 0 : -1}
                className="tab"
                onClick={() => select(index, false)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                {situation.tab}
              </button>
            </Fragment>
          );
        })}
      </div>

      {situations.map((situation) => {
        const active = situation.id === activeId;
        return (
          <div
            key={situation.id}
            role="tabpanel"
            id={`${id}-panel-${situation.id}`}
            aria-labelledby={`${id}-tab-${situation.id}`}
            hidden={!active}
            tabIndex={0}
            className="panel"
          >
            <div key={active ? presses : undefined} className={active && presses > 0 ? "stamp" : undefined}>
              <h3 className="panel__title">{situation.title}</h3>
              <div className="panel__cols">
                <div>
                  <span className={`panel__label${situation.firstLabel === "Right now" ? " panel__label--now" : ""}`}>
                    {situation.firstLabel}
                  </span>
                  <p className="panel__text">{situation.first}</p>
                </div>
                <div>
                  <span className="panel__label">What we do</span>
                  <p className="panel__text">{situation.then}</p>
                  <a className="panel__call" href={phone.href}>
                    Call {phone.display}
                  </a>
                </div>
              </div>
              {situation.note ? (
                <p className="panel__note">
                  <Drop />
                  <span>
                    {situation.note.text}{" "}
                    <a href={situation.note.source.href} target="_blank" rel="noopener noreferrer">
                      Source: {situation.note.source.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </span>
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
