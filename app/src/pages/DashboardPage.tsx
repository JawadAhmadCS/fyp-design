import { BarChart3, CircleDollarSign, Clock3, PhoneCall, TrendingUp } from "lucide-react";
import { SummaryCard } from "../components/cards/SummaryCard";
import { DashboardTopBar } from "../components/layout/DashboardTopBar";
import { PrimarySidebar } from "../components/nav/PrimarySidebar";
import { Button } from "../components/ui/Button";

export function DashboardPage() {
  return (
    <div className="dark-page">
      <DashboardTopBar />

      <div className="dark-layout">
        <PrimarySidebar active="dashboard" />

        <main className="dashboard-main">
          <section className="metrics-header">
            <h2>Metrics</h2>
            <div className="metrics-filters">
              <Button variant="dashboardFilter" className="dashboard-filter wide" type="button">
                All Assistants
              </Button>
              <Button variant="dashboardFilter" className="dashboard-filter" type="button">
                Last Month
              </Button>
            </div>
          </section>

          <section className="summary-grid">
            <SummaryCard Icon={PhoneCall} delta="0.01%" value="0" title="Number of Calls" />
            <SummaryCard Icon={Clock3} delta="0.00%" value="0:00" title="Average Duration" />
            <SummaryCard Icon={CircleDollarSign} delta="0.00%" value="0.0%" title="Total Cost" />
            <SummaryCard Icon={TrendingUp} delta="0.00%" value="0.0%" title="Average Cost" />
          </section>

          <section className="empty-panel">
            <h3>Call Success</h3>
            <div className="empty-state">
              <div className="empty-icon">
                <BarChart3 size={28} />
              </div>
              <strong>Oops....</strong>
              <p>You don&apos;t have any Calls yet</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}