#!/usr/bin/env node

/**
 * Asset Optimization Script for 43 ADIM Project
 * Minifies CSS, JavaScript, and optimizes images for GitHub Pages
 */

const fs = require('fs').promises;
const path = require('path');

class AssetOptimizer {
  constructor() {
    this.cssFiles = [];
    this.jsFiles = [];
    this.htmlFiles = [];
  }

  async optimize() {
    console.log('🚀 Starting asset optimization...');
    
    try {
      await this.findAssets();
      await this.optimizeCSS();
      await this.optimizeJS();
      await this.optimizeHTML();
      await this.generateManifest();
      
      console.log('✅ Asset optimization completed successfully!');
    } catch (error) {
      console.error('❌ Optimization failed:', error);
      process.exit(1);
    }
  }

  async findAssets() {
    console.log('📁 Finding assets...');
    
    // Find CSS files
    this.cssFiles = await this.findFiles('assets/css', '.css');
    
    // Find JS files
    this.jsFiles = await this.findFiles('assets/js', '.js');
    
    // Find HTML files
    this.htmlFiles = await this.findFiles('.', '.html');
    
    console.log(`Found ${this.cssFiles.length} CSS, ${this.jsFiles.length} JS, ${this.htmlFiles.length} HTML files`);
  }

  async findFiles(dir, extension) {
    const files = [];
    
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          const subFiles = await this.findFiles(fullPath, extension);
          files.push(...subFiles);
        } else if (entry.name.endsWith(extension)) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Directory might not exist, skip
    }
    
    return files;
  }

  async optimizeCSS() {
    console.log('🎨 Optimizing CSS files...');
    
    for (const file of this.cssFiles) {
      try {
        const content = await fs.readFile(file, 'utf8');
        const optimized = this.minifyCSS(content);
        
        // Create backup
        await fs.writeFile(file + '.backup', content);
        
        // Write optimized version
        await fs.writeFile(file, optimized);
        
        console.log(`✓ Optimized ${file}`);
      } catch (error) {
        console.warn(`⚠️  Failed to optimize ${file}:`, error.message);
      }
    }
  }

  async optimizeJS() {
    console.log('⚡ Optimizing JavaScript files...');
    
    for (const file of this.jsFiles) {
      try {
        const content = await fs.readFile(file, 'utf8');
        const optimized = this.minifyJS(content);
        
        // Create backup
        await fs.writeFile(file + '.backup', content);
        
        // Write optimized version
        await fs.writeFile(file, optimized);
        
        console.log(`✓ Optimized ${file}`);
      } catch (error) {
        console.warn(`⚠️  Failed to optimize ${file}:`, error.message);
      }
    }
  }

  async optimizeHTML() {
    console.log('📄 Optimizing HTML files...');
    
    for (const file of this.htmlFiles) {
      try {
        const content = await fs.readFile(file, 'utf8');
        const optimized = this.minifyHTML(content);
        
        // Create backup
        await fs.writeFile(file + '.backup', content);
        
        // Write optimized version
        await fs.writeFile(file, optimized);
        
        console.log(`✓ Optimized ${file}`);
      } catch (error) {
        console.warn(`⚠️  Failed to optimize ${file}:`, error.message);
      }
    }
  }

  minifyCSS(css) {
    return css
      // Remove comments
      .replace(/\/\*[\s\S]*?\*\//g, '')
      // Remove unnecessary whitespace
      .replace(/\s+/g, ' ')
      // Remove whitespace around specific characters
      .replace(/\s*([{}:;,>+~])\s*/g, '$1')
      // Remove trailing semicolons
      .replace(/;}/g, '}')
      // Remove empty rules
      .replace(/[^{}]+{\s*}/g, '')
      .trim();
  }

  minifyJS(js) {
    return js
      // Remove single-line comments (but preserve URLs)
      .replace(/(?:^|\s)\/\/.*$/gm, '')
      // Remove multi-line comments
      .replace(/\/\*[\s\S]*?\*\//g, '')
      // Remove unnecessary whitespace
      .replace(/\s+/g, ' ')
      // Remove whitespace around operators and punctuation
      .replace(/\s*([=+\-*/%<>!&|^~?:;,(){}[\]])\s*/g, '$1')
      // Remove trailing semicolons before }
      .replace(/;}/g, '}')
      .trim();
  }

  minifyHTML(html) {
    return html
      // Remove HTML comments (but preserve conditional comments)
      .replace(/<!--(?!\s*(?:\[if [^\]]+]|<!|>))[\s\S]*?-->/g, '')
      // Remove unnecessary whitespace between tags
      .replace(/>\s+</g, '><')
      // Remove whitespace at the beginning and end of lines
      .replace(/^\s+|\s+$/gm, '')
      // Collapse multiple spaces into one
      .replace(/\s{2,}/g, ' ')
      .trim();
  }

  async generateManifest() {
    console.log('📋 Generating optimization manifest...');
    
    const manifest = {
      timestamp: new Date().toISOString(),
      optimized: {
        css: this.cssFiles.length,
        js: this.jsFiles.length,
        html: this.htmlFiles.length
      },
      files: {
        css: this.cssFiles,
        js: this.jsFiles,
        html: this.htmlFiles
      }
    };
    
    await fs.writeFile('optimization-manifest.json', JSON.stringify(manifest, null, 2));
    console.log('✓ Manifest generated');
  }
}

// Run optimization if called directly
if (require.main === module) {
  const optimizer = new AssetOptimizer();
  optimizer.optimize();
}

module.exports = AssetOptimizer;