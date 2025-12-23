import "./AdminFilterBar.css";

export default function AdminFilterBar({
  searchPlaceholder = "Search...",
  showStatus = true,
  showType = false,
  showDate = false,

  showCrudActions = true,
  actionLabel = "Apply",
}) {
  return (
    <div className="admin-filter-wrapper">
         <h2>Apply Filters</h2>
      {/* ================= FILTER ROW ================= */}
      <div className="admin-filter-bar">
        {/* SEARCH */}
        <input
          type="text"
          placeholder={searchPlaceholder}
          className="admin-filter-input"
        />

        {/* STATUS */}
        {showStatus && (
          <select className="admin-filter-select">
            <option value="">Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="blocked">Blocked</option>
          </select>
        )}

        {/* TYPE */}
        {showType && (
          <select className="admin-filter-select">
            <option value="">Type</option>
            <option value="stay">Stay</option>
            <option value="rental">Rental</option>
            <option value="experience">Experience</option>
          </select>
        )}

        {/* DATE RANGE */}
        {showDate && (
          <div className="admin-filter-date-range">
            <input type="date" className="admin-filter-date" />
            <span>to</span>
            <input type="date" className="admin-filter-date" />
          </div>
        )}
      </div>

      {/* ================= ACTION ROW ================= */}
      <div className="admin-filter-actions-row">
        {/* FILTER ACTIONS */}
        <div className="admin-filter-actions-left">
          <button className="btn primary">{actionLabel}</button>
          <button className="btn secondary">Reset</button>
        </div>

        {/* CRUD / BULK ACTIONS */}
        {showCrudActions && (
          <div className="admin-filter-actions-right">
            <button className="btn outline">Update</button>
            <button className="btn warning">Block</button>
            <button className="btn danger">Delete</button>
          </div>
        )}
      </div>

    </div>
  );
}
