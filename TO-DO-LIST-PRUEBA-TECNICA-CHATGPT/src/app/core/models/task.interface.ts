export interface ITaks {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  createdAt?: Date
}