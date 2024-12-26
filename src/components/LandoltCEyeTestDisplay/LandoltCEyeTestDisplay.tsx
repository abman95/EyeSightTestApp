import {APPLICATION_ICONS} from "../../constants/constants";
import './styles/style.css';
import './styles/styleMobile.css';
import './styles/styleTablet.css';

type TLandoltCEyeTestDisplayProps = {
    isDarkMode: boolean;
    fontSizeState: number;
    landoltRotationDegree: number;
}

function LandoltCEyeTestDisplay({
                                    isDarkMode,
                                    fontSizeState,
                                    landoltRotationDegree,
                                }: TLandoltCEyeTestDisplayProps) {

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
                    src={APPLICATION_ICONS.landoltCIcon}
                    alt="Landolt C Icon"
                />
            </div>
        </div>
    );
}

export default LandoltCEyeTestDisplay;