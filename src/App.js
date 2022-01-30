import "./App.css";
import "./sass.scss";

function App() {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <a class="links" href="#user">
              <button class="signbutton" type="button">
                Sign in
              </button>
            </a>
          </li>
          <li>
            <a href="#grid">
              <img
                class="grid"
                src="https://cdn3.iconfinder.com/data/icons/navigation-and-settings/24/Material_icons-01-11-512.png"
                title="Google apps"
              />
            </a>
          </li>
          <li>
            <a href="#images">Images</a>
          </li>
          <li>
            <a href="#gmail">Gmail</a>
          </li>
        </ul>
      </header>
      <div class="logo">
        <img
          alt="Google"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        />
      </div>
      <div class="bar">
        <input class="searchbar" type="text" title="Search" />
        <a href="#">
          <img
            class="voice"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Google_mic.svg/716px-Google_mic.svg.png"
            title="Search by Voice"
          />
        </a>
      </div>
      <div class="buttons">
        <button class="button" type="button">
          Google Search
        </button>
        <button class="button" type="button">
          I'm Feeling Lucky
        </button>
      </div>
      <div class="footer">
        <a href="#">About</a>
        <a href="#">Advertising</a>
        <a href="#">Business</a>
        <a href="#">How</a>
        <a href="#">Search</a>
        <a href="#">works</a>
      </div>
    </div>
  );
}

export default App;
