import React from "react";
import { DangerIcon, InfoIcon, SuccessIcon, WarningIcon } from "../../assets/Icons";

const positionStyle = {
  rightTop: "right-5",
  rightBottom: "right-5 bottom-20",
  leftTop: "left-5",
  leftBottom: "left-5 bottom-20",
};

const toastrIcon = {
  success: <SuccessIcon width={24} />,
  info: <InfoIcon width={24} />,
  warning: <WarningIcon width={24} />,
  danger: <DangerIcon width={24} />,
};

const textColor = {
  success: "green",
  info: "blue",
  warning: "orange",
  danger: "red",
};

const ToastrMessage: React.FC<Props> = ({
  type,
  text,
  visible = false,
  position = "rightBottom",
}) => {
  return (
    <div
      className={`${visible ? "opacity-100" : "opacity-0"} ${positionStyle[position]}
      bg-${textColor[type]}-500 toastr-message`}
    >
      <div className={`text-${textColor[type]}-500 rounded-full bg-white mr-3`}>
        {toastrIcon[type]}
      </div>
      <div className="text-white max-w-xs">{text}</div>
    </div>
  );
};

interface Props {
  type: ToastrType;
  text: string;
  visible: boolean;
  position?: PositionType;
}

type ToastrType = "success" | "info" | "warning" | "danger";

type PositionType = "rightTop" | "rightBottom" | "leftTop" | "leftBottom";

export default ToastrMessage;
