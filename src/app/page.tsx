import FocusAreas from "@/components/FocusAreas";
import Introduction from "@/components/Introduction";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="">
      <Main />
      <Introduction />
      <FocusAreas />
      <Introduction />
    </div>
  );
}
