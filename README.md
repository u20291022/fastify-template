# Fastify TypeScript Template

A production-ready Fastify template with TypeScript, featuring a well-structured architecture, comprehensive tooling, and modern development practices.

## 🚀 Features

- **⚡ Fastify**: High-performance web framework
- **📘 TypeScript**: Full TypeScript support with strict configuration
- **🔒 JWT Authentication**: Ready-to-use JWT authentication with `@fastify/jwt`
- **📊 API Documentation**: Auto-generated Swagger/OpenAPI documentation
- **🛡️ Input Validation**: Schema validation with Zod and `fastify-type-provider-zod`
- **🔐 Security**: Built-in CORS, error handling, and password hashing with Argon2
- **📝 Logging**: Structured logging with Pino
- **🐳 Docker**: Development and production Docker configurations
- **🧪 Testing**: Jest testing setup with supertest
- **💅 Code Quality**: ESLint, Prettier, and Husky pre-commit hooks
- **⚙️ Environment Management**: Environment-specific configurations with dotenv-flow

## 📁 Project Structure

```
fastify-template/
├── source/
│   ├── app/
│   │   ├── hooks/              # Fastify lifecycle hooks
│   │   ├── plugins/            # Reusable Fastify plugins
│   │   │   ├── cors.plugin.ts
│   │   │   ├── errors-handler.plugin.ts
│   │   │   ├── fastify-zod.plugin.ts
│   │   │   ├── jwt.plugin.ts
│   │   │   └── swagger.plugin.ts
│   │   ├── routes/             # API route definitions
│   │   │   └── globals/
│   │   │       └── healthcheck/
│   │   └── app.ts              # Main app configuration
│   ├── enums/                  # Type-safe enumerations
│   ├── errors/                 # Custom error classes
│   ├── schemas/                # Zod schemas for validation
│   │   ├── models/
│   │   └── routes/
│   ├── types/                  # TypeScript type definitions
│   ├── utils/                  # Utility functions
│   └── index.ts                # Application entry point
├── logs/                       # Application logs
├── dockerfile.develop          # Development Docker configuration
├── dockerfile.production       # Production Docker configuration
└── ...config files
```

## 🛠️ Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Use this template**

   ```bash
   # Create a new repository from this template on GitHub
   # Or clone and remove git history:
   git clone https://github.com/your-username/fastify-template my-fastify-app
   cd my-fastify-app
   rm -rf .git
   git init
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   # Copy environment template and configure
   cp .env.example .env.develop
   ```

4. **Start development server**
   ```bash
   pnpm dev
   ```

The server will start on `http://localhost:3000` with hot-reload enabled.

## 📜 Available Scripts

| Script              | Description                              |
| ------------------- | ---------------------------------------- |
| `pnpm dev`          | Start development server with hot-reload |
| `pnpm build`        | Build for production                     |
| `pnpm start`        | Start production server                  |
| `pnpm test`         | Run tests                                |
| `pnpm lint`         | Run ESLint                               |
| `pnpm pretty`       | Format code with Prettier                |
| `pnpm pretty:check` | Check code formatting                    |

## 🐳 Docker Usage

### Development

```bash
docker build -f dockerfile.develop -t fastify-app:dev .
docker run -p 3000:3000 fastify-app:dev
```

### Production

```bash
docker build -f dockerfile.production -t fastify-app:prod .
docker run -p 3000:3000 fastify-app:prod
```

## 🔧 Configuration

### Environment Variables

Create environment files for different stages:

- `.env.develop` - Development configuration
- `.env.production` - Production configuration

Example variables:

```bash
NODE_ENV=develop
SERVER_PORT=3000
JWT_SECRET=your-jwt-secret
```

### TypeScript Configuration

The project uses strict TypeScript configuration with:

- ES2022 target
- Node16 module resolution
- Strict type checking
- Path mapping support

## 📚 API Documentation

The template includes Swagger/OpenAPI documentation setup. To add documentation to your API routes:

1. **Configure Swagger for specific API versions** (v1, v2, global, etc.)
2. **Add schema definitions** in the `source/schemas/routes/` directory
3. **Register the swagger plugin** on your API route branches

Once the server is running, visit:

- **Swagger UI**: `http://localhost:3000/documentation`
- **OpenAPI JSON**: `http://localhost:3000/documentation/json`

**Note**: Swagger documentation should be configured per API version branch (e.g., `/api/v1`, `/api/v2`, `/global`) rather than globally for better organization and versioning.

## 🧪 Testing

The template includes a Jest testing setup with supertest for API testing:

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test --watch
```

## 🔐 Security Features

- **CORS**: Configurable cross-origin resource sharing
- **JWT**: JSON Web Token authentication
- **Input Validation**: Schema-based request validation with Zod
- **Error Handling**: Centralized error handling with custom error classes
- **Password Hashing**: Secure password hashing with Argon2

## 🏗️ Architecture Principles

- **Plugin-based**: Modular architecture using Fastify plugins
- **Type Safety**: Full TypeScript integration with runtime validation
- **Separation of Concerns**: Clear separation between routes, business logic, and data access
- **Error Handling**: Comprehensive error handling with custom error classes
- **Logging**: Structured logging for better observability

## 🔗 Resources

- [Fastify Documentation](https://www.fastify.io/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Zod Documentation](https://zod.dev/)
- [Pino Logger](https://getpino.io/)
