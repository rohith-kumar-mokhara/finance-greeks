/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./overlay.scss";
import close from "../../assets/icons/close.svg";

type OverlayProps = {
  children: React.ReactNode;
  header?: Header;
  closeFunction: () => void;
  theme?: "dark" | "light";
};

type Header = {
  title: string;
  icon?: string;
};

const Overlay: React.FC<OverlayProps> = ({
  header,
  closeFunction,
  children,
  theme,
}) => {
  // const {device} = useSelector((state: RootState) => state.windowSize)
  const device = "laptop";

  const clickOutside = (e: any) => {
    if (e.target.classList.contains("overlay-container")) {
      closeFunction();
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutside);

    return () => {
      document.removeEventListener("click", clickOutside);
    };
  }, []);

  return (
    <div className={`overlay-container ${theme} ${device}`}>
      <div className={`overlay-box ${device}`}>
        {header ? (
          <div className="header">
            <div className="heading">
              {header.icon ? (
                <img
                  className="header-icon"
                  src={header.icon}
                  alt="title-icon"
                />
              ) : null}
              <div className="title">{header.title}</div>
            </div>
            <div className="close-btn-container">
              <img
                className="close-icon"
                onClick={closeFunction}
                alt="Close"
                src={close}
              />
            </div>
          </div>
        ) : null}
        <div className="children">{children}</div>
      </div>
    </div>
  );
};
export default Overlay;
