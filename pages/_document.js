import Document, { Head, Main, NextScript } from 'next/document';
import { connect } from 'react-redux';

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <script
            type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD70GglMCrANvggJiiAu_agXFZiBHzeeXo&libraries=places"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
