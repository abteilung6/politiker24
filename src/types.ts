export type Nav = {
  id: string;
  label: string;
  to: string;
}

export type Tab = {
  id: string;
  label: string;
}

export type Person = {
  fullName: string;
  faction: string;
  title: string;
  birthday: string;
  theses: ReadonlyArray<string>;
}

export type Activity = {
  id: number;
  date: string;
  text: string;
}