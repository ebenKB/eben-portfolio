import Head from 'next/head'
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import About from '../components/about/about';
import Work from '../components/work-experience/work-experience'
import Projects from '../components/projects/projects'
import SplitView from '../components/split-view/split-view';
import ProgrammingStack from '../components/programming-stack/programming-stack';
import Divider from '../components/divider/divider';
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur nulla asperiores obcaecati, 
                    assumenda reiciendis non veritatis ipsum quibusdam rerum ea minus voluptate minima labore aut dolor cum 
                    deleni       
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur nulla asperiores obcaecati, 
                    assumenda reiciendis non veritatis ipsum quibusdam rerum ea minus voluptate minima labore aut dolor cum 
                    deleniti aperiam?
                  </p>
                  <a href="/">View on Github</a>
                </div>}
            />
            <SplitView
              title={<a href="https://www.toomicard.com/" target="_blank" className="custom-link">Apotica</a>}
              left={
                <p>
                  <a href="https://www.toomicard.com/" target="_blank">
                    <img src="/images/toomi.png" alt="image"className="full-width" />
                  </a>
                </p>}
              right={
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur nulla asperiores obcaecati, 
                  assumenda reiciendis non veritatis ipsum quibusdam rerum ea minus voluptate minima labore aut dolor cum 
                  deleni       
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur nulla asperiores obcaecati, 
                  assumenda reiciendis non veritatis ipsum quibusdam rerum ea minus voluptate minima labore aut dolor cum 
                  deleniti aperiam?
                </p>
                <a href="/">View on Github</a>
              </div>}
            />
            <SplitView
              title={<a href="https://www.toomicard.com/" target="_blank" className="custom-link">Hub KB.S Co. Ltd.</a>}
              left={
                <p>
                  <a href="https://www.toomicard.com/" target="_blank">
                    <img src="/images/toomi.png" alt="image"className="full-width" />
                  </a>
                </p>}
              right={
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur nulla asperiores obcaecati, 
                  assumenda reiciendis non veritatis ipsum quibusdam rerum ea minus voluptate minima labore aut dolor cum 
                  deleni       
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur nulla asperiores obcaecati, 
                  assumenda reiciendis non veritatis ipsum quibusdam rerum ea minus voluptate minima labore aut dolor cum 
                  deleniti aperiam?
                </p>
                <a href="/">View on Github</a>
              </div>}
            />
          </Projects>
        </section>
        <section className="main-content__wrapper">
          <Projects title="Open Source Projects">
            <SplitView
              title={<a href="https://www.toomicard.com/" target="_blank">RGB Colour Guessing Game</a>}
              left={
                <p>
                  <a href="https://www.toomicard.com/" target="_blank">
                    <img src="/images/toomi.png" alt="image"className="full-width" />
                  </a>
                </p>}
              right={
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur nulla asperiores obcaecati, 
                  assumenda reiciendis non veritatis ipsum quibusdam rerum ea minus voluptate minima labore aut dolor cum 
                  deleni       
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aspernatur nulla asperiores obcaecati, 
                  assumenda reiciendis non veritatis ipsum quibusdam rerum ea minus voluptate minima labore aut dolor cum 
                  deleniti aperiam?
                </p>
                <a href="/">View on Github</a>
              </div>}
            />
          </Projects>
          <section className="github-link">
            <a href="" className="active button">More Projects on Github</a>
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
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  )
}
