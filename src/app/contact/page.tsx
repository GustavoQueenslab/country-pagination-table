import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className=" relative flex flex-col min-h-screen bg-primary">
      <div className="mb-32">
        <ContactForm />
      </div>
      <div className="absolute bottom-0  w-full">
        <Footer />
      </div>
    </div>
  );
}
