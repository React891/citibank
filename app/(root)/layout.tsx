import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
