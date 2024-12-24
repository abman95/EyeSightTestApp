import {applicationIcons} from "../../constants/constants";
import './styles/style.css';
import './styles/styleMobile.css';
import './styles/styleTablet.css';

type LandoltCEyeTestDisplayProps = {
    isDarkMode: boolean;
    fontSizeState: number;
    landoltRotationDegree: number;
}

function LandoltCEyeTestDisplay({
                                    isDarkMode,
                                    fontSizeState,
                                    landoltRotationDegree,
                                }: LandoltCEyeTestDisplayProps) {

    return (
        <div className="landoltCEyeTestDisplayContainer">
            <div className="landoltCEyeTestIcon">
                <img
                    data-dark-mode={isDarkMode}
                    className="landoltCIcon"
                    style={{
                        transform: `rotate(${landoltRotationDegree}deg)`,
                        width: `${fontSizeState}vw`,
                        height: `${fontSizeState}vw`,
                    }}
                    src={applicationIcons.landoltCIcon}
                    alt="Landolt C Icon"
                />
            </div>
        </div>
    );
}

export default LandoltCEyeTestDisplay;