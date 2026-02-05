import { Route } from 'react-router';
import App from '../App.js';
import Body from '../components/pages/Body.js';
import About from '../components/pages/About.js';
import Contact from '../components/pages/Contact.js';
import Home from '../components/pages/Home.js';
import News from '../components/pages/News.js';
import Error from '../components/pages/Error.js';
import RMenu from '../components/pages/RestaurantMenu.js';

export const appRoutes = (
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Body />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="news" element={<News />} />
      <Route path="contact" element={<Contact />} />
      <Route path="restaurants/:rid" element={<RMenu />} />
    </Route>
    <Route path="*" element={<Error />} />
  </>
);
