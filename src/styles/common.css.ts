import { createGlobalTheme } from '@vanilla-extract/css';

// グローバルテーマの定義（CSS変数として定義）
export const vars = createGlobalTheme(':root', {
  color: {
    textGrey: '#666666',
    backgroundGrey: '#f0f0f0',
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
  },
  fontWeight: {
    thin: '100',
    light: '200',
    lightNormal: '250',
    normal: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
  },
  // 必要に応じてグローバル変数を追加
});
