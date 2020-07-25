import Head from 'next/head'
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import About from '../components/about/about';
import Work from '../components/work-experience/work-experience'
import Projects from '../components/projects/projects'
import SplitView from '../components/split-view/split-view';

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
           <p> 
              <a href="https://www.toomicard.com/" target="_blank">Toomi Project</a>
            </p>
            <SplitView
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
                </div>}
            />
          </Projects>
        </section>
        <section className="main-content__wrapper">
          <Projects title="Open Source Projects" />
        </section>
        </div>
        <div className="right-side content-pad">right</div>
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  )
}
