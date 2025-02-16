import AboutMe from "./components/about_me/AboutMe";
import ScrollTriggerLayout from "./components/parallax/parallax";

export default function Home() {
  return (
    <div className="contents">
      <ScrollTriggerLayout />
      <AboutMe />
    </div>
  );
}
