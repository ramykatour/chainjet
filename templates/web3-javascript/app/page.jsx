'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance } from 'wagmi';

export default function Home() {
  const { address, isConnected, chain } = useAccount();
  const { data: balance } = useBalance({
    address: address,
  });

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {{PROJECT_NAME}}
            </h1>
            <p className="text-gray-400 mt-2">Your Web3 dApp powered by RainbowKit</p>
          </div>
          <ConnectButton />
        </header>

        {/* Main Content */}
        {!isConnected ? (
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-16 h-16 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
              <p className="text-gray-400 max-w-md mx-auto">
                Connect your wallet to start interacting with this Web3 application.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Account Info Card */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6">Account Information</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Connected Address</p>
                  <p className="text-lg font-mono text-purple-400">{address?.slice(0, 6)}...{address?.slice(-4)}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Network</p>
                  <p className="text-lg font-semibold">{chain?.name || 'Unknown'}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Balance</p>
                  <p className="text-lg font-semibold">
                    {balance ? `${parseFloat(balance.formatted).toFixed(4)} ${balance.symbol}` : 'Loading...'}
                  </p>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Secure</h3>
                <p className="text-gray-400">
                  Built with security best practices and integrated with trusted wallet providers.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-pink-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Fast</h3>
                <p className="text-gray-400">
                  Optimized performance with Next.js 15 and modern React patterns.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Multi-Chain</h3>
                <p className="text-gray-400">
                  Support for Ethereum, Polygon, Optimism, Arbitrum, and Base.
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Modern UI</h3>
                <p className="text-gray-400">
                  Beautiful interface powered by RainbowKit with custom themes.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20 text-center">
              <h3 className="text-2xl font-bold mb-4">Start Building</h3>
              <p className="text-gray-400 mb-6">
                This is your starting point. Add smart contracts, integrate DeFi protocols, build NFT galleries, and more!
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="https://docs.rainbowkit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-colors"
                >
                  RainbowKit Docs
                </a>
                <a
                  href="https://wagmi.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors"
                >
                  wagmi Docs
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-gray-500 text-sm">
        <p>Built with Next.js 15, RainbowKit, wagmi, and viem</p>
      </footer>
    </main>
  );
}
