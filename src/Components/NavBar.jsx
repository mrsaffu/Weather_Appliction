import './StyleCss/NavBar.css'
function NavBar(){
    return(
        <>
         <header>
            <div className="logo">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/020/716/723/small_2x/3d-minimal-weather-forecast-concept-partly-cloudy-in-the-morning-weather-icon-3d-illustration-png.png" alt="Weather-Logo" />
                <h1>SkyAlert</h1>
            </div>
            <nav>
                <a href="#">Home</a>
                <a href="#features">Features</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
        </>
    )
}
export default NavBar