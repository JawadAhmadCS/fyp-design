import { Bell, Mic, Settings } from "lucide-react";
import BrandWordmark from "../BrandWordmark";
import { Button } from "../ui/Button";

export function DashboardTopBar() {
  return (
    <header className="dashboard-topbar">
      <BrandWordmark />

      <div className="topbar-search" aria-label="Ask Ovixe anything">
        <Mic size={18} color="var(--blue-accent)" />
        <span>Ask Ovixe.ai anything</span>
      </div>

      <div className="topbar-right">
        <Button variant="iconBubble" type="button" aria-label="Notifications">
          <Bell size={16} />
        </Button>
        <Button variant="iconBubble" type="button" aria-label="Settings">
          <Settings size={16} />
        </Button>
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