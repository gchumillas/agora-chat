let colors = {
  transparent: 'transparent',
  black: '#000000',
  white: '#FFFFFF',

  'red-50': '#FFEBEE',
  'red-100': '#FFCDD2',
  'red-200': '#EF9A9A',
  'red-300': '#E57373',
  'red-400': '#EF5350',
  'red-500': '#F44336',
  'red-600': '#E53935',
  'red-700': '#D32F2F',
  'red-800': '#C62828',
  'red-900': '#B71C1C',
  'red-a100': '#FF8A80',
  'red-a200': '#FF5252',
  'red-a400': '#FF1744',
  'red-a700': '#D50000',

  'pink-50': '#FCE4EC',
  'pink-100': '#F8BBD0',
  'pink-200': '#F48FB1',
  'pink-300': '#F06292',
  'pink-400': '#EC407A',
  'pink-500': '#E91E63',
  'pink-600': '#D81B60',
  'pink-700': '#C2185B',
  'pink-800': '#AD1457',
  'pink-900': '#880E4F',
  'pink-a100': '#FF80AB',
  'pink-a200': '#FF4081',
  'pink-a400': '#F50057',
  'pink-a700': '#C51162',

  'purple-50': '#F3E5F5',
  'purple-100': '#E1BEE7',
  'purple-200': '#CE93D8',
  'purple-300': '#BA68C8',
  'purple-400': '#AB47BC',
  'purple-500': '#9C27B0',
  'purple-600': '#8E24AA',
  'purple-700': '#7B1FA2',
  'purple-800': '#6A1B9A',
  'purple-900': '#4A148C',
  'purple-a100': '#EA80FC',
  'purple-a200': '#E040FB',
  'purple-a400': '#D500F9',
  'purple-a700': '#AA00FF',

  'deep-purple-50': '#EDE7F6',
  'deep-purple-100': '#D1C4E9',
  'deep-purple-200': '#B39DDB',
  'deep-purple-300': '#9575CD',
  'deep-purple-400': '#7E57C2',
  'deep-purple-500': '#673AB7',
  'deep-purple-600': '#5E35B1',
  'deep-purple-700': '#512DA8',
  'deep-purple-800': '#4527A0',
  'deep-purple-900': '#311B92',
  'deep-purple-a100': '#B388FF',
  'deep-purple-a200': '#7C4DFF',
  'deep-purple-a400': '#651FFF',
  'deep-purple-a700': '#6200EA',

  'indigo-50': '#E8EAF6',
  'indigo-100': '#C5CAE9',
  'indigo-200': '#9FA8DA',
  'indigo-300': '#7986CB',
  'indigo-400': '#5C6BC0',
  'indigo-500': '#3F51B5',
  'indigo-600': '#3949AB',
  'indigo-700': '#303F9F',
  'indigo-800': '#283593',
  'indigo-900': '#1A237E',
  'indigo-a100': '#8C9EFF',
  'indigo-a200': '#536DFE',
  'indigo-a400': '#3D5AFE',
  'indigo-a700': '#304FFE',

  'blue-50': '#E3F2FD',
  'blue-100': '#BBDEFB',
  'blue-200': '#90CAF9',
  'blue-300': '#64B5F6',
  'blue-400': '#42A5F5',
  'blue-500': '#2196F3',
  'blue-600': '#1E88E5',
  'blue-700': '#1976D2',
  'blue-800': '#1565C0',
  'blue-900': '#0D47A1',
  'blue-a100': '#82B1FF',
  'blue-a200': '#448AFF',
  'blue-a400': '#2979FF',
  'blue-a700': '#2962FF',

  'light-blue-50': '#E1F5FE',
  'light-blue-100': '#B3E5FC',
  'light-blue-200': '#81D4FA',
  'light-blue-300': '#4FC3F7',
  'light-blue-400': '#29B6F6',
  'light-blue-500': '#03A9F4',
  'light-blue-600': '#039BE5',
  'light-blue-700': '#0288D1',
  'light-blue-800': '#0277BD',
  'light-blue-900': '#01579B',
  'light-blue-a100': '#80D8FF',
  'light-blue-a200': '#40C4FF',
  'light-blue-a400': '#00B0FF',
  'light-blue-a700': '#0091EA',

  'cyan-50': '#E0F7FA',
  'cyan-100': '#B2EBF2',
  'cyan-200': '#80DEEA',
  'cyan-300': '#4DD0E1',
  'cyan-400': '#26C6DA',
  'cyan-500': '#00BCD4',
  'cyan-600': '#00ACC1',
  'cyan-700': '#0097A7',
  'cyan-800': '#00838F',
  'cyan-900': '#006064',
  'cyan-a100': '#84FFFF',
  'cyan-a200': '#18FFFF',
  'cyan-a400': '#00E5FF',
  'cyan-a700': '#00B8D4',

  'teal-50': '#E0F2F1',
  'teal-100': '#B2DFDB',
  'teal-200': '#80CBC4',
  'teal-300': '#4DB6AC',
  'teal-400': '#26A69A',
  'teal-500': '#009688',
  'teal-600': '#00897B',
  'teal-700': '#00796B',
  'teal-800': '#00695C',
  'teal-900': '#004D40',
  'teal-a100': '#A7FFEB',
  'teal-a200': '#64FFDA',
  'teal-a400': '#1DE9B6',
  'teal-a700': '#00BFA5',

  'green-50': '#E8F5E9',
  'green-100': '#C8E6C9',
  'green-200': '#A5D6A7',
  'green-300': '#81C784',
  'green-400': '#66BB6A',
  'green-500': '#4CAF50',
  'green-600': '#43A047',
  'green-700': '#388E3C',
  'green-800': '#2E7D32',
  'green-900': '#1B5E20',
  'green-a100': '#B9F6CA',
  'green-a200': '#69F0AE',
  'green-a400': '#00E676',
  'green-a700': '#00C853',

  'light-green-50': '#F1F8E9',
  'light-green-100': '#DCEDC8',
  'light-green-200': '#C5E1A5',
  'light-green-300': '#AED581',
  'light-green-400': '#9CCC65',
  'light-green-500': '#8BC34A',
  'light-green-600': '#7CB342',
  'light-green-700': '#689F38',
  'light-green-800': '#558B2F',
  'light-green-900': '#33691E',
  'light-green-a100': '#CCFF90',
  'light-green-a200': '#B2FF59',
  'light-green-a400': '#76FF03',
  'light-green-a700': '#64DD17',

  'lime-50': '#F9FBE7',
  'lime-100': '#F0F4C3',
  'lime-200': '#E6EE9C',
  'lime-300': '#DCE775',
  'lime-400': '#D4E157',
  'lime-500': '#CDDC39',
  'lime-600': '#C0CA33',
  'lime-700': '#AFB42B',
  'lime-800': '#9E9D24',
  'lime-900': '#827717',
  'lime-a100': '#F4FF81',
  'lime-a200': '#EEFF41',
  'lime-a400': '#C6FF00',
  'lime-a700': '#AEEA00',

  'yellow-50': '#FFFDE7',
  'yellow-100': '#FFF9C4',
  'yellow-200': '#FFF59D',
  'yellow-300': '#FFF176',
  'yellow-400': '#FFEE58',
  'yellow-500': '#FFEB3B',
  'yellow-600': '#FDD835',
  'yellow-700': '#FBC02D',
  'yellow-800': '#F9A825',
  'yellow-900': '#F57F17',
  'yellow-a100': '#FFFF8D',
  'yellow-a200': '#FFFF00',
  'yellow-a400': '#FFEA00',
  'yellow-a700': '#FFD600',

  'amber-50': '#FFF8E1',
  'amber-100': '#FFECB3',
  'amber-200': '#FFE082',
  'amber-300': '#FFD54F',
  'amber-400': '#FFCA28',
  'amber-500': '#FFC107',
  'amber-600': '#FFB300',
  'amber-700': '#FFA000',
  'amber-800': '#FF8F00',
  'amber-900': '#FF6F00',
  'amber-a100': '#FFE57F',
  'amber-a200': '#FFD740',
  'amber-a400': '#FFC400',
  'amber-a700': '#FFAB00',

  'orange-50': '#FFF3E0',
  'orange-100': '#FFE0B2',
  'orange-200': '#FFCC80',
  'orange-300': '#FFB74D',
  'orange-400': '#FFA726',
  'orange-500': '#FF9800',
  'orange-600': '#FB8C00',
  'orange-700': '#F57C00',
  'orange-800': '#EF6C00',
  'orange-900': '#E65100',
  'orange-a100': '#FFD180',
  'orange-a200': '#FFAB40',
  'orange-a400': '#FF9100',
  'orange-a700': '#FF6D00',

  'deep-orange-50': '#FBE9E7',
  'deep-orange-100': '#FFCCBC',
  'deep-orange-200': '#FFAB91',
  'deep-orange-300': '#FF8A65',
  'deep-orange-400': '#FF7043',
  'deep-orange-500': '#FF5722',
  'deep-orange-600': '#F4511E',
  'deep-orange-700': '#E64A19',
  'deep-orange-800': '#D84315',
  'deep-orange-900': '#BF360C',
  'deep-orange-a100': '#FF9E80',
  'deep-orange-a200': '#FF6E40',
  'deep-orange-a400': '#FF3D00',
  'deep-orange-a700': '#DD2C00',

  'brown-50': '#EFEBE9',
  'brown-100': '#D7CCC8',
  'brown-200': '#BCAAA4',
  'brown-300': '#A1887F',
  'brown-400': '#8D6E63',
  'brown-500': '#795548',
  'brown-600': '#6D4C41',
  'brown-700': '#5D4037',
  'brown-800': '#4E342E',
  'brown-900': '#3E2723',

  'grey-50': '#FAFAFA',
  'grey-100': '#F5F5F5',
  'grey-200': '#EEEEEE',
  'grey-300': '#E0E0E0',
  'grey-400': '#BDBDBD',
  'grey-500': '#9E9E9E',
  'grey-600': '#757575',
  'grey-700': '#616161',
  'grey-800': '#424242',
  'grey-900': '#212121',

  'blue-grey-10': '#F4F7F9',
  'blue-grey-50': '#ECEFF1',
  'blue-grey-100': '#CFD8DC',
  'blue-grey-200': '#B0BEC5',
  'blue-grey-300': '#90A4AE',
  'blue-grey-400': '#78909C',
  'blue-grey-500': '#607D8B',
  'blue-grey-600': '#546E7A',
  'blue-grey-700': '#455A64',
  'blue-grey-800': '#37474F',
  'blue-grey-900': '#263238'
};

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: colors,
    fontFamily: {
      'sans': 'SF, Helvetica, Arial, sans-serif',
      'mono': 'SFMono, ui-monospace'
    },
    fontSize: {
      xxs: '0.625rem', // 10px
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.75rem', // 28px
      '4xl': '2rem', // 32px
      '5xl': '2.25rem' // 36px
    },
    borderRadius: {
      none: '0',
      DEFAULT: '4px',
      md: '6px',
      lg: '8px',
      xl: '12px',
      xxl: '16px',
      full: '9999px'
    },
    extend: {
      borderWidth: {
        '3': '3px'
      },
      minHeight: {
        'input': '2.375rem'
      },
      height: {
        'checkbox': '1.125rem',
        'input': '2.375rem',
        '18': '4.5rem',
        '62': '15.5rem',
        '98': '25rem',
        '100': '26.5rem',
        '180': '45rem'
      },
      width: {
        'checkbox': '1.125rem',
        'logo': '7.75rem'
      },
      gridTemplateColumns: {
        'auto-auto': 'auto auto'
      },
      backgroundImage: () => ({
        'login-splash': 'url(/public/images/login-splash.png)'
      })
    }
  },
  variants: {
    fill: ['hover', 'focus'],
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
