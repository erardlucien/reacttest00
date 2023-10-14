import './App.css';
import { useState } from 'react';


function App() {
  let [isOpened, invert] = useState(false);
  let [mainNavClassName, classToggle] = useState('main_nav closed');

  function reactToClick() {
    invert(isOpened = !isOpened);
    if(isOpened) {
      classToggle(mainNavClassName = 'main_nav');
    } else {
      setTimeout( () => {
        classToggle(mainNavClassName = 'main_nav closed');
      }, 250);
    }
  }
  
  return (
    <div className='App'>
      <div className='container'>
        <header className='main_header'>
          <button type='button' className={ isOpened ? 'hamburger_menu hamburger_menu_opened' : 'hamburger_menu' } onClick = { reactToClick }>
            <span className='menu_icon'>
              <span className='line-1'></span>
              <span className='line-2'></span>
              <span className='line-3'></span>
            </span>
          </button>
          <nav className = { mainNavClassName } >
            <ul className = { isOpened ? 'main_nav_list main_nav_list_opened' : 'main_nav_list' }>
              <li className='nav_item'><a href='#about_us' className='nav_link'>About Us</a></li>
              <li className='nav_item'><a href='#services' className='nav_link'>Services</a></li>
              <li className='nav_item'><a href='#contact' className='nav_link'>Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className='main_content'>
          <section>
            <h1 id='about_us'>
              About Us
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae expedita quasi alias nesciunt! Laudantium ratione suscipit reprehenderit sapiente eum labore minus nostrum, reiciendis harum ut, dolorem vitae dolores libero doloribus!
              Cum omnis soluta dolorem illum aperiam voluptatum debitis necessitatibus tenetur vero ea reprehenderit possimus tempora rerum amet deleniti earum natus temporibus labore saepe ad nobis esse, eum est? Iusto, fugit.
              Libero atque amet architecto nesciunt quisquam quam! Impedit corrupti dolorum corporis laborum nemo dolor et obcaecati. Numquam animi fugiat non excepturi dolorem exercitationem? Iusto rem optio mollitia fugit, delectus culpa.
              Tenetur minus optio quo delectus vitae explicabo non quod quae! Dolorum, nesciunt, necessitatibus veniam, est nostrum numquam dignissimos sunt fuga laborum possimus doloribus. Iste aliquid reprehenderit, quia voluptas hic qui!
              Beatae, quos facilis quis cum nam at ea vel tempora sequi porro facere molestias non in a consequatur repellat, aliquam doloremque nesciunt maxime accusantium, optio aliquid impedit velit voluptas. Ullam.
            </p>
          </section>
          <section>
            <h1 id='services'>Services</h1>
            <ul className='services_list'>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veniam non laudantium porro alias perspiciatis eos! Hic cumque voluptate, aliquid neque corrupti, voluptatibus velit delectus deleniti itaque pariatur officia soluta.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia fuga blanditiis voluptatibus incidunt illum pariatur mollitia harum id, officia aspernatur dicta beatae impedit corporis nihil temporibus porro vel sit ipsa.
              </li>
            </ul>
          </section>
        </main>
        <footer className='main_footer'>
          <address id='contact'>
            Autor: Lucien L. Erard<br/>
            E-Mail: lucera@dummy.org<br/>
          </address>
        </footer>
      </div>
    </div>
  );
}

export default App;
