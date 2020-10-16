import '../normalize.css';
import {Layout} from '../components/Layout';
import {Welcome} from '../sections/Welcome';
import {Gallery} from '../sections/Gallery';
import {Features} from '../sections/Features';
import {Talk} from '../sections/Talk';
import {HowItWorks} from '../sections/HowItWorks';
import {Why} from '../sections/Why';
import {Feedback} from '../sections/Feedback';
import {Footer} from '../sections/Footer';

export const IndexPage = () => (
  <Layout title='JoomDoc for pharmacy'>
    <Welcome />
    <Gallery />
    <Features />
    <Talk />
    <HowItWorks />
    <Why />
    <Feedback />
    <Footer />
  </Layout>
);

export default IndexPage;
