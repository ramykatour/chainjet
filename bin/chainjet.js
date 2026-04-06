#!/usr/bin/env node

const { createProject } = require('../lib/create');

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('ChainJet CLI - Web3 dApp Scaffolding Tool\n');
    console.log('Usage:');
    console.log('  chainjet create <project-name>');
    console.log('\nExample:');
    console.log('  chainjet create my-web3-app');
    process.exit(0);
  }

  const command = args[0];

  if (command === 'create') {
    const projectName = args[1];
    if (!projectName) {
      console.error('Error: Project name is required');
      console.log('Usage: chainjet create <project-name>');
      process.exit(1);
    }
    await createProject(projectName);
  } else {
    console.error(`Unknown command: ${command}`);
    console.log('Available commands: create');
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('Error:', error.message);
  process.exit(1);
});
