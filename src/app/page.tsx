
import Business from "./components/Business";
import Content from "./components/Content";
import HomeBanner from "./components/HomeBanner";
import Trust from "./components/Trust";

export default function Home() {
  return (
    <div className="">
        <HomeBanner />
         <Content />
         <Trust />
         <Business />
    </div>
  );
}
