import { AudioLines, BrainCircuit, Captions } from "lucide-react";
import { Button } from "../ui/Button";

type RailMode = "model" | "voice" | "transcriber";

interface ConfigRailProps {
  active: RailMode;
}

const railItems: { key: RailMode; label: string; icon: typeof BrainCircuit }[] = [
  { key: "model", label: "Model", icon: BrainCircuit },
  { key: "voice", label: "Voice", icon: AudioLines },
  { key: "transcriber", label: "Transcriber", icon: Captions },
];

export function ConfigRail({ active }: ConfigRailProps) {
  return (
    <aside className="config-rail" aria-label="Assistant sections">
      {railItems.map((item) => {
        const Icon = item.icon;
        const isActive = item.key === active;

        return (
          <Button
            key={item.key}
            variant="configRail"
            type="button"
            className={isActive ? "config-rail-item active" : "config-rail-item"}
            aria-current={isActive ? "step" : undefined}
          >
            <Icon size={18} />
            <span>{item.label}</span>
          </Button>
        );
      })}
    </aside>
  );
}