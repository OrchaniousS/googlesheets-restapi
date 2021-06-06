import { Popup } from "semantic-ui-react";

export default function CustomPopup({ type, content, children }) {
  return (
    <Popup
      inverted
      position={type === "top" ? "top center" : "bottom center"}
      content={content}
      trigger={children}
    />
  );
}
