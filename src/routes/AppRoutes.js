import { Route } from "react-router";
import { lazy, Suspense } from "react";

import App from "../App.js";
import Body from "../components/pages/Body.js";
import About from "../components/pages/About.js";
import Contact from "../components/pages/Contact.js";
import News from "../components/pages/News.js";
import Error from "../components/pages/Error.js";
import ShimmerUI from "../components/common/ShimmerUI.js";
import RMenu from "../components/restaurants/RestaurantMenu.js";

const Grocery = lazy(function () {
  return import("../components/pages/Grocery.js");
});

export const appRoutes = (
  <>
    <Route path="/" element={<App />}>
      <Route index element={<Body />} />
      <Route path="about" element={<About />} />

      <Route
        path="grocery"
        element={
          <Suspense fallback={<ShimmerUI/>}>
            <Grocery />
          </Suspense>
        }
      />

      <Route path="news" element={<News />} />
      <Route path="contact" element={<Contact />} />
      <Route path="restaurants/:rid" element={<RMenu />} />
    </Route>

    <Route path="*" element={<Error />} />
  </>
);