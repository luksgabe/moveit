import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContexts';
import { CountdownProvider } from '../contexts/CountdownContext';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
        <Component {...pageProps} />     
    </ChallengesProvider>
  )
}

export default MyApp
