export default defineAppConfig({
  ui: {
    colors: {
      primary: 'cyan',
      neutral: 'slate'
    },
    colorMode: {
      preference: 'light'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'NFDI4Chem CS-MS-Converter'
  },
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
  footer: {
    credits: `Funded By DFG under NFDI4Chem (Project Number: 441958208)`,
    colorMode: false,
    links: [{
      'to': 'https://webconverter.nfdi4chem.zih.tu-dresden.de/privacy_policy',
      'target': '_blank',
      'label': 'Privacy Policy'
    },{
      'to': 'https://www.nfdi4chem.de/imprint/',
      'target': '_blank',
      'label': 'Impressum'
    }]
  }
})
