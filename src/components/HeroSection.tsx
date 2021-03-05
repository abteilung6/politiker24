import React from "react";

interface Props {}

const HeroSection: React.FC<Props> = ({ children }) => {
  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 pb-5">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Redebeiträge eines Politikers</span>
          <span className="block text-indigo-600 xl:inline">
            {" "}
            ansehen und bewerten.{" "}
          </span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Schaue dir bisherige Beiträge im Bundestag deines Politikers an und
          tausche dich mit anderen Menschen aus.
        </p>
        <div className="mt-5 md:mt-8">{children}</div>
      </div>
    </main>
  );
};

export default HeroSection;
