"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function WireframeGlobe() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.06
    }
  })

  const { latLines, lonLines, dotPositions } = useMemo(() => {
    const radius = 1.8
    const latCount = 10
    const lonCount = 16
    const segments = 72
    const lats: THREE.Vector3[][] = []
    const lons: THREE.Vector3[][] = []
    const dots: THREE.Vector3[] = []

    for (let i = 1; i < latCount; i++) {
      const phi = (Math.PI * i) / latCount
      const points: THREE.Vector3[] = []
      for (let j = 0; j <= segments; j++) {
        const theta = (2 * Math.PI * j) / segments
        points.push(new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.cos(phi),
          radius * Math.sin(phi) * Math.sin(theta)
        ))
      }
      lats.push(points)
    }

    for (let i = 0; i < lonCount; i++) {
      const theta = (2 * Math.PI * i) / lonCount
      const points: THREE.Vector3[] = []
      for (let j = 0; j <= segments; j++) {
        const phi = (Math.PI * j) / segments
        points.push(new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.cos(phi),
          radius * Math.sin(phi) * Math.sin(theta)
        ))
      }
      lons.push(points)
    }

    for (let i = 1; i < latCount; i++) {
      const phi = (Math.PI * i) / latCount
      for (let j = 0; j < lonCount; j++) {
        const theta = (2 * Math.PI * j) / lonCount
        dots.push(new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.cos(phi),
          radius * Math.sin(phi) * Math.sin(theta)
        ))
      }
    }

    return { latLines: lats, lonLines: lons, dotPositions: dots }
  }, [])

  const lineMaterial = useMemo(
    () => new THREE.LineBasicMaterial({
      color: new THREE.Color("#1C1C19"),
      transparent: true,
      opacity: 0.12,
    }),
    []
  )

  const dotMaterial = useMemo(
    () => new THREE.PointsMaterial({
      color: new THREE.Color("#1C1C19"),
      size: 0.025,
      transparent: true,
      opacity: 0.25,
      sizeAttenuation: true,
    }),
    []
  )

  const dotGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(dotPositions.length * 3)
    dotPositions.forEach((p, i) => {
      positions[i * 3] = p.x
      positions[i * 3 + 1] = p.y
      positions[i * 3 + 2] = p.z
    })
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    return geo
  }, [dotPositions])

  return (
    <group ref={groupRef} rotation={[0.25, 0, 0.08]}>
      {latLines.map((points, i) => (
        <line key={`lat-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array(points.flatMap((p) => [p.x, p.y, p.z])), 3]}
            />
          </bufferGeometry>
          <primitive object={lineMaterial} attach="material" />
        </line>
      ))}
      {lonLines.map((points, i) => (
        <line key={`lon-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array(points.flatMap((p) => [p.x, p.y, p.z])), 3]}
            />
          </bufferGeometry>
          <primitive object={lineMaterial} attach="material" />
        </line>
      ))}
      <points geometry={dotGeometry} material={dotMaterial} />
    </group>
  )
}

export default function Globe() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      style={{ pointerEvents: "none" }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <WireframeGlobe />
    </Canvas>
  )
}
