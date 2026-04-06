import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';

// Get your WalletConnect Project ID at https://cloud.walletconnect.com
// Replace with your own project ID when deploying to production
export const config = getDefaultConfig({
  appName: '{{PROJECT_NAME}}',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // Enable SSR for Next.js
});
