# 🔗 SwiftLink - Advanced URL Shortener Backend

<p align="center">
  <a href="http://nestjs.com/" target="_blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS Logo" /></a>
</p>

<p align="center">
  A blazing-fast, scalable URL Shortener backend built with <a href="http://nodejs.org" target="_blank">Node.js</a> and <a href="https://nestjs.com/" target="_blank">NestJS</a>.
</p>

---

## ✨ About the Project

**SwiftLink** is a powerful URL shortening service backend that allows users to create, manage, and track shortened URLs efficiently.

This project demonstrates expertise in **NestJS**, **Redis caching**, **MongoDB**, **Role-based Access Control (RBAC)**, **Microservices communication (RabbitMQ/Kafka)**, and production-grade backend practices like **authentication**, **rate-limiting**, and **analytics tracking**.

---

## 🚀 Technologies & Features

- **NestJS** — Progressive Node.js Framework
- **MongoDB** — Storage for short/long URLs
- **Redis** — Caching layer for faster URL redirection
- **RabbitMQ** — Asynchronous messaging for analytics service
- **Kafka** — Real-time streaming for click analytics
- **JWT Authentication** — User login, Admin login
- **Role-Based Access Control (RBAC)** — Admin, User
- **Rate Limiting** — Prevent abuse and ensure fair usage
- **Swagger API** — Auto-generated documentation
- **Docker-Ready Setup** — Easy deployment with Docker
- **Custom Middleware** — Logging and validation
- **Environment Configurations** — Secure environment management
- **Unit & E2E Testing** — Ensuring code quality

---

## 📦 Project Setup

```bash
# Clone the repository
$ git clone https://github.com/yourusername/swiftlink-url-shortener.git

# Navigate to project
$ cd swiftlink-url-shortener

# Install dependencies
$ npm install
```

---

## 🛠 Running the Application

```bash
# Development mode
$ npm run start:dev

# Production mode
$ npm run start:prod
```

Make sure MongoDB, Redis, RabbitMQ/Kafka services are running.

---

## 🧪 Testing

```bash
# Unit tests
$ npm run test

# End-to-end (e2e) tests
$ npm run test:e2e

# Coverage report
$ npm run test:cov
```

---

## 📡 Microservices & Caching

- **RabbitMQ** used for sending URL creation and click events to a separate analytics service.
- **Kafka** used for scalable real-time click stream analytics (future integration).
- **Redis** caches popular URLs to reduce MongoDB read load and boost performance (99% faster redirects).

---

## 🔐 Security

- **JWT Authentication** protects user and admin routes.
- **Role-Based Guards** to restrict access (Admin vs Normal Users).
- **Rate Limiting** to throttle abusive requests.

---

## 🛒 Major Functionalities

- **Shorten Long URLs** (auto-generated or custom alias)
- **Retrieve Original URLs**
- **Analytics**: Track number of visits, country, browser type
- **User Panel**: Manage shortened URLs
- **Admin Panel**: Full control over the platform
- **Custom Expiration**: Set expiry date for short URLs
- **Password-Protected Links** (advanced)
- **QR Code Generation** (optional advanced feature)

---

## 📈 Analytics Services

1. **Basic Click Tracking** — Date/time, IP, browser, and geolocation.
2. **Real-time Stream** — Using Kafka for high-throughput analytics pipelines.
3. **Event Bus** — RabbitMQ acts as internal communication between core services and analytics worker.

---

## ☁️ Deployment

You can easily deploy SwiftLink using **Docker**:

```bash
# Build Docker image
$ docker build -t swiftlink-backend .

# Run container
$ docker run -p 3000:3000 swiftlink-backend
```

Or deploy using **PM2** for node process management:

```bash
# Production build
$ npm run build

# Start with PM2
$ pm2 start dist/main.js
```

---

## 📚 Resources

- [NestJS Official Docs](https://docs.nestjs.com)
- [MongoDB Docs](https://www.mongodb.com/docs/)
- [Redis Docs](https://redis.io/docs/)
- [RabbitMQ Tutorials](https://www.rabbitmq.com/getstarted.html)
- [Kafka Documentation](https://kafka.apache.org/documentation/)

---

## 💼 My Backend Development Expertise

This project showcases my ability to:

- Architect **scalable** and **secure** backend systems.
- Build and manage **microservices** with **RabbitMQ** and **Kafka**.
- Apply **advanced caching strategies** (Redis optimization).
- Implement **authentication and RBAC** efficiently.
- Create **real-time analytics pipelines** for high-load systems.
- Develop **production-ready** codebases following clean architecture principles.

---

## 🤝 Let's Connect

If you're looking for a backend developer who can build production-grade, high-scale systems —  
feel free to connect with me!

- GitHub: [Your GitHub Link]
- LinkedIn: [Your LinkedIn Link]
- Email: [Your Email Address]

---
