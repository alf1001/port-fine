// app/theme-script.tsx
export function ThemeInitScript() {
  // Default: light. Kalau localStorage === 'dark' baru set dark.
  const code = `
  try {
    var t = localStorage.getItem('theme');
    if (t === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark'); // pastikan bukan dark
    }
  } catch (e) {}
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
