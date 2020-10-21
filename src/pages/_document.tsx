import Document, {Html, Head, Main, NextScript} from 'next/document';
import {SpriteSheet} from '../components/SpriteSheet';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <SpriteSheet />
          <NextScript />
          {process.env.NODE_ENV === 'production' ? (
            <>
              <script async src='https://www.googletagmanager.com/gtag/js?id=UA-181009691-1' />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-181009691-1');`,
                }}
              />
            </>
          ) : null}
        </body>
      </Html>
    );
  }
}
