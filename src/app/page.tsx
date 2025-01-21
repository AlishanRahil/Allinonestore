import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showproducts from "./components/Showproducts";
import GoalBanner from "./components/Goalnbanner";
import FeedbackSection from "./components/Feedback";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Showproducts/>
    <GoalBanner/>
    <FeedbackSection/>
    </>
  );
}
