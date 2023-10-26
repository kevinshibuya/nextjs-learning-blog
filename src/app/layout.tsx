import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./_components/footer/footer";
import styles from "./layout.module.scss";
import "../styles/global.scss";
import Header from "./_components/header/header";

const metadataContent = {
  title: "Next.js Learning Blog",
  description:
    "Join me on a discovery mission into the dynamic Next.js ecosystem. I'll guide you through practical learning, tutorials, and tech trends. Whether you're a budding developer or a tech enthusiast, let's explore Next.js together.",
};

export const metadata: Metadata = {
  title: metadataContent.title,
  description: metadataContent.description,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: "https://shibuya-nextjs-learning-blog.vercel.app/",
    title: metadataContent.title,
    description: metadataContent.description,
    siteName: metadataContent.title,
    images: [
      {
        url: `https://og-image.vercel.app/${encodeURI(
          metadataContent.title
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL("https://og-image.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className={styles.container}>{children}</div>
        <Footer />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
