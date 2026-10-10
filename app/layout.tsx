import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { poppins } from './fonts';

export const metadata: Metadata = {
  title: 'Goloborodko web dev',
  description:
    'Goloborodko Vitaly web developer. I write codes for cross-browser and adaptive websites of any complexity using the React JS and progressive libraries and tools. I use Next JS to create more interactive and user-friendly web applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} h-full antialiased `}
    >
      <body className="font-poppins min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {/* <main className="flex flex-1 flex-col text-base bg-white dark:bg-[#1a1a1a] text-gray-600 dark:text-[#7dacd6]"> */}
            {children}
            {/* </main> */}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
