const goals = [
  { label: "Reach the main story", done: true },
  { label: "Complete all side quests", done: false },
  { label: "Unlock every achievement", done: false },
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

function TabBar() {
  return (
    <div className="tabbar">
      <span className="tab active">
        <svg viewBox="0 0 24 24">
          <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z" />
        </svg>
      </span>
      <span className="tab">
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="7.2" />
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2" />
        </svg>
      </span>
      <span className="tab">
        <svg viewBox="0 0 24 24">
          <path d="M7 4h10v2.2a5 5 0 0 1-2.2 4.1L12 12l-2.8-1.7A5 5 0 0 1 7 6.2V4z" />
          <path d="M9 20h6M10 16.5h4" />
          <path d="M8 4H5.5A2.5 2.5 0 0 0 7 8.2M16 4h2.5A2.5 2.5 0 0 1 17 8.2" />
        </svg>
      </span>
      <span className="tab">
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5.5 19.2c1.2-3 3.5-4.5 6.5-4.5s5.3 1.5 6.5 4.5" />
        </svg>
      </span>
      <span className="home-indicator" />
    </div>
  );
}

function Ring() {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const progress = 0.72;

  return (
    <div className="ring">
      <svg viewBox="0 0 110 110">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ddd6fe" />
            <stop offset="55%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <circle className="ring-track" cx="55" cy="55" r={radius} />
        <circle
          className="ring-value"
          cx="55"
          cy="55"
          r={radius}
          strokeDasharray={`${circumference * progress} ${circumference}`}
        />
      </svg>
      <div className="ring-label">
        <strong>72%</strong>
        <span>Complete</span>
      </div>
    </div>
  );
}

function GoalsPhone() {
  return (
    <article className="phone phone-goals" aria-label="Completionist goals screen">
      <div className="phone-screen">
        <StatusBar />
        <h3 className="app-name">Completionist</h3>
        <Ring />
        <div className="stats">
          <div className="stat">
            <span className="stat-icon">
              <svg viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="6.2" />
                <path d="M5 8.1 7.1 10.2 11 6.2" />
              </svg>
            </span>
            <span>
              <strong>247</strong>
              <em>Completed</em>
            </span>
          </div>
          <div className="stat">
            <span className="stat-icon star">
              <svg viewBox="0 0 16 16">
                <path d="M8 2.2 9.6 6l4.1.3-3.2 2.7.9 4-3.4-2.1L4.6 13l.9-4L2.3 6.3 6.4 6 8 2.2z" />
              </svg>
            </span>
            <span>
              <strong>18</strong>
              <em>In Progress</em>
            </span>
          </div>
        </div>
        <div className="goals-head">
          <span>Your Goals</span>
          <span className="sort">
            Sort
            <svg viewBox="0 0 12 12">
              <path d="M3 4.5 6 7.5 9 4.5" />
            </svg>
          </span>
        </div>
        <ul className="goals">
          {goals.map((goal) => (
            <li key={goal.label} className={goal.done ? "done" : undefined}>
              <span className="goal-box">{goal.done ? "✓" : ""}</span>
              {goal.label}
            </li>
          ))}
        </ul>
        <TabBar />
      </div>
    </article>
  );
}

function AchievementsPhone() {
  return (
    <article className="phone phone-awards" aria-label="Completionist achievements screen">
      <div className="phone-screen">
        <StatusBar />
        <h3 className="app-name">Achievements</h3>
        <div className="trophy-wrap">
          <div className="trophy">
            <svg viewBox="0 0 64 64">
              <path
                fill="url(#gold)"
                d="M18 10h28v6c0 8-5 14-10 16v4h6v5H22v-5h6v-4c-5-2-10-8-10-16v-6z"
              />
              <path
                fill="#f6d98a"
                d="M18 12h-6c0 8 3 12 8 14M46 12h6c0 8-3 12-8 14"
              />
              <path fill="#e8b84a" d="M26 41h12v4H26zM22 47h20v5H22z" />
              <defs>
                <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fff1c2" />
                  <stop offset="45%" stopColor="#f6c453" />
                  <stop offset="100%" stopColor="#d4922a" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <p className="award-title">
          You're a
          <br />
          Completionist!
        </p>
        <p className="award-copy">You're getting to unlock rare achievements.</p>
        <span className="view-all">View All</span>
        <TabBar />
      </div>
    </article>
  );
}

export function Phones({ compact = false }) {
  return (
    <div className={compact ? "phone-pair compact" : "phone-pair"}>
      <div className="phone-glow" />
      <div className="phone-slot back">
        <AchievementsPhone />
      </div>
      <div className="phone-slot front">
        <GoalsPhone />
      </div>
    </div>
  );
}
