import { Header } from "./layout/header/header";
import { FooterForm } from "./layout/form/form";

type Props = {
  children: React.ReactNode;
  layoutColor?: string;
};

export function Layout({ children, layoutColor }: Props) {
  return (
    <div className="wrapper" style={{ backgroundColor: `rgb(${layoutColor})` }}>
      <Header />
      <main style={{ flex: "1 1 auto" }}>{children}</main>
      <FooterForm />
    </div>
  );
}
