# Magento 2 + Next.js Headless Commerce

A technical demo exploring a headless commerce architecture using **Magento 2** as the backend and **Next.js** as the storefront.

The goal is to build a clean, maintainable foundation for modern eCommerce applications, with a focus on frontend architecture, GraphQL integration, performance, and developer experience.

## Tech Stack

### Backend
- Magento 2
- Magento GraphQL API
- Docker-based local environment

### Frontend
- Next.js 16
- React 19
- TypeScript
- pnpm

## Architecture

Magento handles commerce operations and business data, while Next.js provides the storefront experience.

```text
┌──────────────────────────────┐
│          Storefront          │
│                              │
│          Next.js 16          │
│          React 19            │
│          TypeScript          │
└──────────────┬───────────────┘
               │
               │ GraphQL
               │ HTTPS
               ▼
┌──────────────────────────────┐
│          Backend             │
│                              │
│          Magento 2           │
│          GraphQL API         │
└──────────────────────────────┘
```

## Project Structure

```text
.
├── apps/
│   └── storefront/       # Next.js application
│       └── src/
│           ├── app/      # App Router pages
│           └── lib/
│               └── magento/
│                   ├── client.ts
│                   └── queries/
│
├── magento/              # Magento source code
│
└── README.md
```

*The Docker and Magento infrastructure configuration is maintained separately from the Next.js storefront.*

## Getting Started

### Requirements

- Node.js 24+
- pnpm
- Docker
- A working Magento 2 installation

### 1. Start Magento

Start your local Magento environment using the project's Docker configuration.

Make sure Magento is accessible through:

```text
https://magento.test
```

The GraphQL endpoint is:

```text
https://magento.test/graphql
```

### 2. Install Frontend Dependencies

Navigate to the storefront directory:

```bash
cd apps/storefront
```

Install dependencies:

```bash
pnpm install
```

### 3. Start Next.js

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

## Current Implementation

### Magento GraphQL Connection

The initial implementation establishes communication between Next.js and Magento through the GraphQL API.

**Test page:**

```text
/dev/magento
```

**Query:**

```graphql
{
  storeConfig {
    store_name
    base_currency_code
  }
}
```

**Expected response:**

```json
{
  "data": {
    "storeConfig": {
      "store_name": "Default Store View",
      "base_currency_code": "USD"
    }
  }
}
```

### SSL Configuration

The local Magento environment uses HTTPS with a development certificate.

Node.js must trust the local certificate authority to make secure requests.

On macOS, the storefront development scripts use:

```bash
NODE_OPTIONS=--use-system-ca
```

This enables Node.js to use certificates trusted by the operating system.

## Development Roadmap

- [x] Set up Magento 2 local environment
- [x] Set up Next.js storefront
- [x] Establish Magento GraphQL connection
- [x] Test Store Configuration query
- [ ] Build reusable GraphQL client
- [ ] Define TypeScript response types
- [ ] Implement product queries
- [ ] Implement category queries
- [ ] Build product listing page
- [ ] Build product detail page
- [ ] Implement cart functionality
- [ ] Improve caching and performance

## Project Goals

This project explores:

- Headless Magento architecture
- GraphQL data integration
- Modern Next.js App Router patterns
- Type-safe data handling
- Server-side rendering and caching
- Maintainable frontend architecture
- eCommerce performance and user experience

---

**Built by [bigbistudio](https://www.bigbistudio.com)**

*Built with depth. Made to last.*