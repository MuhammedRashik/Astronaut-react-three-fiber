import { MeshTransmissionMaterial, useGLTF, useTexture } from '@react-three/drei'
import { NodeToyMaterial } from '@nodetoy/react-nodetoy'
import { ImprovedNoise } from 'three-stdlib'
import {data as meteorShaderData } from './meteor-shader'

const Meteor=()=>{
    const {nodes}=useGLTF("assets/models/meteor.glb")
    const [normalMap]=useTexture(['assets/textures/meteor_normals.png'])

    return(
        <>
        <mesh geometry={nodes.meteor.geometry}>
            <MeshTransmissionMaterial
            normalMap={normalMap}
            normalScale={[0.3,0.3]}
            roughness={0}
            ior={1.5}
            thickness={0.035}
            transmission={1}
            chromaticAberration={1}
            anisotropy={20}
            distortion={0}
            samples={10}
            backside={true}
            color={"#fff"}
            attenuationDistance={0.2}
            attenuationColor={"#e2ae5b"}
            />
        </mesh>
        

        <mesh geometry={nodes.meteor.geometry}
        scale={[1.02,1.02,1.02]}
        >
            <NodeToyMaterial data={meteorShaderData}/>

        </mesh>
        </>
    )
}

export default Meteor