import { Nav, Tab } from "../types";

export const navs: Nav[] = [
  {id: 'home', label: 'Home', to: ''},
  {id: 'trends', label: 'Trends', to: 'trends'},
  {id: 'compare', label: 'Vergleichen', to: 'compare'},
]

export const tabs: Tab[] = [
  {id: 'contributions', label: 'Redebeiträge'},
  {id: 'likes', label: 'Zuneigungen'},
  {id: 'dislikes', label: 'Abneigungen'},
]