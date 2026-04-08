'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useBalance } from 'wagmi';

export default function Home() {
  const { address, isConnected, chain } = useAccount();
  const { data: balance } = useBalance({
    address: address,
  });

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8" style={{ position: 'relative', zIndex: 1 }}>
      <div className="max-w-4xl w-full">
        {/* Header */}
        <header className="flex justify-between items-center mb-12 animate-slide-up">
          <div>
            <h1 className="gradient-text" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
              {{PROJECT_NAME}}
            </h1>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', fontSize: '1.1rem' }}>
              Your Web3 dApp powered by RainbowKit
            </p>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <ConnectButton />
          </div>
        </header>

        {/* Main Content */}
        {!isConnected ? (
          <div className="text-center py-20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="mb-8">
              <div className="animate-float" style={{
                width: '200px',
                height: '200px',
                margin: '0 auto 2rem',
                background: 'var(--primary-gradient)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 60px rgba(102, 126, 234, 0.4), 0 0 100px rgba(118, 75, 162, 0.3)'
              }}>
                <svg
                  style={{ width: '80px', height: '80px', color: 'white' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
                Connect Your Wallet
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
                Connect your wallet to start interacting with this Web3 application.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <div className="badge badge-purple" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>
                  Multi-Chain Support
                </div>
                <div className="badge badge-green">
                  Secure & Fast
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Account Info Card */}
            <div className="card animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div className="icon-box icon-box-purple">
                  <svg style={{ width: '24px', height: '24px', color: '#c084fc' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, color: 'white', margin: 0 }}>
                  Account Information
                </h2>
              </div>
              <div className="grid-2">
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                    Connected Address
                  </p>
                  <p style={{ fontSize: '1.25rem', fontFamily: 'monospace', color: '#c084fc', fontWeight: 600 }}>
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                  </p>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                    Network
                  </p>
                  <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white' }}>
                    {chain?.name || 'Unknown'}
                  </p>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                    Balance
                  </p>
                  <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'white' }}>
                    {balance ? `${parseFloat(balance.formatted).toFixed(4)} ${balance.symbol}` : <span className="spinner" style={{ width: '24px', height: '24px', display: 'inline-block', verticalAlign: 'middle', marginLeft: '0.5rem' }}></span>}
                  </p>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="grid-2">
              <div className="card animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="icon-box icon-box-purple">
                  <svg style={{ width: '24px', height: '24px', color: '#c084fc' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: 'white' }}>
                  Secure
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Built with security best practices and integrated with trusted wallet providers.
                </p>
              </div>

              <div className="card animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="icon-box icon-box-pink">
                  <svg style={{ width: '24px', height: '24px', color: '#f472b6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: 'white' }}>
                  Fast
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Optimized performance with Next.js 15 and modern React patterns.
                </p>
              </div>

              <div className="card animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="icon-box icon-box-blue">
                  <svg style={{ width: '24px', height: '24px', color: '#60a5fa' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: 'white' }}>
                  Multi-Chain
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Support for Ethereum, Polygon, Optimism, Arbitrum, and Base.
                </p>
              </div>

              <div className="card animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <div className="icon-box icon-box-green">
                  <svg style={{ width: '24px', height: '24px', color: '#4ade80' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: 'white' }}>
                  Modern UI
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Beautiful interface powered by RainbowKit with custom themes.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="card animate-slide-up" style={{
              animationDelay: '0.6s',
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(237, 100, 166, 0.15) 100%)',
              border: '1px solid rgba(147, 51, 234, 0.3)',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>
                Start Building
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7, fontSize: '1.1rem' }}>
                This is your starting point. Add smart contracts, integrate DeFi protocols, build NFT galleries, and more!
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://docs.rainbowkit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  RainbowKit Docs
                </a>
                <a
                  href="https://wagmi.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  wagmi Docs
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer style={{ marginTop: '5rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem', position: 'relative', zIndex: 1 }}>
        <div className="divider"></div>
        <p style={{ marginBottom: '0.5rem' }}>Built with Next.js, RainbowKit, wagmi, and viem</p>
		<p style={{ fontSize: '0.75rem', opacity: 0.7 }}>Built with ChainJet ⚡ <code style={{ fontSize: '0.75rem' }}>npx chainjet create app</code></p>
        <p style={{ fontSize: '0.75rem', opacity: 0.7 }}>© 2026 {{PROJECT_NAME}}. All rights reserved.</p>
      </footer>
    </main>
  );
}
