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
        </body>
      </Html>
    );
  }
}
