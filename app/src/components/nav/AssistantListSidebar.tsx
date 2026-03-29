import { FilePlus2, Plus, Search } from "lucide-react";

export function AssistantListSidebar() {
  return (
    <aside className="assistant-list-sidebar">
      <div className="assistant-list-actions">
        <button type="button" className="light-action wide">
          <span>Create Assistant</span>
          <Plus size={18} />
        </button>
        <button type="button" className="light-action icon-only" aria-label="Upload template">
          <FilePlus2 size={18} />
        </button>
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
