'use client';

import { useEffect, useRef } from 'react';

const MIN_3D_WIDTH = 900;
const POINTER_EASE = 0.035;

function canUseWebGL() {
  const canvas = document.createElement('canvas');
  const context =
    canvas.getContext('webgl2') ||
    canvas.getContext('webgl') ||
    canvas.getContext('experimental-webgl');

  if (context && 'getExtension' in context) {
    context.getExtension('WEBGL_lose_context')?.loseContext();
  }

  return Boolean(context);
}

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const wideViewport = window.matchMedia(`(min-width: ${MIN_3D_WIDTH}px)`);

    if (!canvas || reduceMotion.matches || !wideViewport.matches || !canUseWebGL()) {
      return;
    }

    let isCancelled = false;
    let frameId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleId = 0;
    let disposeScene: (() => void) | undefined;

    const startScene = async () => {
      const [
        { WebGLRenderer },
        { Scene },
        { PerspectiveCamera },
        { Group },
        { BufferGeometry },
        { Float32BufferAttribute },
        { PointsMaterial },
        { Points },
        { LineBasicMaterial },
        { LineSegments },
      ] = await Promise.all([
        import('three/src/renderers/WebGLRenderer.js'),
        import('three/src/scenes/Scene.js'),
        import('three/src/cameras/PerspectiveCamera.js'),
        import('three/src/objects/Group.js'),
        import('three/src/core/BufferGeometry.js'),
        import('three/src/core/BufferAttribute.js'),
        import('three/src/materials/PointsMaterial.js'),
        import('three/src/objects/Points.js'),
        import('three/src/materials/LineBasicMaterial.js'),
        import('three/src/objects/LineSegments.js'),
      ]);

      if (isCancelled || !canvasRef.current) {
        return;
      }

      const renderer = new WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
        antialias: false,
        powerPreference: 'low-power',
        preserveDrawingBuffer: window.location.search.includes('visual-test=1'),
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));

      const scene = new Scene();
      const camera = new PerspectiveCamera(38, 1, 0.1, 80);
      camera.position.set(0, 0, 11.6);

      const blueprint = new Group();
      const conversionMap = new Group();
      const foreground = new Group();
      scene.add(blueprint);
      scene.add(conversionMap);
      scene.add(foreground);

      const positions: number[] = [];
      for (let x = -10; x <= 10; x += 1) {
        for (let y = -6; y <= 6; y += 1) {
          const depth = Math.sin(x * 0.7 + y * 0.35) * 0.48;
          const offset = Math.cos((x - y) * 0.4) * 0.08;
          positions.push(x + offset, y, depth);
        }
      }

      const pointGeometry = new BufferGeometry();
      pointGeometry.setAttribute(
        'position',
        new Float32BufferAttribute(positions, 3),
      );

      const pointMaterial = new PointsMaterial({
        color: 0x58a6ff,
        size: 0.03,
        transparent: true,
        opacity: 0.3,
        depthWrite: false,
      });

      const points = new Points(pointGeometry, pointMaterial);
      blueprint.add(points);

      const linePositions: number[] = [];
      for (let y = -5; y <= 5; y += 2) {
        linePositions.push(-9.4, y, -0.32, 9.4, y + 0.65, 0.22);
      }
      for (let x = -9; x <= 9; x += 3) {
        linePositions.push(x, -5.4, 0.24, x + 0.85, 5.4, -0.2);
      }

      const lineGeometry = new BufferGeometry();
      lineGeometry.setAttribute(
        'position',
        new Float32BufferAttribute(linePositions, 3),
      );

      const lineMaterial = new LineBasicMaterial({
        color: 0x56d364,
        transparent: true,
        opacity: 0.08,
        depthWrite: false,
      });

      const lines = new LineSegments(lineGeometry, lineMaterial);
      blueprint.add(lines);

      const pathNodes = [
        [-7.2, -2.8, 0.45],
        [-4.8, -1.35, 0.12],
        [-2.1, -1.65, 0.3],
        [0.35, -0.15, -0.05],
        [2.4, 1.05, 0.24],
        [5.05, 0.72, -0.12],
        [7.1, 2.45, 0.38],
      ];
      const pathPositions: number[] = [];
      const nodePositions: number[] = [];

      pathNodes.forEach((node, index) => {
        nodePositions.push(node[0], node[1], node[2]);
        const next = pathNodes[index + 1];
        if (next) {
          pathPositions.push(node[0], node[1], node[2], next[0], next[1], next[2]);
        }
      });

      const pathGeometry = new BufferGeometry();
      pathGeometry.setAttribute('position', new Float32BufferAttribute(pathPositions, 3));
      const pathMaterial = new LineBasicMaterial({
        color: 0x58a6ff,
        transparent: true,
        opacity: 0.22,
        depthWrite: false,
      });
      const pathLines = new LineSegments(pathGeometry, pathMaterial);
      conversionMap.add(pathLines);

      const nodeGeometry = new BufferGeometry();
      nodeGeometry.setAttribute('position', new Float32BufferAttribute(nodePositions, 3));
      const nodeMaterial = new PointsMaterial({
        color: 0x56d364,
        size: 0.075,
        transparent: true,
        opacity: 0.74,
        depthWrite: false,
      });
      const nodes = new Points(nodeGeometry, nodeMaterial);
      conversionMap.add(nodes);

      const framePositions = [
        -10.5, 3.9, -0.4, -4.4, 4.75, -0.18,
        -10.5, 3.9, -0.4, -8.25, 1.6, 0.1,
        5.6, -4.4, 0.18, 10.4, -3.5, -0.12,
        7.8, -1.6, -0.08, 10.4, -3.5, -0.12,
        4.9, 4.65, -0.2, 10.2, 3.65, 0.06,
        10.2, 3.65, 0.06, 8.4, 1.4, 0.2,
      ];
      const frameGeometry = new BufferGeometry();
      frameGeometry.setAttribute('position', new Float32BufferAttribute(framePositions, 3));
      const frameMaterial = new LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.08,
        depthWrite: false,
      });
      const frameLines = new LineSegments(frameGeometry, frameMaterial);
      foreground.add(frameLines);

      const pointer = { x: 0, y: 0 };
      const pointerTarget = { x: 0, y: 0 };

      const resize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      const handlePointerMove = (event: PointerEvent) => {
        pointerTarget.x = (event.clientX / window.innerWidth - 0.5) * 2;
        pointerTarget.y = (event.clientY / window.innerHeight - 0.5) * 2;
      };

      const animate = (time: number) => {
        if (document.hidden) {
          frameId = window.requestAnimationFrame(animate);
          return;
        }

        const drift = time * 0.00008;
        pointer.x += (pointerTarget.x - pointer.x) * POINTER_EASE;
        pointer.y += (pointerTarget.y - pointer.y) * POINTER_EASE;

        camera.position.x = pointer.x * 0.26;
        camera.position.y = pointer.y * -0.18;
        camera.lookAt(pointer.x * 0.08, pointer.y * -0.05, 0);

        blueprint.rotation.x = Math.sin(drift * 0.7) * 0.055 + pointer.y * 0.025;
        blueprint.rotation.y = Math.sin(drift) * 0.085 + pointer.x * 0.04;
        conversionMap.rotation.x = Math.cos(drift * 0.72) * 0.036 + pointer.y * 0.018;
        conversionMap.rotation.y = Math.sin(drift * 0.82) * 0.07 + pointer.x * 0.045;
        foreground.rotation.z = Math.sin(drift * 0.5) * 0.018;
        points.rotation.z = Math.sin(drift * 0.8) * 0.018;
        lines.rotation.z = Math.cos(drift * 0.65) * 0.012;
        nodes.rotation.z = Math.sin(drift * 1.1) * 0.01;

        renderer.render(scene, camera);
        frameId = window.requestAnimationFrame(animate);
      };

      resize();
      window.addEventListener('resize', resize, { passive: true });
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      frameId = window.requestAnimationFrame(animate);

      disposeScene = () => {
        window.removeEventListener('resize', resize);
        window.removeEventListener('pointermove', handlePointerMove);
        window.cancelAnimationFrame(frameId);
        pointGeometry.dispose();
        pointMaterial.dispose();
        lineGeometry.dispose();
        lineMaterial.dispose();
        pathGeometry.dispose();
        pathMaterial.dispose();
        nodeGeometry.dispose();
        nodeMaterial.dispose();
        frameGeometry.dispose();
        frameMaterial.dispose();
        renderer.dispose();
      };
    };

    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(startScene, { timeout: 1600 });
    } else {
      timeoutId = globalThis.setTimeout(startScene, 450);
    }

    return () => {
      isCancelled = true;
      if (idleId) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        globalThis.clearTimeout(timeoutId);
      }
      disposeScene?.();
    };
  }, []);

  return (
    <div className="blueprint-background" aria-hidden="true">
      <canvas ref={canvasRef} className="blueprint-canvas" />
      <div className="blueprint-spotlight" />
      <div className="blueprint-scanline" />
      <div className="blueprint-vellum" />
    </div>
  );
}
