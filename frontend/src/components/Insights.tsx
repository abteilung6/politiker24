import React from "react";

import FactionIndex from "./charts/FactionIndex";

interface Props {}

const Insights: React.FC<Props> = () => {
  return (
    <div className="sm:flex sm:items-center">
      <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
        <div className="h-96 w-96 pb-4">
          <FactionIndex />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold">Partei Sympathie Index (PSI)</h4>
        <p className="mt-1">
          Der Partei Sympathie Index (PSI) wird verwendet, um die Sympathie des
          Abgeordneten zu anderen Parteien aufzuzeigen. Die Symapthie basiert
          auf der Basis von Zurufen und Reaktionen des Abgeordneten auf
          Redebeiträge von anderen Abgeordneten.
        </p>
      </div>
    </div>
  );
};

export default Insights;
