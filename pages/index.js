import Head from 'next/head'
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import About from '../components/about/about';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ebenezer Boafo Adjei</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;900&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main  className="container main-content">
        <div>
        <section className="main-content__wrapper">
          <About />
        </section>
        <section className="main-content__wrapper">
          <About />
        </section>
        <section className="main-content__wrapper">
          <About />
        </section>
        </div>
        <div>right</div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
