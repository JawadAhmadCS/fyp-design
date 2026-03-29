import { Bell, Mic, Settings } from "lucide-react";
import BrandWordmark from "../BrandWordmark";

export function DashboardTopBar() {
  return (
    <header className="dashboard-topbar">
      <BrandWordmark />

      <div className="topbar-search" aria-label="Ask Ovixe anything">
        <Mic size={18} color="var(--blue-accent)" />
        <span>Ask Ovixe.ai anything</span>
      </div>

      <div className="topbar-right">
        <button className="icon-bubble" type="button" aria-label="Notifications">
          <Bell size={16} />
        </button>
        <button className="icon-bubble" type="button" aria-label="Settings">
          <Settings size={16} />
        </button>
        <div className="profile-pill" role="button" tabIndex={0}>
          <span className="avatar-circle">NR</span>
          <div>
            <p>Naya Rachel</p>
            <span>rachel@gmail.com</span>
          </div>
        </div>
      </div>
    </header>
  );
}
