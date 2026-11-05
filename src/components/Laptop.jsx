import { Logo } from "./Logo";

export function Laptop() {
  return (
    <div className="laptop-wrap" aria-hidden="true">
      <div className="laptop-glow" />
      <div className="laptop">
        <div className="laptop-lid">
          <div className="laptop-screen">
            <Logo size={78} />
          </div>
        </div>
        <div className="laptop-base">
          <div className="laptop-deck" />
          <div className="laptop-notch" />
        </div>
      </div>
    </div>
  );
}
