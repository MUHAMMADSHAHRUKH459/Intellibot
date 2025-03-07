export {}; // Ensures this file is treated as a module

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}
