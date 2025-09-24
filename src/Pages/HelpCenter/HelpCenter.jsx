// components/HelpCenter.js
import ExploreSection from "@/Components/ExploreSection/ExploreSection";
import HelpCenterSearchBar from "../../components/HelpCenterSearchBar/HelpCenterSearchBar";
import LoginWarningBox from "../../components/LoginWarningBox/LoginWarningBox";
import "./HelpCenter.css";

const HelpCenter = () => {
  return (
    <div className="help-center">
      <div className="help-center container">
        <h2 className="text-align-center">Hi, how can we help?</h2>
        <HelpCenterSearchBar />
        <LoginWarningBox />
        <ExploreSection className="w-100" />
      </div>
    </div>
  );
};

export default HelpCenter;
