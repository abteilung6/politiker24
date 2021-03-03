export type Menu = {
  id: string;
  label: string;
  to: string;
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