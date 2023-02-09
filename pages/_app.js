import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
  <div className='w-full'>
    <div className='px-10 sm:px-11 md:px-12 py-5 sm:py-6 md:py-0 max-w-3xl mx-auto w-screen'>
      <Component {...pageProps}/> 
    </div>
  </div>
  )
}

export default MyApp;
