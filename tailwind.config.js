module.exports = {
  important: true,
  darkMode: 'class',  
  content: [
    './src/**/*.js',
    './src/tailwind_extra.js',
    // './src/safelist.js'
  ],
  theme: {
    extend: {},
  },
  safelist: [
    {
      pattern: /bg-(.+)-(.+)/,
    },
    {
      pattern: /top-(.+)/,
    },
    {
      pattern: /left-(.+)/,
    },
    {
      pattern: /right-(.+)/,
    },
    {
      pattern: /bottom-(.+)/,
    },
    {
      pattern: /text-(.+)/,
    },
    {
      pattern: /font-(.+)/,
    },
    {
      pattern: /p-(.+)/,
    },
    {
      pattern: /p-(.+)-(.+)/,
    },
    {
      pattern: /m-(.+)-(.+)/,
    },
    {
      pattern: /mt-(.+)/,
    },
    {
      pattern: /h-(.+)/,
    },
    {
      pattern: /w-(.+)/,
    },
    {
      pattern: /flex-(.+)/,
    },
    {
      pattern: /min-(.+)-(.+)/,
    },
    {
      pattern: /max-(.+)-(.+)/,
    },
    {
      pattern: /border-(.+)/,
    },
    {
      pattern: /border-(.+)-(.+)/,
    },
    {
      pattern: /space-(.+)-(.+)/,
    },
    {
      pattern: /justify-(.+)/,
    },
    {
      pattern: /items-(.+)/,
    },
    {
      pattern: /grid-(.+)-(.+)/,
      variants: ['lg', 'xl', '2xl', '3xl'],
    },
    {
      pattern: /translate-(.+)-(.+)/,
    },
    {
      pattern: /scale-(.+)-(.+)/,
    },
    {
      pattern: /scale-(.+)/,
    }
  ],
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms'),
    // require('tailwind-safelist-generator')({
    //   path: 'safelist.js',
    //   patterns: [
    //     'text-{colors}',
    //     'bg-{colors}',
    //     'p-{gap}'
    //   ]
    // })
  ]
}
