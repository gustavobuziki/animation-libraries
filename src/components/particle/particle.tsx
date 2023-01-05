import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Description } from "../description/description";
import { Link } from "../";

export const Particle = () => {
  const particlesInit = async (main: any) => {
    console.log(main);
    await loadFull(main);
  };
  return (
    <div className="container">
      <Description
        title="Particle JS"
        description="Essa é uma biblioteca que permite criar particulas de maneira fácil. Possui vários modêlos prontos para uso. É uma biblioteca super leve."
      />
      <Link link="/scrollreveal" />
      <Particles
        init={particlesInit}
        options={{
          fullScreen: {
            zIndex: -1,
          },
          particles: {
            number: {
              value: 10,
            },
            color: {
              value: "#fff",
            },
            line_linked: {
              enable: true,
              distance: 600,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          background: {
            color: "#8d1010",
          },
        }}
      />
    </div>
  );
};
