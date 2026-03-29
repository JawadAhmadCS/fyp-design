import { Sparkles } from "lucide-react";
import { RadialMetricCard } from "../components/cards/RadialMetricCard";
import { SelectField } from "../components/forms/SelectField";
import { TextField } from "../components/forms/TextField";
import { DashboardTopBar } from "../components/layout/DashboardTopBar";
import { AssistantListSidebar } from "../components/nav/AssistantListSidebar";
import { ConfigRail } from "../components/nav/ConfigRail";
import { PrimarySidebar } from "../components/nav/PrimarySidebar";

type AssistantMode = "model" | "voice" | "transcriber";

interface AssistantConfigPageProps {
  mode: AssistantMode;
}

const modeCopy: Record<
  AssistantMode,
  {
    title: string;
    description: string;
    leftLabel: string;
    leftValue: string;
    rightLabel: string;
    rightValue: string;
    fullLabel?: string;
    fullValue?: string;
    systemTitle?: string;
    systemValue?: string;
  }
> = {
  model: {
    title: "Model",
    description: "Configure the behaviour of Assistant",
    leftLabel: "Provider",
    leftValue: "Open AI",
    rightLabel: "Model",
    rightValue: "GPT 4o Cluster",
    fullLabel: "First Message Mode",
    fullValue: "Assistant Speaks First",
    systemTitle: "System Prompt",
    systemValue: "This is a blank template with minimal defaults, you can change the model, temperature, and messages.",
  },
  voice: {
    title: "Voice Configuration",
    description: "Select a voice from the list, sync your voice library if it is missing.",
    leftLabel: "Provider",
    leftValue: "Ovixe",
    rightLabel: "Voice",
    rightValue: "Elliot",
  },
  transcriber: {
    title: "Transcriber",
    description: "This section allows you to configure the transcription setting for the assistant.",
    leftLabel: "Provider",
    leftValue: "Deepgram",
    rightLabel: "Language",
    rightValue: "English",
    fullLabel: "Model",
    fullValue: "Nova 3",
  },
};

export function AssistantConfigPage({ mode }: AssistantConfigPageProps) {
  const copy = modeCopy[mode];

  return (
    <div className="dark-page">
      <DashboardTopBar />

      <div className="assistant-layout">
        <PrimarySidebar active="assistants" compact />
        <AssistantListSidebar />
        <ConfigRail active={mode} />

        <main className="assistant-main">
          <section className="assistant-header">
            <div>
              <strong>Ovixe</strong>
              <span>e845f7b3-80ca-4db5-bb6c-ba</span>
            </div>
            <div className="assistant-pills">
              <button type="button">Integration</button>
              <button type="button">Test</button>
              <button type="button">Chat</button>
              <button type="button">Talk to Assistant</button>
            </div>
            <button type="button" className="publish-btn">
              Publish
            </button>
          </section>

          <section className="radial-grid">
            <RadialMetricCard title="Cost" value="$0.15" unit="Min" />
            <RadialMetricCard title="Latency" value="1050" unit="ms" />
          </section>

          <section className="config-panel">
            <header>
              <div>
                <h2>{copy.title}</h2>
                <p>{copy.description}</p>
              </div>
            </header>

            <div className="config-fields two-col">
              <SelectField label={copy.leftLabel} value={copy.leftValue} />
              <SelectField label={copy.rightLabel} value={copy.rightValue} />
            </div>

            {copy.fullLabel && copy.fullValue && (
              <div className="config-fields single-col">
                <SelectField label={copy.fullLabel} value={copy.fullValue} wide />
              </div>
            )}

            {copy.systemTitle && copy.systemValue && (
              <div className="config-fields single-col">
                <div className="system-heading">
                  <h3>{copy.systemTitle}</h3>
                  <button type="button" className="optimize-btn">
                    <Sparkles size={14} />
                    Optimize
                  </button>
                </div>
                <TextField label="" value={copy.systemValue} multiline />
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
