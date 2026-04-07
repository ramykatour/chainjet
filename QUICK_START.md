# ChainJet CLI - Quick Start Guide

## 30-Second Setup

```bash
# 1. Create a new Web3 dApp
npx chainjet create my-web3-app

# 2. Follow the prompts
# - Select: 1 (Web3 dApp)
# - Select: 1 (TypeScript) or 2 (JavaScript)

# 3. Navigate to your project
cd my-web3-app

# 4. Get WalletConnect Project ID from: https://cloud.walletconnect.com

# 5. Update wagmi-config.ts (or wagmi-config.js)
# Replace: YOUR_WALLETCONNECT_PROJECT_ID
# With: your actual project ID

# 6. Run the dev server
npm run dev

# 7. Open http://localhost:3000
```

That's it! You now have a working Web3 dApp. 🎉

## What You Get

✅ **Modern Stack**: Next.js 16, RainbowKit v2, wagmi v2, viem v2
✅ **No Errors**: Fixes "getDefaultConfig is not a function"
✅ **Multi-Chain**: Ethereum, Polygon, Optimism, Arbitrum, Base
✅ **Beautiful UI**: Pre-styled with dark theme
✅ **Wallet Ready**: Connect wallet with one click

## File Structure

```
my-web3-app/
├── app/
│   ├── layout.tsx       # Root layout with providers
│   ├── page.tsx         # Home page with wallet connection
│   └── globals.css      # Global styles
├── components/
│   └── providers.tsx    # Web3 providers (RainbowKit, wagmi)
├── wagmi-config.ts      # wagmi configuration
├── package.json         # Dependencies (all latest)
└── README.md            # Project documentation
```

## Key Files

### wagmi-config.ts
⭐ **Important**: Update your WalletConnect Project ID here

```typescript
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'My App',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // ← Update this!
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
});
```

### components/providers.tsx
⚠️ **Don't modify** unless you know what you're doing

### app/page.tsx
🎨 **Customize this** to add your app's features

## Common Tasks

### Add More Chains

```typescript
// wagmi-config.ts
import { sepolia, goerli } from 'wagmi/chains';

export const config = getDefaultConfig({
  // ...
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia, goerli],
});
```

### Get Wallet Address

```typescript
import { useAccount } from 'wagmi';

function MyComponent() {
  const { address, isConnected } = useAccount();
  return isConnected ? <div>{address}</div> : <div>Not connected</div>;
}
```

### Get Wallet Balance

```typescript
import { useBalance } from 'wagmi';

function Balance() {
  const { data: balance } = useBalance({ address: '0x...' });
  return <div>{balance?.formatted} {balance?.symbol}</div>;
}
```

### Read Contract

```typescript
import { useReadContract } from 'wagmi';
import { erc20Abi } from 'viem';

const { data: balance } = useReadContract({
  address: '0x...',
  abi: erc20Abi,
  functionName: 'balanceOf',
  args: ['0x...'],
});
```

## Troubleshooting

### "getDefaultConfig is not a function"
```bash
npm install @rainbow-me/rainbowkit@latest wagmi@latest viem@latest
```

### Wallet not connecting
- Make sure you have a valid WalletConnect Project ID
- Check browser console for errors
- Try with a different wallet

### Build errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

## Learn More

- [RainbowKit Docs](https://docs.rainbowkit.com)
- [wagmi Docs](https://wagmi.sh)
- [viem Docs](https://viem.sh)
- [Next.js Docs](https://nextjs.org/docs)

## Need Help?

- Check [USAGE.md](./USAGE.md) for detailed examples
- Check [VERIFICATION.md](./VERIFICATION.md) for troubleshooting
- Check [README.md](./README.md) for full documentation

---

**Happy Building! 🚀**
