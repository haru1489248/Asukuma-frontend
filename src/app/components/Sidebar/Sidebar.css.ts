import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/common.css';

export const sidebar = style({
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100vh',
    width: '350px',
    boxShadow: '-2px 0 4px rgba(0, 0, 0, 0.1)',
    zIndex: 50,
    transform: 'translateX(100%)',
    transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    backgroundColor: 'white',
});

export const sidebarOpen = style({
    transform: 'translateX(0)',
});

export const overlay = style({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明の黒
    zIndex: 40, // サイドバーより下、他の要素より上
    opacity: 0,
    visibility: 'hidden',
    transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    // ボタンのデフォルトスタイルをリセット
    border: 'none',
    padding: 0,
    background: 'none',
    cursor: 'pointer',
});

export const overlayVisible = style({
    opacity: 1,
    visibility: 'visible',
});

export const closeButton = style({
    fontSize: vars.fontSize.xl,
    fontWeight: vars.fontWeight.lightNormal,
    color: vars.color.textGrey,
    cursor: 'pointer',
})
