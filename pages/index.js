import Head from 'next/head'
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import About from '../components/about/about';
import Work from '../components/work-experience/work-experience'
import Projects from '../components/projects/projects'
import SplitView from '../components/split-view/split-view';
import ProgrammingStack from '../components/programming-stack/programming-stack';
import Education from '../components/education/education';
import Contact from '../components/contact/contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ebenezer Boafo Adjei</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <main  className="container main-content">
        <div>
        <section className="main-content__wrapper">
          <About />
        </section>
        <section className="main-content__wrapper">
          <Work />
        </section>
        <section className="main-content__wrapper">
          <Projects title="Enterprise Projects" >
            <SplitView
            title={
              <a href="https://www.toomicard.com/" target="_blank" className="custom-link">Toomi Project</a>
            }
              left={
                <p>
                  <a href="https://www.toomicard.com/" target="_blank">
                    <img src="/images/toomi.png" alt="image"className="full-width" />
                  </a>
                </p>}
              right={
                <div>
                  <p>
                    This is the official website for Toomi card Limited.
                    The entire website uses svg icons to improve the site's performance and rendering.
                    I used photoshop to optimize images for web display.
                  </p>
                  <p>
                  <span className="semi-bold">Stack: </span>
                    HTML5, CSS3, JavaScript, Semantic ui, JQuery, Hexo Static Site Generator
                  </p>
                  <a href="/" className="small text">View on Github</a>
                </div>}
            />
            <SplitView
              title={<a href="https://www.apotica.net/" target="_blank" className="custom-link">Apotica</a>}
              left={
                <p>
                  <a href="https://www.apotica.net/" target="_blank">
                    <img src="/images/apotica.png" alt="image"className="full-width" />
                  </a>
                </p>}
              right={
              <div>
                <p>
                  This is the official website for Apotica Company Limited. 
                  I used modern web development techniques to make the site responsive on small devices.
                  I also used SEO techniques to increase the site's appearance on search engines.
                </p>
                <p>
                  <span className="semi-bold">Stack: </span>
                  HTML5, CSS3, JavaScript, Semantic ui, JQuery, Hexo Static Site Generator
                </p>
              </div>}
            />
            <SplitView
              title={<a href="http://www.hubkbs.com/" target="_blank" className="custom-link">Hub KB.S Co. Ltd.</a>}
              left={
                <p>
                  <a href="http://www.hubkbs.com/" target="_blank">
                    <img src="/images/hubkbs.png" alt="image"className="full-width" />
                  </a>
                </p>}
              right={
              <div>
                <p>
                  This is the official website for Hub KB.S Company Limited.
                </p>
                <p>
                  <span className="semi-bold">Stack: </span>
                  HTML5, CSS3, JavaScript, Semantic ui, JQuery, Hexo Static Site Generator
                </p>
                <a href="https://github.com/ebenKB/hubkbs" className="small text">View on Github</a>
              </div>}
            />
          </Projects>
        </section>
        <section className="main-content__wrapper">
          <Projects title="Open Source Projects">
            <SplitView
              title={<a href="https://www.rgbgame.hubkbs.com/" target="_blank">RGB Colour Guessing Game</a>}
              left={
                <p>
                  <a href="https://www.rgbgame.hubkbs.com/" target="_blank">
                    <img src="/images/rgb.png" alt="image"className="full-width" />
                  </a>
                </p>}
              right={
              <div>
                <p>
                  RGB colour guess game is a game that allows users to guess rgb colours and score points for a right guess.
                  It is a progressive web application; you can continue to play it even when your internet goes off. 
                </p>
                <p>
                  I started this as a hobby project and once I was done building it,
                  I decided to host it online for everyone to have access to it.
                </p>
                <p>
                  <span className="semi-bold">Stack: </span>
                  Reactjs, JavaScript, CSS3, HTML5
                </p>
                <a href="https://github.com/ebenKB/rgb-color-game" className="small text">View on Github</a>
              </div>}
            />
          </Projects>
          <section className="github-link">
            <a href="https://github.com/ebenKB" 
              className="active button" 
              target="_blank"
            >
              More Projects on Github
            </a>
          </section>
        </section>
        </div>
        <div className="aside">
          <div className="aside-content content-pad caption-wrapper">
            <ProgrammingStack />
            <Education />
            <Contact />
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
