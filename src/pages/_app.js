import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</>
	);
}
