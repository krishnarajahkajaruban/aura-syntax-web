import sharp from 'sharp';
import { readdir, stat, readFile, writeFile, rm } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = join(__dirname, '../public/assets');

// Image optimization configurations
const imageConfigs = {
  'logo-portrait.webp': { width: 560, height: 560, quality: 85 },
  'hero-illustration.webp': { width: 1200, height: 957, quality: 85 }, // Keep larger for hero LCP
  'logo.webp': { width: 360, height: 97, quality: 85 },
  'about-img.webp': { width: 560, height: 560, quality: 85 },
  'contact-illustration.webp': { width: 680, height: 680, quality: 85 },
  'logo-sm.webp': { width: 200, height: 200, quality: 85 },
};

const projectCoverConfig = { width: 800, height: 530, quality: 85 };
const serviceIconConfig = { width: 128, height: 128, quality: 85 };
const upcomingProjectConfig = { width: 800, height: 600, quality: 85 };

async function optimizeImage(inputPath, config) {
  try {
    // Check if file exists
    try {
      await stat(inputPath);
    } catch {
      console.log(`  ⚠️  File not found: ${inputPath}`);
      return { optimized: false, savings: 0 };
    }
    
    const metadata = await sharp(inputPath).metadata();
    const originalSize = (await stat(inputPath)).size;
    const relativePath = inputPath.replace(process.cwd() + '/', '');
    
    console.log(`Processing: ${relativePath} (${metadata.width}x${metadata.height}, ${(originalSize / 1024).toFixed(2)} KiB)`);
    
    // Only resize if current size is larger than target
    if (metadata.width > config.width || metadata.height > config.height) {
      const tempPath = inputPath + '.tmp';
      
      await sharp(inputPath)
        .resize(config.width, config.height, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: config.quality })
        .toFile(tempPath);
      
      const newSize = (await stat(tempPath)).size;
      const savings = ((originalSize - newSize) / 1024).toFixed(2);
      
      // Only replace if new file is smaller
      if (newSize < originalSize) {
        // Replace original with optimized version
        const optimizedBuffer = await readFile(tempPath);
        await writeFile(inputPath, optimizedBuffer);
        await rm(tempPath);
        
        console.log(`  ✅ Optimized: ${(originalSize / 1024).toFixed(2)} KiB → ${(newSize / 1024).toFixed(2)} KiB (saved ${savings} KiB)`);
        return { optimized: true, savings: parseFloat(savings) };
      } else {
        await rm(tempPath);
        console.log(`  ⏭️  Optimization didn't reduce size`);
        return { optimized: false, savings: 0 };
      }
    } else {
      console.log(`  ⏭️  Already optimal size`);
      return { optimized: false, savings: 0 };
    }
  } catch (error) {
    console.error(`  ❌ Error processing ${inputPath}:`, error.message);
    return { optimized: false, savings: 0, error: error.message };
  }
}

async function optimizeProjectCovers() {
  const projectsDir = join(ASSETS_DIR, 'projects');
  const projects = await readdir(projectsDir, { withFileTypes: true });
  let totalSavings = 0;
  
  for (const project of projects) {
    if (project.isDirectory()) {
      const coverPath = join(projectsDir, project.name, 'cover.webp');
      try {
        const result = await optimizeImage(coverPath, projectCoverConfig);
        totalSavings += result.savings || 0;
      } catch (error) {
        console.log(`  ⚠️  Skipping ${coverPath}: ${error.message}`);
      }
    }
  }
  
  return totalSavings;
}

async function optimizeServiceIcons() {
  const servicesDir = join(ASSETS_DIR, 'services');
  const services = await readdir(servicesDir);
  let totalSavings = 0;
  
  for (const service of services) {
    if (service.endsWith('.webp')) {
      const iconPath = join(servicesDir, service);
      try {
        const result = await optimizeImage(iconPath, serviceIconConfig);
        totalSavings += result.savings || 0;
      } catch (error) {
        console.log(`  ⚠️  Skipping ${iconPath}: ${error.message}`);
      }
    }
  }
  
  return totalSavings;
}

async function optimizeUpcomingProjects() {
  const upcomingDir = join(ASSETS_DIR, 'upcoming-projects');
  const projects = await readdir(upcomingDir);
  let totalSavings = 0;
  
  for (const project of projects) {
    if (project.endsWith('.webp')) {
      const projectPath = join(upcomingDir, project);
      try {
        const result = await optimizeImage(projectPath, upcomingProjectConfig);
        totalSavings += result.savings || 0;
      } catch (error) {
        console.log(`  ⚠️  Skipping ${projectPath}: ${error.message}`);
      }
    }
  }
  
  return totalSavings;
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');
  
  let totalSavings = 0;
  
  // Optimize main assets
  console.log('📦 Optimizing main assets...');
  for (const [filename, config] of Object.entries(imageConfigs)) {
    const imagePath = join(ASSETS_DIR, filename);
    try {
      const result = await optimizeImage(imagePath, config);
      totalSavings += result.savings || 0;
    } catch (error) {
      console.log(`  ⚠️  Skipping ${filename}: ${error.message}`);
    }
  }
  
  // Optimize project covers
  console.log('\n📁 Optimizing project covers...');
  totalSavings += await optimizeProjectCovers();
  
  // Optimize service icons
  console.log('\n🎨 Optimizing service icons...');
  totalSavings += await optimizeServiceIcons();
  
  // Optimize upcoming projects
  console.log('\n🚀 Optimizing upcoming projects...');
  totalSavings += await optimizeUpcomingProjects();
  
  console.log(`\n✨ Optimization complete! Total savings: ${totalSavings.toFixed(2)} KiB`);
}

main().catch(console.error);

