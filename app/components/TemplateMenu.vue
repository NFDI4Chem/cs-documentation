<template>
  <UDropdownMenu
    v-slot="{ open }"
    :modal="false"
    :items="[{
      label: 'NFDI4Chem-Consortium',
      to: 'https://www.nfdi4chem.de/'
    }, {
      label: 'Web service',
      to: 'https://webconverter.nfdi4chem.zih.tu-dresden.de/'
    }, {
      label: 'Documentation',
      to: 'https://nfdi4chem.github.io/cs-documentation/',
      color: 'primary',
      checked: true,
      type: 'checkbox'
    }, {
      label: 'Open-API',
      to: 'https://converterapi.nfdi4chem.zih.tu-dresden.de/api'
    }, {
      label: 'Contact',
      to: 'https://webconverter.nfdi4chem.zih.tu-dresden.de/contact_info'
    }]"
    :content="{ align: 'start' }"
    :ui="{ content: 'min-w-fit' }"
    size="xs"
  >
    <UButton
      label="Docs"
      variant="subtle"
      trailing-icon="i-lucide-chevron-down"
      size="xs"
      class="-mb-[6px] font-semibold rounded-full truncate"
      :class="[open && 'bg-primary/15']"
      :ui="{
        trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' ')
      }"
    />
  </UDropdownMenu>
</template>
