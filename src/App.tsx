import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";

import {
  Particle,
  Granim,
  Gsap,
  Mo,
  Scrollreveal,
  Tilt,
  Typed,
} from "./components";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Particle />} />
        <Route path="/granim" element={<Granim />} />
        <Route path="/gsap" element={<Gsap />} />
        <Route path="/mo" element={<Mo />} />
        <Route path="/scrollreveal" element={<Scrollreveal />} />
        <Route path="/tilt" element={<Tilt />} />
        <Route path="/typed" element={<Typed />} />
      </Switch>
    </BrowserRouter>
  );
};
