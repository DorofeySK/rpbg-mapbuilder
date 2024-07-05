/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Area(props) {
  const { nodes, materials } = useGLTF('../../../public/Blocks/AreaWithTexture.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        scale={[0.5, 1, 0.5]}
      />
    </group>
  )
}

useGLTF.preload("../../../public/Blocks/AreaWithTexture.glb")