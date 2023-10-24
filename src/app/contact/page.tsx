import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className=" relative flex flex-col min-h-screen bg-primary">
      <ContactForm />
      <Footer />
    </div>
  );
}
