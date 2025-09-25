import { Link } from 'react-router';
import './Home.scss'
import Navbar from "../../components/Navbar/navbar.jsx";
import Footer from "../../components/Footer/footer.jsx";
import CursosCarousel from '../../components/carrossel/carrossel.jsx';
import backgroundVideo from '../../../public/videos/background_feira.mp4';


function Home() {

  return (
    <>
    <Navbar />
      <main>
        <section>
          <div className="apresentacao">
            <Link className='video-antes' to="/register">
              <video className="video" autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4" />
              </video>
            </Link>
          </div>
            <div className="spacement"></div>
            <div className="carrosel-cursos"><CursosCarousel/></div>
            <div className="spacement"></div>
        </section>
      </main>
      <Footer />
      </>
)};

export default Home;
