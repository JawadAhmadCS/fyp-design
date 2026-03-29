import { ToggleRow } from "../components/forms/ToggleRow";
import { DashboardTopBar } from "../components/layout/DashboardTopBar";
import { PrimarySidebar } from "../components/nav/PrimarySidebar";

export function PhoneNumbersPage() {
  return (
    <div className="dark-page">
      <DashboardTopBar />

      <div className="dark-layout">
        <PrimarySidebar active="phone" />

        <main className="phone-main">
          <section className="phone-fields">
            <label>
              <span>Model</span>
              <div className="phone-input with-prefix">
                <div className="prefix-pill">US</div>
                <input defaultValue="+1423094821098" />
              </div>
            </label>

            <label>
              <span>Account SID</span>
              <input className="phone-input" defaultValue="Account SID" />
            </label>

            <label>
              <span>Auth Token</span>
              <input className="phone-input" defaultValue="Auth Token" />
            </label>

            <label>
              <span>Label for Mobile Number</span>
              <input className="phone-input" defaultValue="Label for Mobile Number" />
            </label>

            <div className="phone-toggle-wrap">
              <ToggleRow title="SMS Enable" description="Label for Mobile Number" checked />
            </div>
          </section>

          <div className="phone-actions">
            <button type="button" className="import-btn">
              Import
            </button>
            <button type="button" className="cancel-btn">
              Cancel
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
