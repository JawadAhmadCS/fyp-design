import { BarChart3, PhoneCall, UsersRound } from "lucide-react";

type PrimarySidebarItem = "dashboard" | "assistants" | "phone";

interface PrimarySidebarProps {
  active: PrimarySidebarItem;
  compact?: boolean;
}

const items: { key: PrimarySidebarItem; label: string; icon: typeof BarChart3 }[] = [
  { key: "dashboard", label: "Dashboard", icon: BarChart3 },
  { key: "assistants", label: "Assistants", icon: UsersRound },
  { key: "phone", label: "Phone Numbers", icon: PhoneCall },
];

export function PrimarySidebar({ active, compact = false }: PrimarySidebarProps) {
  return (
    <aside className={compact ? "primary-sidebar compact" : "primary-sidebar"}>
      {!compact && (
        <div className="sidebar-welcome">
          <h1>Welcome, Naya</h1>
          <p>Here&apos;s your Agent overview</p>
        </div>
      )}

      <div className="sidebar-divider" />

      <nav className="sidebar-nav" aria-label="Primary">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.key;

          return (
            <button
              key={item.key}
              type="button"
              className={isActive ? "sidebar-item active" : "sidebar-item"}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon size={20} />
              {!compact && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
