import { useState } from "react";
import "./AdminSettings.css";

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="admin-settings-root">
      {/* HEADER */}
      <div className="admin-settings-header">
        <h1>Settings</h1>
        <p>Control platform behavior, rules & preferences</p>
      </div>

      <div className="admin-settings-layout">

        {/* LEFT NAV */}
        <aside className="admin-settings-nav">
          {[
            "general",
            "listings",
            "users",
            "bookings",
            "notifications",
            "security",
          ].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </aside>

        {/* CONTENT */}
        <section className="admin-settings-content">

          {/* GENERAL */}
          {activeTab === "general" && (
            <SettingsCard
              title="General Settings"
              description="Basic platform configuration"
            >
              <Input label="Platform Name" placeholder="Staybnb" />
              <Input label="Support Email" placeholder="support@staybnb.com" />
              <Select
                label="Default Currency"
                options={["INR (₹)", "USD ($)", "EUR (€)"]}
              />
            </SettingsCard>
          )}

          {/* LISTINGS */}
          {activeTab === "listings" && (
            <SettingsCard
              title="Listing Rules"
              description="Control how listings behave"
            >
              <Toggle label="Auto-approve listings" />
              <Input label="Minimum price per night" type="number" />
              <Input label="Max listings per host" type="number" />
            </SettingsCard>
          )}

          {/* USERS */}
          {activeTab === "users" && (
            <SettingsCard
              title="User Settings"
              description="Signup & access control"
            >
              <Toggle label="Allow new user signup" defaultChecked />
              <Toggle label="Require email verification" />
              <Select label="Default role" options={["User", "Host"]} />
            </SettingsCard>
          )}

          {/* BOOKINGS */}
          {activeTab === "bookings" && (
            <SettingsCard
              title="Booking & Payments"
              description="Booking rules & commissions"
            >
              <Input label="Cancellation window (hours)" type="number" />
              <Input label="Platform commission (%)" type="number" />
              <Toggle label="Auto refund on cancellation" />
            </SettingsCard>
          )}

          {/* NOTIFICATIONS */}
          {activeTab === "notifications" && (
            <SettingsCard
              title="Notification Preferences"
              description="Email & system alerts"
            >
              <Toggle label="Notify admin on new listing" />
              <Toggle label="Email user on booking confirmation" defaultChecked />
              <Toggle label="Email host on booking" defaultChecked />
            </SettingsCard>
          )}

          {/* SECURITY */}
          {activeTab === "security" && (
            <SettingsCard
              title="Security"
              description="Sensitive system actions"
              danger
            >
              <Toggle label="Enable admin activity logs" defaultChecked />
              <button className="danger-btn">Force logout all users</button>
            </SettingsCard>
          )}

        </section>
      </div>
    </div>
  );
}

/* ---------- REUSABLE UI ---------- */

function SettingsCard({ title, description, children, danger }) {
  return (
    <div className={`settings-card ${danger ? "danger" : ""}`}>
      <div className="settings-card-header">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="settings-card-body">{children}</div>

      {!danger && (
        <div className="settings-card-footer">
          <button className="primary-btn">Save Changes</button>
        </div>
      )}
    </div>
  );
}

function Input({ label, type = "text", placeholder }) {
  return (
    <div className="settings-field">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div className="settings-field">
      <label>{label}</label>
      <select>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function Toggle({ label, defaultChecked }) {
  return (
    <div className="settings-toggle">
      <span>{label}</span>
      <input type="checkbox" defaultChecked={defaultChecked} />
    </div>
  );
}
