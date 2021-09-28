import "./styles/customStyle.css";
import Header from "./component/Header";
import ProfileBody from "./component/ProfileBody";
import FirstContent from "./component/FirstContent";
import SecondContent from "./component/SecondContent";
import ThirdContent from "./component/ThirdContent";
import FourthContent from "./component/FourthContent";
import FifthContent from "./component/FifthContent";
import SixthContent from "./component/SixthContent";
import SeventhContent from "./component/SeventhContent";

function App() {
  return (
    <div>
      {/* Header */}
      <Header />
      {/* Profile Body */}
      <ProfileBody />
      {/* FirstContent */}
      <FirstContent />
      <div className="h-full">
        {/* SecondContent */}
        <SecondContent />
      </div>
      {/* ThirdContent */}
      <ThirdContent />
      {/* FourthContent */}
      <FourthContent />
      {/* FifthContent */}
      <FifthContent />
      {/* SixthContent */}
      <SixthContent />
      {/* SeventhContent */}
      <SeventhContent />
    </div>
  );
}

export default App;
