import './globals.css'

export const metadata = {
  title: 'Mote Building and Plastering',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
