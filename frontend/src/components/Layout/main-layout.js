import Head from 'next/head';
import * as React from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const MainLayout = () => {
    return (
        <div>
            <Head>
                <title>Cambiar</title>
                <meta name='referrer' content='origin' />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            
            <Header />
            <Footer />
        </div>
    )
}