const quests = [
  { label: "War Never Changes", done: true },
  { label: "Out Of Time", done: true },
  { label: "Jewel Of The Commonwealth", done: true },
  { label: "Unlikely Valentine", done: false },
];

const meters = [
  { label: "Quests", value: 68, tone: "quests" },
  { label: "Collectables", value: 42, tone: "collectables" },
  { label: "Locations", value: 27, tone: "locations" },
  { label: "Miscellaneous", value: 15, tone: "misc" },
];

const collections = [
  { label: "Quests", on: true },
  { label: "Collectables", on: false },
  { label: "Locations", on: false },
  { label: "Miscellaneous", on: true },
];

const dlc = [
  { label: "The Pitt", on: true },
  { label: "Operation: Anchorage", on: false },
];

function StatusBar() {
  return (
    <div className="status">
      <span className="status-time">9:41</span>
      <span className="island" />
      <span className="status-icons">
        <svg viewBox="0 0 17 12" className="sig">
          <rect x="0" y="7" width="3" height="5" rx="0.6" />
          <rect x="4.5" y="5" width="3" height="7" rx="0.6" />
          <rect x="9" y="2.5" width="3" height="9.5" rx="0.6" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.6" />
        </svg>
        <svg viewBox="0 0 16 12" className="wifi">
          <path d="M1 4.2C3.6 1.8 6.6.8 8 .8s4.4 1 7 3.4" />
          <path d="M3.2 6.5c1.6-1.5 3.2-2.1 4.8-2.1s3.2.6 4.8 2.1" />
          <path d="M5.5 8.7c.8-.7 1.6-1 2.5-1s1.7.3 2.5 1" />
          <circle cx="8" cy="11" r="0.9" fill="currentColor" stroke="none" />
        </svg>
        <svg viewBox="0 0 25 12" className="bat">
          <rect x="0.6" y="0.6" width="21" height="10.8" rx="2.2" />
          <rect x="2.2" y="2.2" width="15.2" height="7.6" rx="1" fill="currentColor" stroke="none" />
          <path d="M23 4.2v3.6c.8-.3 1.3-1 1.3-1.8s-.5-1.5-1.3-1.8z" fill="currentColor" stroke="none" />
        </svg>
      </span>
    </div>
  );
}

function TabBar({ active }) {
  const icons = [
    <svg key="track" viewBox="0 0 24 24">
      <path d="M8 7h11M8 12h11M8 17h11" />
      <circle cx="4.5" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="4.5" cy="17" r="1" fill="currentColor" stroke="none" />
    </svg>,
    <svg key="tune" viewBox="0 0 24 24">
      <path d="M4 8h16M4 16h16" />
      <circle cx="9" cy="8" r="2.1" fill="#0c0a12" />
      <circle cx="15" cy="16" r="2.1" fill="#0c0a12" />
    </svg>,
    <svg key="trophy" viewBox="0 0 24 24">
      <path d="M7 4h10v2.2a5 5 0 0 1-2.2 4.1L12 12l-2.8-1.7A5 5 0 0 1 7 6.2V4z" />
      <path d="M9 20h6M10 16.5h4" />
      <path d="M8 4H5.5A2.5 2.5 0 0 0 7 8.2M16 4h2.5A2.5 2.5 0 0 1 17 8.2" />
    </svg>,
    <svg key="you" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5.5 19.2c1.2-3 3.5-4.5 6.5-4.5s5.3 1.5 6.5 4.5" />
    </svg>,
  ];

  return (
    <div className="tabbar">
      {icons.map((icon, index) => (
        <span key={index} className={index === active ? "tab active" : "tab"}>
          {icon}
        </span>
      ))}
      <span className="home-indicator" />
    </div>
  );
}

function TrackPhone() {
  return (
    <article className="phone phone-track" aria-label="In-game progress tracking for Fallout 4">
      <div className="phone-screen">
        <StatusBar />
        <div className="screen-head">
          <div>
            <p className="eyebrow">In-game progress</p>
            <h3>Fallout 4</h3>
          </div>
          <span className="count-pill">3/272</span>
        </div>

        <div className="meters" aria-label="Progress by category">
          {meters.map((meter) => (
            <div className="meter" key={meter.label}>
              <span className="meter-name">
                <i className={`tone tone-${meter.tone}`} />
                {meter.label}
              </span>
              <span className="meter-bar">
                <span className={`tone tone-${meter.tone}`} style={{ width: `${meter.value}%` }} />
              </span>
              <em>{meter.value}%</em>
            </div>
          ))}
        </div>

        <div className="section-head">
          <span>Main Quests</span>
          <span>3/11</span>
        </div>
        <div className="section-sub">
          <span>Act I</span>
          <span>3/6</span>
        </div>
        <ul className="quests">
          {quests.map((quest) => (
            <li key={quest.label} className={quest.done ? "done" : "open"}>
              <span>{quest.label}</span>
              <span className={quest.done ? "check done" : "check"}>
                {quest.done ? (
                  <svg viewBox="0 0 16 16">
                    <path d="M3.8 8.2 6.6 11 12.2 5" />
                  </svg>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
        <TabBar active={0} />
      </div>
    </article>
  );
}

function GoalPhone() {
  return (
    <article className="phone phone-goal" aria-label="Customizable tracking and Steam achievements">
      <div className="phone-screen">
        <StatusBar />
        <div className="screen-head">
          <div>
            <p className="eyebrow">Your goal</p>
            <h3>What counts</h3>
          </div>
        </div>
        <div className="game-select">
          <span>Fallout 3</span>
          <svg viewBox="0 0 12 12">
            <path d="M4.5 2.5 8 6 4.5 9.5" />
          </svg>
        </div>

        <div className="toggle-card">
          {collections.map((item) => (
            <div className="toggle-row" key={item.label}>
              <span>{item.label}</span>
              <span className={item.on ? "switch on" : "switch"} />
            </div>
          ))}
          <p className="toggle-label">Enable or disable DLC</p>
          {dlc.map((item) => (
            <div className="toggle-row" key={item.label}>
              <span>{item.label}</span>
              <span className={item.on ? "switch on" : "switch"} />
            </div>
          ))}
        </div>

        <div className="steam-card">
          <div>
            <p>Steam Achievements</p>
            <strong>Link Steam account</strong>
          </div>
          <svg viewBox="0 0 12 12">
            <path d="M4.5 2.5 8 6 4.5 9.5" />
          </svg>
        </div>
        <TabBar active={1} />
      </div>
    </article>
  );
}

export function Phones({ compact = false }) {
  return (
    <div className={compact ? "phone-pair compact" : "phone-pair"}>
      <div className="phone-glow" />
      <div className="phone-slot back">
        <GoalPhone />
      </div>
      <div className="phone-slot front">
        <TrackPhone />
      </div>
    </div>
  );
}
