import './globals.css'

export const metadata = {
  title: 'Mote construction',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
