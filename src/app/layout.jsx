import "./globals.css";
import Head from "next/head"; 





export const metadata = {
  title: "My Portfolio",
  icons: {
    icon: '/favicon.png',
  }
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-purple-600 scrollbar-thumb-rounded-full">
      <Head> 
      
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
       
        
      </Head>
      <body className="bg-gray-900 font text-white antialiased">
        
        {children}</body>
    </html>
  );
}

