import About from "@/components/home/about";
import FaqSection from "@/components/home/faq";
import Hero from "@/components/home/hero";
import Mentor from "@/components/home/mentor";
import MentorHighlight from "@/components/home/mentorHighlight";
import Testimonial from "@/components/home/testimonial";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      <Hero/>
      <About/>
      <Mentor/>
      <Testimonial/>
      <FaqSection/>
      <MentorHighlight/>
    </div>
  );
}