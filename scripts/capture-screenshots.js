const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function captureScreenshots() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  // Set viewport size for consistent screenshots
  await page.setViewport({ width: 1400, height: 1080 });
  
  // Create screenshots directory
  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }
  
  // Demo files to capture
  const demos = [
    'index.html',
    'component-index.html', 
    'input-components.html',
    'navigation-components.html',
    'feedback-components.html',
    'block-visualizations.html',
    'terminal-components.html',
    'file-browser.html',
    'image-components.html',
    'button-grid-alignment-test.html'
  ];
  
  // Themes to capture
  const themes = [
    'github-dark',
    'github-light', 
    'amber',
    'gruvbox',
    'monochrome',
    'monokai',
    'newspaper',
    'sakura',
    'synthwave',
    'vt220'
  ];
  
  for (const demo of demos) {
    console.log(`Capturing ${demo}...`);
    
    const demoPath = path.join(__dirname, '..', 'html-demos', demo);
    await page.goto(`file://${demoPath}`);
    
    // Wait for page to load completely
    await page.waitForTimeout(2000);
    
    // Capture default theme (github-dark)
    await page.screenshot({
      path: path.join(screenshotsDir, `${demo.replace('.html', '')}-github-dark.png`),
      fullPage: true
    });
    
    // Capture a few key theme variations
    const keyThemes = ['github-light', 'synthwave', 'amber', 'newspaper'];
    
    for (const theme of keyThemes) {
      // Change theme
      await page.select('#theme-select', theme);
      await page.waitForTimeout(1000);
      
      // Capture screenshot
      await page.screenshot({
        path: path.join(screenshotsDir, `${demo.replace('.html', '')}-${theme}.png`),
        fullPage: true
      });
    }
  }
  
  await browser.close();
  console.log('✅ All screenshots captured!');
}

// Run if called directly
if (require.main === module) {
  captureScreenshots().catch(console.error);
}

module.exports = { captureScreenshots };
