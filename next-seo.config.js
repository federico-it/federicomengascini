/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Federico Mengascini",
  titleTemplate: "%s | federico-mengascini",
  defaultTitle: "Federico Mengascini",
  description: "Federico Mengascini WebSite",
  canonical: "https://federicomengascini.com",
  openGraph: {
    url: "https://federicomengascini.com",
    title: "Federico Mengascini",
    description: "Federico Mengascini WebSite",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextarter-chakra.sznm.dev og-image",
      },
    ],
    site_name: "Federico Mengascini",
  },
  twitter: {
    handle: "@federicomenga",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
