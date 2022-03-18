export interface Game {
  id: number;
  name: string;
  description: string;
  platform: string;
  price: number;
  rating: string;
  editor: string;
  type: string;
  releasedDate: string;
  image: string;
}

export interface User {
  id: number;
  lastname: string;
  firstname: string;
  username: string;
  email: string;
  address: string;
  phoneNumber: string;
  password: string;
}
