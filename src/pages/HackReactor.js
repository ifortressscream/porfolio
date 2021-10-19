import Navbar from "../component/hack-reactor/Navbar";
import StartingContent from "../component/hack-reactor/StartingContent";
import SecondContent from "../component/hack-reactor/SecondContent";
import UnderLine from "../component/hack-reactor/UnderLine";
import ThirdContent from "../component/hack-reactor/ThirdContent";
import FourthContent from "../component/hack-reactor/FourthContent";
import FifthContent from "../component/hack-reactor/FifthContent";
import SixthContent from "../component/hack-reactor/SixthContent";
import SeventhContent from "../component/hack-reactor/SeventhContent";
import EightContent from "../component/hack-reactor/EightContent";
import NinethContent from "../component/hack-reactor/NinethContent";
import TenthTitle from "../component/hack-reactor/TenthTitle";
import EleventhContent from "../component/hack-reactor/EleventhContent";
import TwelvethContent from "../component/hack-reactor/TwelvethContent";

function HackReactor() {
  return (
    <div>
      {/* NAVBAR */}
      <div className="h-28">
        <Navbar />
      </div>
      {/* 1st Content */}
      <StartingContent />
      {/* 2nd Content */}
      <SecondContent />
      {/* UnderLine */}
      <UnderLine />
      {/* 3rd Content */}
      <ThirdContent />
      {/* 4th Content */}
      <FourthContent />
      {/* 5th Content */}
      <FifthContent />
      {/* 6th Content */}
      <SixthContent />
      {/* 7th Content */}
      <SeventhContent />
      {/* 8th Content */}
      <EightContent />
      {/* 9th Content */}
      <NinethContent />
      {/* 10th Content */}
      <TenthTitle />
      {/* 11th Content */}
      <EleventhContent />
      {/* 12th Content */}
      <TwelvethContent />
    </div>
  );
}

export default HackReactor;
