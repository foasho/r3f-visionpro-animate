import { Canvas } from "@react-three/fiber";
import { OrbitControls, GizmoHelper, GizmoViewport, Stage, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { AppleVisionPro } from "./AppleVisionPro";
import { motion } from "framer-motion"

function App() {
  return (
    <div style={{ height: "100dvh", width: "100dvw", position: "relative" }}>
      <Canvas shadows>
        <ambientLight intensity={1}/>
        <pointLight position={[3, 3, 3]}/>
        <directionalLight position={[-2, 3, 5]}/>
        <Stage>
          <Suspense fallback={null}>
            <AppleVisionPro position={[0, 1, 0]} rotation={[
              0, - Math.PI/2, 0
            ]} />
          </Suspense>
        </Stage>
        <OrbitControls />
        <Environment preset="city" />
        <GizmoHelper alignment="top-right" margin={[75, 75]}>
          <GizmoViewport labelColor="white" axisHeadScale={1} />
        </GizmoHelper>
      </Canvas>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="md:text-6xl text-4xl w-full text-center font-bold absolute top-8"
      >
          {"Apple Vision Pro"}
      </motion.div>
    </div>
  )
}

export default App
