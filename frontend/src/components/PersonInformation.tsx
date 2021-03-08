import React from "react";

import { Person } from "../types";

interface Props {
  person: Person;
}

const PersonInformation: React.FC<Props> = ({ person }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Allgemeine Informationen
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Details zur Person auf einem Überblick
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Vollständiger Name
            </dt>
            <dd className="mt-1 text-sm text-gray-900">{person.fullName}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">
              Parteizugehörigkeit
            </dt>
            <dd className="mt-1 text-sm text-gray-900">{person.faction}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Titel</dt>
            <dd className="mt-1 text-sm text-gray-900">{person.title}</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-sm font-medium text-gray-500">Geburtstag</dt>
            <dd className="mt-1 text-sm text-gray-900">{person.birthday}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default PersonInformation;
