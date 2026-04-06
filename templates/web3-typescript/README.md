# {{PROJECT_NAME}}

A modern Web3 dApp built with Next.js 15, RainbowKit, wagmi, and viem.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- A WalletConnect Project ID (get one at https://cloud.walletconnect.com)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Update your WalletConnect Project ID:
   - Open `wagmi-config.ts`
   - Replace `YOUR_WALLETCONNECT_PROJECT_ID` with your actual project ID

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Web3 Library**: wagmi v2
- **Wallet Connection**: RainbowKit v2
- **Ethereum Library**: viem v2
- **State Management**: TanStack Query

## 🔧 Configuration

### Adding More Chains

Edit `wagmi-config.ts` to add or modify chains:

```typescript
import { mainnet, polygon, optimism, arbitrum, base, sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  // ...
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
  // ...
});
```

### Customizing RainbowKit Theme

Edit `components/providers.tsx` to customize the theme:

```typescript
import { darkTheme, lightTheme, midnightTheme } from '@rainbow-me/rainbowkit';

<RainbowKitProvider theme={midnightTheme()}>
  {children}
</RainbowKitProvider>
```

## 📚 Learn More

- [RainbowKit Documentation](https://docs.rainbowkit.com)
- [wagmi Documentation](https://wagmi.sh)
- [viem Documentation](https://viem.sh)
- [Next.js Documentation](https://nextjs.org/docs)

## 🛠️ Building for Production

```bash
npm run build
npm start
```

## 📝 License

MIT
