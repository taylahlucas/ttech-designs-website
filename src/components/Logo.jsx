export function Logo({ size = 34 }) {
  return (
    <span className="logo-mark" style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 32 32">
        <path fill="#fff" d="M7.6 7.4h16.8v3.5h-6.6V24h-3.6V10.9H7.6V7.4z" />
      </svg>
    </span>
  );
}
