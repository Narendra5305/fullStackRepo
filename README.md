

## Overview
This Dermstore project is an Express.js-based REST API that manages products, users, and orders. The API implements authentication and role-based access control (RBAC) to ensure secure operations.


## Middleware

- **Authentication (`auth`)**: Ensures only authenticated users can access protected routes.
- **Role-Based Access Control (`rbac`)**: Restricts certain actions to specific roles (e.g., admin access only).

## API Endpoints

### Product Routes
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET    | `/products/` | Fetch all products | Public |
| POST   | `/products/upload` | Add a new product | Public |
| PATCH  | `/products/` | Update product data | Admin Only |
| DELETE | `/products/` | Delete a product | Admin Only |

### User Routes
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET    | `/users/` | Fetch all users | Admin Only |
| GET    | `/users/:id` | Fetch user profile | Authenticated Users |
| POST   | `/users/signup` | Register a new user | Public |
| POST   | `/users/signin` | User login | Public |
| PATCH  | `/users/:id` | Update user details | Authenticated Users |
| DELETE | `/users/:id` | Delete a user | Admin Only |

### Order Routes
| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET    | `/orders/` | Fetch all orders | Authenticated Users |
| POST   | `/orders/` | Create a new order | Authenticated Users |
| PATCH  | `/orders/:id` | Update an order | Authenticated Users |
| DELETE | `/orders/:id` | Delete an order | Admin Only |

## Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **JWT Authentication** - Secure authentication
- **Middleware** - Authentication and RBAC handling
