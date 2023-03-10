import Head from "next/head";
import { url } from "pages/_app";

type Props = {
  title: string;
  description: string;
  canonical: string;
};

export function CustomHead({ title, description, canonical }: Props) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      <link rel="alternate" hrefLang="en" href={"${url}"} />
      <link rel="alternate" hrefLang="ru" href={`${url}/ru`} />
      <link rel="alternate" hrefLang="uz" href={`${url}/uz`} />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
}
