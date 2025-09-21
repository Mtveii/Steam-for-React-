import './Comp.css';


export function App1 () {
   return (
    <div id ="app-container">
      <header className="header">
        <div className="header-left">
          <a href='/'className="logo">V STORE</a>
          <nav>
            <ul>
              <li><a href="#">Forum</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </nav>
          <div className="search-bar">
            <input type="text" placeholder="Search store" />
          </div>
        </div>
        <div className="header-right">
          <button className="Sign_in-button">Sign in</button>
          <button className="download-button">Download</button>
        </div>
      </header>

      <section className="hero-section">
        <img src= {require('./assets/apex-legends-banner.png')}  className="hero-banner" />
        <div className="hero-content">

          <div className="hero-screenshots">

          </div>

          <button className="learn-more-button">Learn More</button>
        </div>
      </section>

      <section className="section discover-section">
        <h2>Discover Something New</h2>
        <div className="game-grid">
          <div className="game-card">
            <img src={require('./assets/game3.png')}  className="game-image" />
            <h4 className="game-title">The End of the Sun</h4>
            <p className="current-price">UAH 300</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game8.png')}  className="game-image" />
            <h4 className="game-title">Apex Legends</h4>
            <p className="current-price">Free</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game4.png')}  className="game-image" />
            <h4 className="game-title">The Callisto Protocol</h4>
            <p className="current-price">UAH 999</p>
          </div>
          <div clas sName="game-card">
            <img src={require('./assets/game7.png')} className="game-image" />
            <h4 className="game-title">The Chant</h4>
            <p className="current-price">UAH 599</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game5.png')}  className="game-image" />
            <h4 className="game-title">Kingdom Come</h4>
            <p className="current-price">UAH 1850</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game6.png')}  className="game-image" />
            <h4 className="game-title">Final Fantasy IX</h4>
            <p className="current-price">UAH 699</p>
          </div>
        </div>
      </section>

      <section className="section fortnite-sections-container">
        <div className="fortnite-card">
          <img src={require('./assets/game9.png')}  className="fortnite-image" />
          <h3>Fortnite</h3>
          <p>Feudal Gotham’s Dark Night, Ninja Knight Batman, and the malicious wildcard Karuta Harley Quinn strike with a vengeance.</p>
          <button className="see-in-shop-button">See In Shop</button>
        </div>
        <div className="fortnite-card">
          <img src={require('./assets/game10.png')}  className="fortnite-image" />
          <h3>Fortnite</h3>
          <p>BANG! Take your shot with bounty hunters Spike Spiegel and Faye Valentine from COWBOY BEBOP.</p>
          <button className="see-in-shop-button">See In Shop</button>
        </div>
        <div className="fortnite-card">
          <img src={require('./assets/game11.png')}  className="fortnite-image" />
          <h3>Fortnite</h3>
          <p>My Hero Academia’s League of Villains emerges in Fortnite!</p>
          <button className="see-in-shop-button">See In Shop</button>
        </div>
      </section>

      <section className="section spotlight-section">
        <h2>Winter Sale Spotlight!</h2>
        <div className="game-grid">
          <div className="game-card">
            <img src={require('./assets/game3.png')}  className="game-image" />
            <span className="discount">-25%</span>
            <span className="original-price">UAH 400</span>
            <p className="current-price">UAH 300</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game12.png')}className="game-image" />
            <span className="discount">-30%</span>
            <span className="original-price">UAH 170</span>
            <p className="current-price">UAH 119</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game13.png')} className="game-image" />
            <span className="discount">-40%</span>
            <span className="original-price">UAH 799</span>
            <p className="current-price">UAH 479</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game14.png')} className="game-image" />
            <span className="discount">-40%</span>
            <span className="original-price">UAH 899</span>
            <p className="current-price">UAH 519</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game15.png')}  className="game-image" />
            <span className="discount">-40%</span>
            <span className="original-price">UAH 1199</span>
            <p className="current-price">UAH 719</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game16.png')} className="game-image" />
            <span className="discount">-40%</span>
            <span className="original-price">UAH 1499</span>
            <p className="current-price">UAH 899</p>
          </div>
        </div>
      </section>

      <section className="section fortnite-sections-container">
        <div className="fortnite-card">
          <img src={require('./assets/game17.png')} className="fortnite-image" />
          <h3>Teenage Mutant Ninja Turtles: Splintered Fate</h3>
          <p>UAH 515</p>

        </div>
        <div className="fortnite-card">
          <img src={require('./assets/game18.png')}  className="fortnite-image" />
          <h3>Lego: Horizon Adventures</h3>
          <p>UAH 600</p>

        </div>
        <div className="fortnite-card">
          <img src={require('./assets/game19.png')}  className="fortnite-image" />
          <h3>Disney Dreamlight Valley</h3>
          <p>UAH 230</p>
          
        </div>
      </section>  

      <section className="section spotlight-section">
        <h2>Winter Sale Spotlight!</h2>
        <div className="game-grid">
          <div className="game-card">
            <img src={require('./assets/game3.png')}  className="game-image" />
            <span className="discount">-25%</span>
            <span className="original-price">UAH 400</span>
            <p className="current-price">UAH 300</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game11.png')}className="game-image" />
            <span className="discount">-30%</span>
            <span className="original-price">UAH 170</span>
            <p className="current-price">UAH 119</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game7.png')} className="game-image" />
            <span className="discount">-40%</span>
            <span className="original-price">UAH 799</span>
            <p className="current-price">UAH 479</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game8.png')} className="game-image" />
            <span className="discount">-40%</span>
            <span className="original-price">UAH 899</span>
            <p className="current-price">UAH 519</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game10.png')}  className="game-image" />
            <span className="discount">-40%</span>
            <span className="original-price">UAH 1199</span>
            <p className="current-price">UAH 719</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game16.png')} className="game-image" />
            <span className="discount">-40%</span>
            <span className="original-price">UAH 1499</span>
            <p className="current-price">UAH 899</p>
          </div>
        </div>
      </section>

      <section className="section spotlight-section">
        <h2>Winter Sale Spotlight!</h2>
        <div className="game-grid">
          <div className="game-card">
            <img src={require('./assets/game9.png')}  className="game-image" />
            <span className="discount">-25%</span>
            <span className="original-price">UAH 400</span>
            <p className="current-price">UAH 300</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game6.png')}className="game-image" />
            <span className="discount">-30%</span>
            <span className="original-price">UAH 170</span>
            <p className="current-price">UAH 119</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game13.png')} className="game-image" />
            <span className="discount">-40%</span>
            <span className="original-price">UAH 799</span>
            <p className="current-price">UAH 479</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game19.png')} className="game-image" />
            <span className="discount">-40%</span>
            <span className="original-price">UAH 899</span>
            <p className="current-price">UAH 519</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game15.png')}  className="game-image" />
            <span className="discount">-40%</span>
            <span className="original-price">UAH 1199</span>
            <p className="current-price">UAH 719</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game14.png')} className="game-image" />
            <span className="discount">-40%</span>
            <span className="original-price">UAH 1499</span>
            <p className="current-price">UAH 899</p>
          </div>
        </div>
      </section>

      <section className="section spotlight-section">
        <h2>Winter Sale Spotlight!</h2>
        <div className="game-grid">
          <div className="game-card">
            <img src={require('./assets/game19.png')}  className="game-image" />
            <span className="discount">-25%</span>
            <span className="original-price">UAH 400</span>
            <p className="current-price">UAH 300</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game12.png')}className="game-image" />
            <span className="discount">-30%</span>
            <span className="original-price">UAH 170</span>
            <p className="current-price">UAH 119</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game5.png')} className="game-image" />
            <span className="discount">-40%</span>
            <span className="original-price">UAH 799</span>
            <p className="current-price">UAH 479</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game16.png')} className="game-image" />
            <span className="discount">-40%</span>
            <span className="original-price">UAH 899</span>
            <p className="current-price">UAH 519</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game4.png')}  className="game-image" />
            <span className="discount">-40%</span>
            <span className="original-price">UAH 1199</span>
            <p className="current-price">UAH 719</p>
          </div>
          <div className="game-card">
            <img src={require('./assets/game5.png')} className="game-image" />
            <span className="discount">-40%</span>
            <span className="original-price">UAH 1499</span>
            <p className="current-price">UAH 899</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App1;