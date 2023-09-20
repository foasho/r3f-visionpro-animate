import { useGLTF, Outlines, useCursor } from "@react-three/drei";
import { Euler, Vector3 } from "three";
import { useSpring, animated, config } from "@react-spring/three";
import { useState } from "react";
import { getVec3 } from "./utils";
import { useRecoilState } from "recoil";
import { activeStateAtom } from "./atoms/state";

type AppleVisionProProps = {
  position?: [number, number, number] | Vector3;
  rotation?: [number, number, number] | Euler;
  scale?: [number, number, number] | Vector3 | number;
  castShadow?: boolean;
  receiveShadow?: boolean;
}
export const AppleVisionPro = (
  { position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1], castShadow = true, receiveShadow = true }: AppleVisionProProps
) => {
  const { nodes, materials } = useGLTF('/apple_vision_pro.glb');
  const [hovered, setHovered] = useState<string | null>(null);
  const [active, setActive] = useRecoilState(activeStateAtom);

  const p = getVec3(position);

  const { position: pos } = useSpring({
    position: (active && active === "headset") ? [-0.1, 0, 0]: [0, 0, 0],
    config: config.molasses
  });

  const { s } = useSpring({
    s: (active && active === "headset") ? 1.2 : 1,
    config: config.wobbly
  });

  useCursor(hovered? true: false);

  return (
    <animated.group
      position={pos}
      rotation={rotation}
      scale={scale}
    >
      <group position={[-0.003, 0.047, -0.001]} rotation={[1.398, -0.379, 0.383]} scale={0.03}>
        <group scale={100}>
          <group rotation={[-1.391, 0.433, 0.282]}>
            <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <mesh geometry={nodes.Object_14.geometry} material={materials.FAJMtZQLswdvuhO} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_16.geometry} material={materials.VxpiigirruNOshp} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_18.geometry} material={materials.FFhjkYvBaxmGeMa} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_20.geometry} material={materials.ZwEHHHBVBsIGFLj} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_22.geometry} material={materials.FFhjkYvBaxmGeMa} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_25.geometry} material={materials.AjnVirXQeiPgFmd} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_27.geometry} material={materials.xYIhbFReGzikXuj} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_29.geometry} material={materials.FEdJjbtHQhrLkPc} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_31.geometry} material={materials.msHgsHSWlHxyhfo} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_33.geometry} material={materials.TapGHbYtpjcGEyh} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_35.geometry} material={materials.XHmyiGBFGvanMAr} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_37.geometry} material={materials.GvidsfHBLmyLFLj} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_39.geometry} material={materials.gTQYGMoqLgKFhDN} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_41.geometry} material={materials.XHmyiGBFGvanMAr} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_45.geometry} material={materials.DesySQuVkxDlAlp_0} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_47.geometry} material={materials.lagreFFLwlIcTJO} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_49.geometry} material={materials.uCIAdpMWlBjnYvL} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_51.geometry} material={materials.svovjBXowKlgbKD} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_53.geometry} material={materials.svovjBXowKlgbKD} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_55.geometry} material={materials.oRyqyBedXgltlyh} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_57.geometry} material={materials.LCFAOHKyQkTpEQF} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_60.geometry} material={materials.svovjBXowKlgbKD} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_62.geometry} material={materials.svovjBXowKlgbKD} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_64.geometry} material={materials.oRyqyBedXgltlyh} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_66.geometry} material={materials.DesySQuVkxDlAlp_0} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_68.geometry} material={materials.lagreFFLwlIcTJO} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_70.geometry} material={materials.uCIAdpMWlBjnYvL} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_72.geometry} material={materials.dFHMyPBpPqeTjiL} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_74.geometry} material={materials.fBnoCDaWrdqLbCS} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_77.geometry} material={materials.QqwPOMufQnLHpVb} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_79.geometry} material={materials.lagreFFLwlIcTJO} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_81.geometry} material={materials.lagreFFLwlIcTJO} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_84.geometry} material={materials.XNhEODEcVemrRSu} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_86.geometry} material={materials.pMiARQLBeNgKOAx} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_88.geometry} material={materials.NJTstBdwEqVPDBG} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_90.geometry} material={materials.UvuKGGVdlOxVUeA} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_92.geometry} material={materials.pMiARQLBeNgKOAx} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_94.geometry} material={materials.ySrzecxrjVirfze} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_97.geometry} material={materials.hzzIZvnSVXHRIpk} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_99.geometry} material={materials.LrbPxjZrLaPVhbL} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_101.geometry} material={materials.JvGMyHWKpFKorez} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_106.geometry} material={materials.OcjoBBhHkqmGEeg} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_108.geometry} material={materials.NHDhsOMHMgThpCN} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_110.geometry} material={materials.NHDhsOMHMgThpCN} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_112.geometry} material={materials.gTQYGMoqLgKFhDN} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_114.geometry} material={materials.NLXCMSpYzHeRKCy} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_116.geometry} material={materials.HjiVKkmzDRBQwcd} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_118.geometry} material={materials.nirjontYTAixgEJ} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_121.geometry} material={materials.HjiVKkmzDRBQwcd} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_123.geometry} material={materials.nirjontYTAixgEJ} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_125.geometry} material={materials.NLXCMSpYzHeRKCy} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_127.geometry} material={materials.NHDhsOMHMgThpCN} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_129.geometry} material={materials.gTQYGMoqLgKFhDN} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_134.geometry} material={materials.LlnrRvRtBSKKJtZ} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_136.geometry} material={materials.IUXXlUlgvhvFPzz} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_138.geometry} material={materials.gFHmZYZAcTzegfV} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_141.geometry} material={materials.gFHmZYZAcTzegfV} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_143.geometry} material={materials.LlnrRvRtBSKKJtZ} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_145.geometry} material={materials.IUXXlUlgvhvFPzz} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_148.geometry} material={materials.RWqkxBAMyYvCfAW} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_151.geometry} material={materials.kPwwriYXUEalYIj} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_153.geometry} material={materials.lZazJJAwgeaFFzW} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_155.geometry} material={materials.lZazJJAwgeaFFzW} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_157.geometry} material={materials.CzTcyZGBTOTEuIC} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_160.geometry} material={materials.CzTcyZGBTOTEuIC} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_162.geometry} material={materials.hQMaJbjPDPOUdry} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_164.geometry} material={materials.lZazJJAwgeaFFzW} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_166.geometry} material={materials.lZazJJAwgeaFFzW} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_168.geometry} material={materials.CzTcyZGBTOTEuIC} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_170.geometry} material={materials.CzTcyZGBTOTEuIC} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_173.geometry} material={materials.WicotZnvNvRZKUL} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_176.geometry} material={materials.sWxIuDoQFWtTiiB} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_179.geometry} material={materials.hjAUwLwBADKDzhk} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_181.geometry} material={materials.GevKBvqYjYnmUWP} castShadow={castShadow} receiveShadow={receiveShadow} />
              {/** headset部分 */}
              <mesh 
                geometry={nodes.Object_183.geometry} 
                material={materials.FOugkDgsmvxAjLB} 
                castShadow={castShadow} 
                receiveShadow={receiveShadow} 
                onClick={
                  () => {
                    setActive("headset");
                  }
                }
                onPointerMissed={(e) => e.type === 'click' && (
                  setActive(null)
                )}
                onPointerOver={() => setHovered("headset")}
                onPointerOut={() => setHovered(null)}
              >
                {hovered === "headset" && 
                  <Outlines 
                    color={"#e0e0e0"} 
                    screenspace={false} 
                    opacity={1} 
                    transparent={true} 
                    thickness={0.1} 
                    angle={Math.PI} 
                  />
                }
              </mesh>
              <mesh geometry={nodes.Object_186.geometry} material={materials.svoioOWqcyuDHRV} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_188.geometry} material={materials.CzTcyZGBTOTEuIC} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_190.geometry} material={materials.HAvYQJgmRpVYpqr} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_193.geometry} material={materials.CzTcyZGBTOTEuIC} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_195.geometry} material={materials.snsykSygkWSDIlk} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_200.geometry} material={materials.svoioOWqcyuDHRV} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_202.geometry} material={materials.kEEsgKvKWifaKeg} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_204.geometry} material={materials.svoioOWqcyuDHRV} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_206.geometry} material={materials.kEEsgKvKWifaKeg} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_208.geometry} material={materials.NLAQCwOxsrAPIlV} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_210.geometry} material={materials.kEEsgKvKWifaKeg} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_212.geometry} material={materials.svoioOWqcyuDHRV} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_214.geometry} material={materials.svoioOWqcyuDHRV} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_216.geometry} material={materials.nctcFIvFhZfKDLQ} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_218.geometry} material={materials.kEEsgKvKWifaKeg} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_220.geometry} material={materials.GevKBvqYjYnmUWP} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_222.geometry} material={materials.CzTcyZGBTOTEuIC} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_225.geometry} material={materials.kEEsgKvKWifaKeg} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_227.geometry} material={materials.kEEsgKvKWifaKeg} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_229.geometry} material={materials.nctcFIvFhZfKDLQ} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_231.geometry} material={materials.svoioOWqcyuDHRV} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_233.geometry} material={materials.kEEsgKvKWifaKeg} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_235.geometry} material={materials.NLAQCwOxsrAPIlV} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_237.geometry} material={materials.kEEsgKvKWifaKeg} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_239.geometry} material={materials.svoioOWqcyuDHRV} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_241.geometry} material={materials.svoioOWqcyuDHRV} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_243.geometry} material={materials.svoioOWqcyuDHRV} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_245.geometry} material={materials.hjAUwLwBADKDzhk} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_248.geometry} material={materials.CzTcyZGBTOTEuIC} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_250.geometry} material={materials.GevKBvqYjYnmUWP} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_252.geometry} material={materials.hjAUwLwBADKDzhk} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_254.geometry} material={materials.hjAUwLwBADKDzhk} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_257.geometry} material={materials.snsykSygkWSDIlk} castShadow={castShadow} receiveShadow={receiveShadow} />
              <mesh geometry={nodes.Object_259.geometry} material={materials.CzTcyZGBTOTEuIC} castShadow={castShadow} receiveShadow={receiveShadow} />
            </group>
          </group>
        </group>
      </group>
    </animated.group>
  )
}

useGLTF.preload('/apple_vision_pro.glb')