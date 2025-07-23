if (typeof window !== 'undefined') {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (
      args[0]?.includes?.('removeChild') ||
      args[0]?.includes?.('webpack-internal') ||
      args[0]?.includes?.('mini-css-extract-plugin')
    ) {
      return;
    }
    originalConsoleError.apply(console, args);
  };

  if (process.env.NODE_ENV === 'development') {
    window.addEventListener('error', (event) => {
      if (
        event.message?.includes('removeChild') ||
        event.message?.includes('webpack-internal')
      ) {
        event.preventDefault();
        return false;
      }
    });
  }
}

export {}; 