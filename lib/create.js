const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function createProject(projectName) {
  console.log('\n🚀 Creating ChainJet project:', projectName);
  console.log('=' .repeat(50));

  // Prompt for project type
  console.log('\n📦 Select project type:');
  console.log('1. Web3 dApp');

  const projectTypeChoice = await question('\nEnter your choice (1): ');

  let projectType;
  if (projectTypeChoice === '1' || !projectTypeChoice) {
    projectType = 'web3';
  } else {
    console.log('Invalid choice. Defaulting to Web3 dApp.');
    projectType = 'web3';
  }

  // For Web3, prompt for language
  let language = 'typescript';
  if (projectType === 'web3') {
    console.log('\n💻 Select language:');
    console.log('1. TypeScript');
    console.log('2. JavaScript');

    const languageChoice = await question('\nEnter your choice (1): ');

    if (languageChoice === '2') {
      language = 'javascript';
    } else {
      language = 'typescript';
    }
  }

  rl.close();

  console.log('\n✨ Configuration:');
  console.log('  Project name:', projectName);
  console.log('  Project type:', projectType);
  console.log('  Language:', language);

  const projectPath = path.join(process.cwd(), projectName);

  // Create project directory
  if (fs.existsSync(projectPath)) {
    console.error(`\n❌ Error: Directory "${projectName}" already exists`);
    process.exit(1);
  }

  console.log('\n📁 Creating project...');

  // Copy template files
  const templateDir = path.join(__dirname, '../templates', `${projectType}-${language}`);

  if (!fs.existsSync(templateDir)) {
    console.error(`\n❌ Error: Template not found at ${templateDir}`);
    process.exit(1);
  }

  copyTemplateFiles(templateDir, projectPath, projectName);

  // Install dependencies
  console.log('\n📦 Installing dependencies...');
  console.log('This may take a few minutes...\n');

  try {
    execSync(`cd ${projectPath} && npm install`, {
      stdio: 'inherit',
      timeout: 300000,
    });

    console.log('\n✅ Project created successfully!');
    console.log('\n' + '='.repeat(50));
    console.log('🎉 Next steps:');
    console.log('=' .repeat(50));
    console.log(`  cd ${projectName}`);
    console.log('  npm run dev');
    console.log('\n📚 Documentation: https://docs.chainjet.io');
    console.log('='.repeat(50) + '\n');
  } catch (error) {
    console.error('\n❌ Error installing dependencies:', error.message);
    console.log('\nYou can install dependencies manually:');
    console.log(`  cd ${projectName}`);
    console.log('  npm install');
    process.exit(1);
  }
}

function copyTemplateFiles(srcDir, destDir, projectName) {
  const files = getAllFiles(srcDir);

  files.forEach((file) => {
    const relativePath = path.relative(srcDir, file);
    const destPath = path.join(destDir, relativePath);

    // Ensure directory exists
    const destDirPath = path.dirname(destPath);
    if (!fs.existsSync(destDirPath)) {
      fs.mkdirSync(destDirPath, { recursive: true });
    }

    // Read file content and replace placeholders
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/\{\{PROJECT_NAME\}\}/g, projectName);
    content = content.replace(/\{\{PROJECT_NAME_KEBAB\}\}/g, toKebabCase(projectName));

    fs.writeFileSync(destPath, content);
  });
}

function getAllFiles(dir, files = []) {
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      getAllFiles(fullPath, files);
    } else {
      files.push(fullPath);
    }
  });

  return files;
}

function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

module.exports = { createProject };
