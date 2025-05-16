import"./StyleCss/Wlelcome.css"
import WeatherApi from "./WeatherApi"

function Welcome(){
    return(
        <>
            <div className="welcome">
            <h2>Welcome to    <img src="https://static.vecteezy.com/system/resources/thumbnails/020/716/723/small_2x/3d-minimal-weather-forecast-concept-partly-cloudy-in-the-morning-weather-icon-3d-illustration-png.png" className="wLogo" alt="Weather-Logo" /> SkyAlert </h2>
            <p>Discover the forecast like never before! <br />

Whether you're planning your day, prepping for a trip, or just curious about the skies above, we've got you covered. Here’s what you can explore: <br />

Accurate Local Weather: Get precise, real-time updates tailored to your location. <br />
Interactive Maps: Dive into radar and satellite views to track storms, rain, and more. <br />
Hourly and Weekly Forecasts: Stay ahead with detailed projections for every hour and day. <br />
Personalized Alerts: Receive notifications for severe weather, so you're always prepared. <br />
Fun Weather Insights: Learn quirky facts about today’s conditions or upcoming celestial events. <br />
At SkyAlert we’re more than just forecasts—we’re your weather companion!

Let’s explore the skies together..</p>
            <div className="highlights">
                <div className="highlight">
                    <h4>Global Coverage</h4>
                    <p>Get weather updates for any location worldwide.</p>
                </div>
                <div className="highlight">
                    <h4>Personalized Alerts</h4>
                    <p>Stay informed with severe weather notifications tailored to you.</p>
                </div>
                <div className="highlight">
                    <h4>Live Radar</h4>
                    <p>Track storms and rainfall in real-time with our live radar feature.</p>
                </div>
            </div>
        </div>

      
        
        </>
    )
}
export default Welcome