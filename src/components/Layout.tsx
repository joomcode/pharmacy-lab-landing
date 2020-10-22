import React, {ReactNode} from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  children?: ReactNode;
};

export const Layout = ({title, children}: Props) => (
  <>
    <Head>
      <meta charSet='utf-8' />
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta property='og:title' key='og:title' content='Joom Pharm Solutions' />
      <meta property='og:image' key='og:image' content='/cover_narrow.jpg' />
      <link rel='icon' href='/favicon.png' />
      <link href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&display=swap' rel='stylesheet' />
    </Head>
    {children}
    <style jsx global>{`
      @media (max-width: 767px) {
        html,
        body {
          width: 100%;
          overflow-x: hidden;
        }
      }

      body,
      input,
      textarea,
      button {
        font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
          'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      }

      :root {
        --padding: 60px;

        @media (max-width: 768px) {
          --padding: 20px;
        }
      }

      @media (max-width: 768px) {
        br {
          display: none;
        }
      }
    `}</style>
  </>
);
