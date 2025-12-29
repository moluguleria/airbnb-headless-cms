import "./AdminFilterBar.css";

export default function AdminFilterBar({
  filters,
  setFilters,
  showStatus = true,
  showType = false,
  showDate = false,
  onReset,
}) {
  return (
    <div className="admin-filter-wrapper">
      <h2>Apply Filters</h2>

      <div className="admin-filter-bar">
        {/* SEARCH */}
        <input
          type="text"
          className="admin-filter-input"
          placeholder="Search..."
          value={filters.search}
          onChange={(e) =>
            setFilters({ ...filters, search: e.target.value })
          }
        />

        {/* STATUS */}
        {showStatus && (
          <select
            className="admin-filter-select"
            value={filters.status}
            onChange={(e) =>
              setFilters({ ...filters, status: e.target.value })
            }
          >
            <option value="">Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="blocked">Blocked</option>
          </select>
        )}

        {/* TYPE */}
        {showType && (
          <select
            className="admin-filter-select"
            value={filters.type}
            onChange={(e) =>
              setFilters({ ...filters, type: e.target.value })
            }
          >
            <option value="">Type</option>
            <option value="stay">Stay</option>
            <option value="rental">Rental</option>
            <option value="experience">Experience</option>
          </select>
        )}

        {/* DATE */}
        {showDate && (
          <div className="admin-filter-date-range">
            <input
              type="date"
              className="admin-filter-date"
              value={filters.from}
              onChange={(e) =>
                setFilters({ ...filters, from: e.target.value })
              }
            />
            <span>to</span>
            <input
              type="date"
              className="admin-filter-date"
              value={filters.to}
              onChange={(e) =>
                setFilters({ ...filters, to: e.target.value })
              }
            />
          </div>
        )}
      </div>

      {/* RESET */}
      <div className="admin-filter-actions-row">
        <button className="btn secondary" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
