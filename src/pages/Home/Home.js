import Divider from "../../components/Divider";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Find from "./Find";
import Slide from "./Slide";
import Tour from "./Tour";
function Home() {
  return (
    <div>
      <Slide />
      <Find />
      <About />
      <Divider />
      <Tour />
      <Blog />
      <Contact />
    </div>
  );
}

export default Home;
