---
seo:
  title: NFDI4Chem MS Converter Documentation
  description: Documentation of CS-MS-Converter
---
::u-page-hero{class="w-full max-w-none dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---

#top
:hero-background

#title
[NFDI4Chem]{.text-primary} Converter Service 

#description
The NFDI4Chem Converter Service establishes a unified framework for the deployment of modular, chemistry-specific data converters, thereby facilitating streamlined data transformation, validation, and compliance with open standards. Developed using Flask and conforming to the OpenAPI specification, the service exposes a [RESTful API](https://converterapi.nfdi4chem.zih.tu-dresden.de/api) to enable seamless integration with other components of the NFDI4Chem infrastructure. Its deployment is optimized through containerization as a Docker image, complemented by Helm charts to support efficient orchestration within Kubernetes environments. At present, a converter for mass spectrometry data is available, distributed via Docker and Helm to ensure reproducibility and ease of integration. Future iterations will extend support to additional data formats.

#links
  :::u-button
  ---
  to: /getting-started
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  To Documentation
  :::

  :::u-button
  ---
  icon: mdi:web
  color: neutral
  variant: outline
  size: xl
  to: https://webconverter.nfdi4chem.zih.tu-dresden.de/
  target: _blank
  ---
  Use Webconverter
  :::

#default

::

::u-page-section{class="dark:bg-neutral-950"}


#features
  

  :::u-page-feature
  ---
  icon: devicon:docker
  ---
  #title
  Docker Orchestration

  #description
  Run fully orchestrated Docker containers for conversion — simple, fast, and effortless.
  :::


  :::u-page-feature
  ---
  icon: mdi:kubernetes
  ---
  #title
  Kubernetes Enabled

  #description
  Deploy the Converter Service on Kubernetes with Helm Charts — simple and scalable.
  :::


  :::u-page-feature
  ---
  icon: material-symbols:database
  ---
  #title
  S3-Enabled Converter

  #description
  Handle larger files effortlessly with the S3-enabled Converter Service.
  :::


  :::u-page-feature
  ---
  icon: hugeicons:customize
  ---
  #title
  Customize

  #description
  Easily customize and add parameters for conversion to mzML. [Click here for More info](https://proteowizard.sourceforge.io/tools/msconvert.html)
  :::


  :::u-page-feature
  ---
  icon: iconoir:new-tab
  ---
  #title
  Additional Features

  #description
  Validate converted mzML files, correct external ones, and extract metadata with ease.
  :::

  
  :::u-page-feature
  ---
  icon: file-icons:cwl
  ---
  #title
  Common Workflow Language (CWL) Enabled

  #description
  Converter Service available in a CWL-compatible version.
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: To Documentation
      to: '/getting-started'
      trailingIcon: i-lucide-arrow-right
    - label: View on GitHub
      to: 'https://github.com/NFDI4Chem/cs-ms-converter'
      target: _blank
      variant: subtle
      icon: i-simple-icons-github
  title: Ready to deploy the mass spectrometry converter service?
  description:
  class: dark:bg-neutral-950
  ---
  :stars-bg
  :::
::
