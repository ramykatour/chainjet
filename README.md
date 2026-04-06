# ChainJet CLI

🚀 A modern CLI tool for creating Web3 dApps with the latest stack: Next.js 15, RainbowKit v2, wagmi v2, and viem v2.

## Features

- ✨ **Modern Stack**: Built with the latest versions of RainbowKit, wagmi, and viem
- 🔒 **Error-Free**: Fixes the common "getDefaultConfig is not a function" error
- 🎯 **TypeScript & JavaScript**: Support for both TypeScript and JavaScript
- 🌈 **Multi-Chain**: Pre-configured with Ethereum, Polygon, Optimism, Arbitrum, and Base
- ⚡ **Fast Setup**: Quick project scaffolding with all dependencies installed
- 🎨 **Beautiful UI**: Pre-configured RainbowKit with dark theme

## Installation

```bash
npx chainjet create my-app
```

## Usage

### Create a New Web3 dApp

```bash
npx chainjet create my-web3-app
```

You'll be prompted to select:
1. **Project Type**: Web3 dApp
2. **Language**: TypeScript or JavaScript

### After Project Creation

1. Navigate to your project:
   ```bash
   cd my-web3-app
   ```

2. Update your WalletConnect Project ID in `wagmi-config.ts` (or `wagmi-config.js`):
   ```typescript
   export const config = getDefaultConfig({
     appName: 'My App',
     projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // Get this from https://cloud.walletconnect.com
     chains: [mainnet, polygon, optimism, arbitrum, base],
     ssr: true,
   });
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Generated Project Structure

```
my-web3-app/
├── app/
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page with wallet connection
│   └── globals.css        # Global styles
├── components/
│   └── providers.tsx      # Wagmi and RainbowKit providers
├── wagmi-config.ts        # Wagmi configuration
├── package.json           # Dependencies (latest versions)
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── README.md              # Project documentation
```

## Technology Stack

- **Next.js 15**: Latest React framework with App Router
- **RainbowKit v2**: Beautiful wallet connection UI
- **wagmi v2**: React hooks for Ethereum
- **viem v2**: TypeScript interface for Ethereum
- **TanStack Query**: Async state management
- **TypeScript**: Full type support (for TS projects)

## Key Features of Generated Projects

### ✅ Correct RainbowKit API

The template uses the correct import statement to avoid errors:

```typescript
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
```

### ✅ Latest Dependencies

All dependencies are pinned to the latest compatible versions:

```json
{
  "@rainbow-me/rainbowkit": "^2.1.6",
  "wagmi": "^2.13.6",
  "viem": "^2.21.58",
  "next": "16.2.2"
}
```

### ✅ SSR Support

Properly configured for Next.js 15 with Server-Side Rendering:

```typescript
export const config = getDefaultConfig({
  // ...
  ssr: true,
});
```

### ✅ Multi-Chain Support

Pre-configured with major chains:

- Ethereum Mainnet
- Polygon
- Optimism
- Arbitrum
- Base

## Common Issues

### "getDefaultConfig is not a function"

This error occurs when using outdated RainbowKit versions. Our template fixes this by:

1. Using the latest RainbowKit v2.x
2. Importing `getDefaultConfig` from the correct package
3. Ensuring compatibility between all dependencies

### Wallet Connection Issues

Make sure to:
1. Get a WalletConnect Project ID from [cloud.walletconnect.com](https://cloud.walletconnect.com)
2. Update the `projectId` in `wagmi-config.ts`
3. Use a Web3-enabled browser or wallet extension

## Development

To contribute to this CLI tool:

```bash
git clone https://github.com/ramykatour/chainjet/.git
cd cli
npm link
chainjet create test-app
```

## Documentation

For more information on the underlying technologies:

- [RainbowKit Docs](https://docs.rainbowkit.com)
- [wagmi Docs](https://wagmi.sh)
- [viem Docs](https://viem.sh)
- [Next.js Docs](https://nextjs.org/docs)

## License

MIT

## Support

- GitHub Issues: [https://github.com/chainjet/cli/issues](https://github.com/chainjet/issues)
- DEMO: [https://chainjet-demo.vercel.app/](https://chainjet-demo.vercel.app/)

---

Built with ❤️ by ChainJet
