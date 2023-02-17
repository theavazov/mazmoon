import { CustomHead } from "components/head";
import { Layout } from "components/layout";
import { url } from "./_app";

export default function HomePage() {
  return (
    <>
      <CustomHead
        title="Mazmoon Group"
        description="Mazmoon Group - Мы готовим дизайн"
        canonical={url}
      />
      <Layout layoutColor="var(--dark-violet)">
        <p></p>
      </Layout>
    </>
  );
}
