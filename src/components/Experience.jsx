import { Canvas } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { useMemo } from "react";
import World from "./World";

// const Controls = {
//   forward: "forward",
//   back: "back",
//   left: "left",
//   right: "right",
//   jump: "jump",
// };
export default function Experience() {
  //   const map = useMemo(
  //     () => [
  //       { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
  //       { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
  //       { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
  //       { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
  //       { name: Controls.jump, keys: ["Space"] },
  //     ],
  //     [],
  //   );
  return (
    // <KeyboardControls map={map}>
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
      <World />
    </Canvas>
    // </KeyboardControls>
  );
}
