import "./StatCard.css";

function StatCard({ icon, count, title, subtitle }) {
  return (
    <div className="stat-card">

      <div className="card-icon">
        {icon}
      </div>

      <h2>{count}</h2>

      <h4>{title}</h4>

      <p>{subtitle}</p>

    </div>
  );
}

export default StatCard;