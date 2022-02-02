import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 8),
    isAdmin: true,
  },
  {
    name: 'Mohamed Shaban',
    email: 'mo@example.com',
    password: bcrypt.hashSync('123456', 8),
  },
  {
    name: 'Ali Sayed',
    email: 'Ali@example.com',
    password: bcrypt.hashSync('123456', 8),
  },
];

export default users;
