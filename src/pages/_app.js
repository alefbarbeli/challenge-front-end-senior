import '../app/globals.css';
import {Fira_Sans} from 'next/font/google';
import Head from 'next/head';
import store from '../lib/store';
import {Provider} from 'react-redux';

const fira = Fira_Sans({weight: '400', subsets: ['latin']});

function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Head>
                <title>Kruzer Bookstore</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <div className={`alef ${fira.className} bg-customBackground min-h-screen`}>
                <Component {...pageProps} />
            </div>
        </Provider>
    );
}

export default MyApp;
