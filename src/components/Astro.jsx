function Astro({ astro }) {
  return (
    <div className="astro-card sen">
      <div className="sunrise card">
        <div className="astro-info">
          <span>Sunrise</span>
          <span className="astro-time">{astro.sunrise}</span>
        </div>

        <div className="astro-img-container">
          <img src="/img/sunrise.png" alt="sunrise" className="astro-icon" />
        </div>
      </div>
      <div className="sunset card">
        <div className="astro-info">
          <span>Sunset</span>
          <span className="astro-time">{astro.sunset}</span>
        </div>
        <div className="astro-img-container">
          <img src="/img/sunset.png" alt="sunset" className="astro-icon" />
        </div>
      </div>
    </div>
  );
}

export default Astro;
