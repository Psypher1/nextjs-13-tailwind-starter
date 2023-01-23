import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function Meta({ pageMeta }) {
	const router = useRouter();
	const meta = {
		title: "Nextjs 13 Tailwind Stater",
		description: "Initial setup for things I constantly use with Nextjs",
		// canonical: `http://localhost:3000${router.asPath}`,
		...pageMeta,
	};
	const SEO = {
		title: meta.title,
		description: meta.description,

		openGraph: {
			title: meta.title,
			description: meta.description,
		},
	};
	return <NextSeo {...SEO} />;
}
