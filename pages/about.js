import Link from 'next/link'

import Head from '../components/Head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default () => (
  <>
    <Head />
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-auto px-3 pt-16 pb-24">
        <div className="max-w-6xl flex mx-auto">
          <div className="flex-auto md:pt-16 md:pr-16">
            <h2 className="font-extrabold text-2xl sm:text-3xl leading-none mb-6">
              Om os
            </h2>
            <p className="max-w-xl text-navy-light text-lg sm:text-xl mb-2">
              Covid-19 krisen har ramt restaurant-scenen i København. Mange af
              dem er begyndt at tilbyde take-away som en respons. Vi har lavet
              den her side for at sprede ordet. Kontakt os på{' '}
              <a href="mailto:martin@pelion.app">martin@pelion.app</a>.
            </p>
          </div>
          <div className="flex-shrink-0 hidden md:block w-80 lg:w-96 h-80 lg:h-96 bg-sand" />
        </div>
      </main>
      <Footer />
    </div>
  </>
)
