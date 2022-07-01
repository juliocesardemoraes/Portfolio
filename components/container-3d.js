import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "../lib/model";
import { CodeContainer, CodeSpinner } from "./container-loader";

let mouse = new THREE.Vector2();

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const THREEDContainer = (props) => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();
  const [_camera, setCamera] = useState();
  const [target] = useState(new THREE.Vector3(0, 0, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      40 * Math.sin(0.2 * Math.PI),
      40,
      40 * Math.cos(0.2 * Math.PI)
    )
  );
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState();

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = container.clientWidth / props?.resizeValue;
      const scH = container.clientHeight / props?.resizeValue;
      renderer.setSize(scW, scH);
    }
  }, [renderer, props?.resizeValue]);

  const onDocumentMouseMove = (event) => {
    let raycaster = new THREE.Raycaster();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    if (_camera) raycaster.setFromCamera(mouse.clone(), _camera);
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth / props?.resizeValue;
      const scH = container.clientHeight / props?.resizeValue;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scale = scH * 0.0005 + 3.4;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      const upColor = 0xffff80;
      const downColor = 0x4040ff;

      const ambientLight = new THREE.HemisphereLight(upColor, downColor, 0.4);
      scene.add(ambientLight);

      const light = new THREE.PointLight(0xffffff, 3, 100);
      light.position.set(50, 30, 50);

      scene.add(light);

      const lightNatural = new THREE.PointLight(0xffffff, 1, 100);
      light.position.set(50, 30, 50);

      scene.add(lightNatural);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

      loadGLTFModel(scene, `./${props?.model}.glb`, {
        receiveShadow: true,
        castShadow: true,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 60;

          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        // AUTOMATIC ROTATION
        const time = Date.now() * 0.0005;
        lightNatural.position.x = Math.sin(time * 0.7) * 30;
        lightNatural.position.y = Math.cos(time * 0.5) * 40;
        lightNatural.position.z = Math.cos(time * 0.3) * 30;

        // LIGHT ROTATION BASED ON MOUSE
        light.position.x = mouse.x * 100;
        light.position.y = mouse.y * 100;

        renderer.render(scene, camera);
      };

      return () => {
        console.log("unmount");
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    window.addEventListener("mousemove", onDocumentMouseMove, false);

    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
      window.removeEventListener("mousemove", onDocumentMouseMove, false);
    };
  }, [renderer, handleWindowResize]);

  return (
    <CodeContainer ref={refContainer}>
      {loading && (
        <CodeSpinner valueToResizeCanvas={props?.valueToResizeCanvas} />
      )}
    </CodeContainer>
  );
};

export default THREEDContainer;
