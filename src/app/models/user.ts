export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  rut: string;
  // password: string;
  RoleId?: number;
  createdAt: Date;
  deletedAt: Date;
  updatedAt: Date;
}