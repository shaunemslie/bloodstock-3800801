import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MetaService {
  changeTheme(color: string[], mode: 'light' | 'dark' | null) {
    if (mode)  return document.querySelector(`meta[name=theme-color][media="(prefers-color-scheme: ${color[1]})"]`)?.setAttribute('content', color[1]);
    document.querySelector('meta[name=theme-color][media="(prefers-color-scheme: light)"]')?.setAttribute('content', color[1]);
    document.querySelector('meta[name=theme-color][media="(prefers-color-scheme: dark)"]')?.setAttribute('content', color[2]);
    return;
  }
}
