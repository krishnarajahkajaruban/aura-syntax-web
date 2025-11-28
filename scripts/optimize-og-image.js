import sharp from 'sharp';
import { stat } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = join(__dirname, '../public');
const OG_IMAGE_PATH = join(PUBLIC_DIR, 'og-image.png');
const OG_IMAGE_OPTIMIZED = join(PUBLIC_DIR, 'og-image-optimized.png');

async function optimizeOgImage() {
  try {
    console.log('🖼️  Optimizing og-image.png for social sharing...\n');
    
    // Check if file exists
    const stats = await stat(OG_IMAGE_PATH);
    const originalSize = stats.size;
    console.log(`Original size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
    
    // Get original dimensions
    const metadata = await sharp(OG_IMAGE_PATH).metadata();
    console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);
    console.log(`Original aspect ratio: ${(metadata.width / metadata.height).toFixed(2)}:1\n`);
    
    // Optimal dimensions for social sharing (1.91:1 ratio - Facebook/LinkedIn/Twitter friendly)
    const targetWidth = 1200;
    const targetHeight = 628; // 1200/628 ≈ 1.91:1
    
    // Resize and compress
    await sharp(OG_IMAGE_PATH)
      .resize(targetWidth, targetHeight, {
        fit: 'cover',
        position: 'center'
      })
      .png({ 
        quality: 85,
        compressionLevel: 9,
        adaptiveFiltering: true
      })
      .toFile(OG_IMAGE_OPTIMIZED);
    
    const newStats = await stat(OG_IMAGE_OPTIMIZED);
    const newSize = newStats.size;
    const savings = ((originalSize - newSize) / 1024 / 1024).toFixed(2);
    const savingsPercent = (((originalSize - newSize) / originalSize) * 100).toFixed(1);
    
    console.log(`✅ Optimized image created:`);
    console.log(`   New size: ${(newSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   New dimensions: ${targetWidth}x${targetHeight}`);
    console.log(`   Saved: ${savings} MB (${savingsPercent}%)`);
    
    if (newSize > 1024 * 1024) {
      console.log(`\n⚠️  Warning: Image is still over 1MB (${(newSize / 1024 / 1024).toFixed(2)} MB)`);
      console.log(`   Consider using JPEG format for smaller file size.`);
      console.log(`   Or reduce quality further.`);
    } else {
      console.log(`\n✅ Image is under 1MB - Perfect for Twitter!`);
    }
    
    // Create JPEG version (usually smaller)
    const OG_IMAGE_JPEG = join(PUBLIC_DIR, 'og-image.jpg');
    await sharp(OG_IMAGE_PATH)
      .resize(targetWidth, targetHeight, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ 
        quality: 85,
        mozjpeg: true
      })
      .toFile(OG_IMAGE_JPEG);
    
    const jpegStats = await stat(OG_IMAGE_JPEG);
    const jpegSize = jpegStats.size;
    console.log(`\n✅ JPEG version created: og-image.jpg`);
    console.log(`   Size: ${(jpegSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Recommended for social sharing (smaller file size)`);
    
    console.log(`\n📝 Next steps:`);
    console.log(`   1. Review og-image-optimized.png and og-image.jpg`);
    console.log(`   2. Choose the best one (JPEG is usually smaller)`);
    console.log(`   3. Replace og-image.png with your chosen file`);
    console.log(`   4. Update meta tags to use the optimized image`);
    console.log(`   5. Delete temporary files (og-image-optimized.png)`);
    
  } catch (error) {
    console.error('❌ Error optimizing image:', error.message);
    process.exit(1);
  }
}

optimizeOgImage();

