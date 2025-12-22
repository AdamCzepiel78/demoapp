# demoapp

This is a Node.Js Api Demo Express API App

## Prerequisites

- Node.js 20 or higher
- npm or yarn

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
# Start development server with hot reload
npm run dev
```

The server will start on port `3000`.

### Production
```bash
npm start
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start production server |
| `npm run dev` | Start development server with hot reload |
| `npm run lint` | Check code for linting errors |
| `npm run lint:fix` | Auto-fix linting errors |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check if code is formatted |
| `npm test` | Run tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |

## API Endpoints

### Health Check
```
GET /health
```

Response:
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Hello World
```
GET /
```

Response:
```json
{
  "message": "Hello World!"
}
```

## Project Structure
```
.
├── src/
│   ├── app.js          # Express application setup
│   └── server.js       # Server entry point
├── tests/
│   └── health.test.js  # Integration tests
├── .eslintrc.json      # ESLint configuration
├── .prettierrc         # Prettier configuration
├── jest.config.js      # Jest configuration
├── nodemon.json        # Nodemon configuration
└── package.json
```

## Technology Stack

- **Node.js** 20
- **Express** - Fast, unopinionated web framework
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Testing framework
- **Supertest** - HTTP assertions
- **Nodemon** - Development hot reload

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests: `npm test`
4. Run linting: `npm run lint:fix`
5. Format code: `npm run format`
6. Submit a pull request

## License

MIT
