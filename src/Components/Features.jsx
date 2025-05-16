import "./StyleCss/Features.css"
function Features(){
    return(
        <>
          <div className="feature-container">
      <h2>Our Features</h2>
      <div className="feature-items">
        <div className="feature">
          <h3>Real-Time Weather Updates</h3>
          <p>
            Get up-to-the-minute weather details for your location. Accurate and
            reliable!
          </p>
        </div>
        <div className="feature">
          <h3>7-Day Forecast</h3>
          <p>Plan your week with a comprehensive 7-day weather outlook.</p>
        </div>
        <div className="feature">
          <h3>Weather Alerts</h3>
          <p>Receive alerts about severe weather conditions to stay safe.</p>
        </div>
        <div className="feature">
          <h3>Interactive Maps</h3>
          <p>View weather conditions on our intuitive and interactive maps.</p>
        </div>
      </div>
    </div>
        </>
    )
}
export default Features