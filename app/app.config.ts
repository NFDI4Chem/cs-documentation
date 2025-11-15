export default defineAppConfig({
  // Main Nuxt UI theme configuration
  ui: {
    // Color palette - primary and neutral/gray colors
    colors: {
      primary: 'cyan',
      neutral: 'slate'  // or 'gray' for default gray
    },
    
    // Component-specific color mode (usually not needed)
    // colorMode: {} 
  },

  // ✅ GLOBAL COLOR MODE - This is what controls the default
  colorMode: {
    preference: 'light',  // Set default to light mode
    fallback: 'light',     // Fallback if system preference fails
    classSuffix: '',       // Use 'dark' instead of 'dark-mode'
    storageKey: 'nuxt-color-mode' // LocalStorage key
  },

  // Footer styling
/*  footer: {
    slots: {
      root: 'border-t border-default',
      left: 'text-sm text-muted'
    }
  },
*/
  // SEO configuration
  seo: {
    siteName: 'NFDI4Chem CS-MS-Converter'
  },

  // Header configuration
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/NFDI4Chem/cs-ms-converter',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },

  // Footer content
  footer: {
    credits: `Funded By DFG under NFDI4Chem (Project Number: 441958208)`,
    colorMode: false,
    links: [{
      'to': 'https://webconverter.nfdi4chem.zih.tu-dresden.de/privacy_policy',
      'target': '_blank',
      'label': 'Privacy Policy'
    }, {
      'to': 'https://www.nfdi4chem.de/imprint/',
      'target': '_blank',
      'label': 'Impressum'
    }]
  }
})
