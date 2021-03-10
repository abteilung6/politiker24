import React from "react";

import Contributions from "./charts/Contributions";
import FactionIndex from "./charts/FactionIndex";

interface Props {}

const Insights: React.FC<Props> = () => {
  return (
    <div className="space-y-4 divide-y-2 divide-dotted">
      <div className="sm:flex sm:items-center py-4">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4 sm:w-1/2 h-96">
          <div className="h-full w-full pb-4">
            <FactionIndex />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold">Partei Sympathie Index (PSI)</h4>
          <p className="mt-1">
            Der Partei Sympathie Index (PSI) wird verwendet, um die Sympathie
            des Abgeordneten zu anderen Parteien aufzuzeigen. Die Symapthie
            basiert auf der Basis von Zurufen und Reaktionen des Abgeordneten
            auf Redebeiträge von anderen Abgeordneten.
          </p>
        </div>
      </div>
      <div className="sm:flex sm:items-center py-8">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4 sm:w-1/2 h-48">
          <div className="h-full w-full pb-4">
            <Contributions />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold">Aktivitäten</h4>
          <p className="mt-1">
            Die Jahresübersicht basiert auf der Anzahl an Aktivitäten des
            Abgeordneten an einem Tag. Dabei berechnet sich die Aktivität aus
            mehreren Faktoren. Zur Berechnung der Aktivität fließen die Anzahl
            der Beiträge ein, als auch die Anzahl der Wörter und Reaktionen.
          </p>
        </div>
      </div>
      <div className="sm:flex sm:items-center"></div>
    </div>
  );
};

export default Insights;
