import { Comment, Message } from "../types";

export const messages: Message[] = [
  {
    id: 1,
    author: 'Thomas Schmidt',
    avatarURL: 'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
    likesCount: 90,
    commentsCount: 120,
  },
  {
    id: 2,
    author: 'Anna Müller',
    avatarURL: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=E4Y6Tx4TQD&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
    likesCount: 77,
    commentsCount: 45,
  },
  {
    id: 3,
    author: 'David Meier',
    avatarURL: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    text: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
    likesCount: 23,
    commentsCount: 34,
  },
]

export const comment: Comment = {
  id: 1,
  author: 'Ferdinand Eisenholz',
  avatarURL: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  text: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
}
