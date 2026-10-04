import "./AnimatedBackground.css";

import frame8 from "../assets/images/Property_1_Frame_8.png";
import frame9 from "../assets/images/Property_1_Frame_9.png";
import frame10 from "../assets/images/Property_1_Frame_10.png";

// The order the glow moves in. Going back down (9, then 8)
// makes the loop smooth.
const FRAMES = [frame8, frame9, frame10, frame9, frame8];

export default function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      {FRAMES.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="animated-bg__layer"
          style={{ animationDelay: `${i * 4}s` }}
        />
      ))}
    </div>
  );
}