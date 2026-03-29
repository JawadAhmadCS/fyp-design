import { FilePlus2, Plus, Search } from "lucide-react";
import { Button } from "../ui/Button";

export function AssistantListSidebar() {
  return (
    <aside className="assistant-list-sidebar">
      <div className="assistant-list-actions">
        <Button variant="sidebarSoft" type="button" endIcon={<Plus size={18} />}>
          Create Assistant
        </Button>
        <Button variant="sidebarSoftIcon" type="button" aria-label="Upload template">
          <FilePlus2 size={18} />
        </Button>
      </div>

      <button type="button" className="assistant-search">
        <span>Deepgram.openai.vapi</span>
        <Search size={16} />
      </button>

      <div className="assistant-divider" />

      <div className="assistant-list-items">
        <button type="button" className="assistant-card active">
          <strong>Ovixe</strong>
          <span>Deepgram.openai.vapi</span>
        </button>
        <button type="button" className="assistant-card">
          <strong>Test</strong>
          <span>Deepgram.openai.vapi</span>
        </button>
      </div>
    </aside>
  );
}