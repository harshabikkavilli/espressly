/* eslint-disable perfectionist/sort-imports */
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { LocalizationProvider } from 'src/components/locales';
import ProgressBar from 'src/components/progress-bar';
import { SettingsDrawer, SettingsProvider } from 'src/components/settings';
import 'src/global.css';
import { AuthProvider } from 'src/providers/AuthProvider';
// ----------------------------------------------------------------------
import ThemeProvider from 'src/theme';
import { primaryFont } from 'src/theme/typography';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={primaryFont.className}>
      <body>
        <AuthProvider>
          <LocalizationProvider>
            <SettingsProvider
              defaultSettings={{
                themeMode: 'light', // 'light' | 'dark'
                themeDirection: 'ltr', //  'rtl' | 'ltr'
                themeColorPresets: 'default', // 'default' | 'preset01' | 'preset02' | 'preset03' | 'preset04' | 'preset05'
              }}
            >
              <ThemeProvider>
                <MotionLazy>
                  <ProgressBar />
                  <SettingsDrawer />
                  {children}
                </MotionLazy>
              </ThemeProvider>
            </SettingsProvider>
          </LocalizationProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
