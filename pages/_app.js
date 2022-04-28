// import React , {useEffect ,useState} from 'react';
// import '../styles/globals.scss';
// // import type { AppProps } from 'next/app';
// import {Layout} from '../components';
// import 'tailwindcss/tailwind.css';


// function MyApp({Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
    
//   )
// }

// export default MyApp

import React from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;