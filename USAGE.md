# ChainJet CLI - Usage Guide

## Quick Start

### 1. Create a New Project

```bash
npx chainjet create my-web3-app
```

### 2. Follow the Prompts

You'll be asked to select:
- **Project Type**: Choose "1" for Web3 dApp
- **Language**: Choose "1" for TypeScript or "2" for JavaScript

### 3. Update WalletConnect Project ID

After the project is created:

1. Get a WalletConnect Project ID from [https://cloud.walletconnect.com](https://cloud.walletconnect.com)
2. Open the config file:
   - For TypeScript: `wagmi-config.ts`
   - For JavaScript: `wagmi-config.js`
3. Replace `YOUR_WALLETCONNECT_PROJECT_ID` with your actual project ID

```typescript
export const config = getDefaultConfig({
  appName: 'My App',
  projectId: 'YOUR_ACTUAL_PROJECT_ID_HERE', // Replace this
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
});
```

### 4. Run the Development Server

```bash
cd my-web3-app
npm run dev
```

### 5. Open in Browser

Open [http://localhost:3000](http://localhost:3000)

## What's Included

### Core Files

- `app/layout.tsx` - Root layout with providers
- `app/page.tsx` - Home page with wallet connection UI
- `components/providers.tsx` - Web3 providers setup
- `wagmi-config.ts` - wagmi configuration
- `package.json` - Latest dependencies

### Installed Dependencies

```json
{
  "@rainbow-me/rainbowkit": "^2.1.6",
  "wagmi": "^2.13.6",
  "viem": "^2.21.58",
  "next": "15.1.3",
  "@tanstack/react-query": "^5.59.20"
}
```

## Features

### ✅ No "getDefaultConfig is not a function" Error

The template uses the correct import:

```typescript
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
```

### ✅ SSR Support

Properly configured for Next.js 15:

```typescript
export const config = getDefaultConfig({
  // ...
  ssr: true,
});
```

### ✅ Multi-Chain Support

Pre-configured chains:
- Ethereum Mainnet
- Polygon
- Optimism
- Arbitrum
- Base

### ✅ Beautiful UI

Pre-styled with RainbowKit dark theme

## Customization

### Add More Chains

Edit `wagmi-config.ts`:

```typescript
import { mainnet, polygon, optimism, arbitrum, base, sepolia, goerli } from 'wagmi/chains';

export const config = getDefaultConfig({
  // ...
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia, goerli],
});
```

### Change RainbowKit Theme

Edit `components/providers.tsx`:

```typescript
import { darkTheme, lightTheme, midnightTheme } from '@rainbow-me/rainbowkit';

// Available themes:
<RainbowKitProvider theme={darkTheme()}> {/* Dark theme (default) */}
<RainbowKitProvider theme={lightTheme()}> {/* Light theme */}
<RainbowKitProvider theme={midnightTheme()}> {/* Midnight theme */}
```

### Custom Theme Colors

```typescript
<RainbowKitProvider
  theme={darkTheme({
    accentColor: '#7b3fe4',
    accentColorForeground: 'white',
    borderRadius: 'large',
    fontStack: 'system',
  })}
>
```

## Common Tasks

### Get Connected Wallet Address

```typescript
import { useAccount } from 'wagmi';

function MyComponent() {
  const { address, isConnected, chain } = useAccount();

  if (!isConnected) return <div>Not connected</div>;

  return <div>Connected to {chain?.name}: {address}</div>;
}
```

### Get Wallet Balance

```typescript
import { useBalance } from 'wagmi';

function Balance() {
  const { data: balance } = useBalance({
    address: '0x...',
  });

  return <div>Balance: {balance?.formatted} {balance?.symbol}</div>;
}
```

### Read from a Contract

```typescript
import { useReadContract } from 'wagmi';
import { erc20Abi } from 'viem';

function TokenBalance() {
  const { data: balance } = useReadContract({
    address: '0x...',
    abi: erc20Abi,
    functionName: 'balanceOf',
    args: ['0x...'],
  });

  return <div>Token Balance: {balance?.toString()}</div>;
}
```

### Write to a Contract

```typescript
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { erc20Abi } from 'viem';

function TransferTokens() {
  const { data: hash, writeContract } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const transfer = () => {
    writeContract({
      address: '0x...',
      abi: erc20Abi,
      functionName: 'transfer',
      args: ['0x...', 1000000000000000000n],
    });
  };

  return (
    <div>
      <button onClick={transfer} disabled={isConfirming}>
        {isConfirming ? 'Confirming...' : 'Transfer'}
      </button>
      {isSuccess && <div>Transfer successful!</div>}
    </div>
  );
}
```

## Troubleshooting

### "getDefaultConfig is not a function"

Make sure you're using the latest RainbowKit version:

```bash
npm install @rainbow-me/rainbowkit@latest wagmi@latest viem@latest
```

### Wallet Connection Not Working

1. Check that you have a valid WalletConnect Project ID
2. Make sure you're using a Web3 browser or have a wallet extension installed
3. Check the browser console for errors

### Build Errors

If you encounter build errors, try:

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Network Issues

If you're having network connectivity issues, you can add additional RPC endpoints:

```typescript
import { mainnet, polygon } from 'wagmi/chains';

const mainnetWithCustomRPC = {
  ...mainnet,
  rpcUrls: {
    ...mainnet.rpcUrls,
    default: { http: ['https://your-custom-rpc.com'] },
  },
};

export const config = getDefaultConfig({
  // ...
  chains: [mainnetWithCustomRPC, polygon],
});
```

## Resources

- [RainbowKit Documentation](https://docs.rainbowkit.com)
- [wagmi Documentation](https://wagmi.sh)
- [viem Documentation](https://viem.sh)
- [Next.js Documentation](https://nextjs.org/docs)
- [WalletConnect Cloud](https://cloud.walletconnect.com)

## Support

For issues and questions:
- GitHub: [https://github.com/ramykatour/chainjeti/issues](https://github.com/ramykatour/chainjeti/issues)
- Docs: [https://github.com/ramykatour/chainjet/blob/main/README.md](https://github.com/ramykatour/chainjet/blob/main/README.md)
