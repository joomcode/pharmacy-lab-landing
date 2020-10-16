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
      <meta name='viewport' content='width=1024, initial-scale=1' />
      <link rel='icon' href='/favicon.png' />
      <link href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500&display=swap' rel='stylesheet' />
    </Head>
    {children}
    <style jsx global>{`
      body {
        min-width: 1024px;
      }
      body,
      input,
      textarea,
      button {
        font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
          'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      }
    `}</style>
  </>
);
