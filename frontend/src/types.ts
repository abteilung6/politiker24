export type Nav = {
  id: string;
  label: string;
  to: string;
}

export type Tab = {
  id: string;
  label: string;
}

export type Suggestion = {
  id: number;
  text: string;
  faction: string;
  imageURL: string;
}

export type Person = {
  fullName: string;
  faction: string;
  title: string;
  birthday: string;
}

export type Message = {
  id: number;
  author: string;
  avatarURL: string;
  text: string;
  likesCount: number;
  commentsCount: number; 
}

export type Comment = {
  id: number;
  author: string;
  avatarURL: string;
  text: string;
}

export type Activity = {
  id: number;
  date: string;
  text: string;
}