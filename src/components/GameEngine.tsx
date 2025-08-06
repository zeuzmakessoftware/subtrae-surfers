import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useGameStore } from '../store/gameStore';

// Game constants
const LANE_WIDTH = 120;
const OBSTACLE_SPAWN_DISTANCE = 40;
const COIN_SPAWN_DISTANCE = 20;
const SPEED_MULTIPLIER = 0.05; // Consistent multiplier for all objects

// Animation constants
const PARTICLE_COUNT = 100;
const TRAIL_LENGTH = 20;

interface Obstacle {
  id: string;
  type: 'train' | 'barrier' | 'pole';
  x: number;
  y: number;
  lane: number;
  mesh?: THREE.Mesh;
}

interface Coin {
  id: string;
  x: number;
  y: number;
  collected: boolean;
  mesh?: THREE.Mesh;
}

interface PowerUpItem {
  id: string;
  type: 'jetpack' | 'magnet' | 'sneakers' | 'multiplier';
  x: number;
  y: number;
  collected: boolean;
  mesh?: THREE.Mesh;
}

export default function GameEngine() {
  const {
    gameStatus,
    speed,
    lane,
    isJumping,
    isRolling,
    addScore,
    addCoins,
    addDistance,
    setGameStatus,
    activatePowerUp,
    updatePowerUps
  } = useGameStore();

  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const playerRef = useRef<THREE.Mesh>();
  
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [coins, setCoins] = useState<Coin[]>([]);
  const [powerUps, setPowerUps] = useState<PowerUpItem[]>([]);
  const [cameraY, setCameraY] = useState(0);
  const gameLoopRef = useRef<number>();
  const lastObstacleY = useRef(0);
  const lastCoinY = useRef(0);
  const lastPowerUpY = useRef(0);

  // Initialize Three.js scene
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x60a5fa);
    scene.fog = new THREE.Fog(0x3b82f6, 20, 100);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 5, 10);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Enhanced Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);

    // Add dynamic colored lights
    const redLight = new THREE.PointLight(0xff0000, 0.5, 50);
    redLight.position.set(-10, 5, 0);
    scene.add(redLight);

    const blueLight = new THREE.PointLight(0x0066ff, 0.5, 50);
    blueLight.position.set(10, 5, 0);
    scene.add(blueLight);

    const yellowLight = new THREE.PointLight(0xffff00, 0.3, 30);
    yellowLight.position.set(0, 8, -5);
    scene.add(yellowLight);

    // Store light references
    (scene as any).redLight = redLight;
    (scene as any).blueLight = blueLight;
    (scene as any).yellowLight = yellowLight;

    // Create multiple track segments for infinite scrolling
    const trackSegments: THREE.Mesh[] = [];
    const dividerSegments: THREE.Mesh[] = [];
    const wallSegments: THREE.Mesh[] = [];
    
    for (let i = 0; i < 10; i++) {
      // Track segments
      const trackGeometry = new THREE.PlaneGeometry(12, 100);
      const trackMaterial = new THREE.MeshStandardMaterial({ color: 0x374151 });
      const track = new THREE.Mesh(trackGeometry, trackMaterial);
      track.rotation.x = -Math.PI / 2;
      track.position.set(0, -0.5, -i * 100);
      scene.add(track);
      trackSegments.push(track);
      
      // Lane dividers
      const dividerGeometry = new THREE.BoxGeometry(0.1, 0.1, 100);
      const dividerMaterial = new THREE.MeshStandardMaterial({ color: 0xfbbf24 });
      
      const leftDivider = new THREE.Mesh(dividerGeometry, dividerMaterial);
      leftDivider.position.set(-2, 0, -i * 100);
      scene.add(leftDivider);
      dividerSegments.push(leftDivider);
      
      const rightDivider = new THREE.Mesh(dividerGeometry, dividerMaterial);
      rightDivider.position.set(2, 0, -i * 100);
      scene.add(rightDivider);
      dividerSegments.push(rightDivider);
      
      // Side walls
      const wallGeometry = new THREE.BoxGeometry(1, 3, 100);
      const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x4b5563 });
      
      const leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
      leftWall.position.set(-6, 1, -i * 100);
      scene.add(leftWall);
      wallSegments.push(leftWall);
      
      const rightWall = new THREE.Mesh(wallGeometry, wallMaterial);
      rightWall.position.set(6, 1, -i * 100);
      scene.add(rightWall);
      wallSegments.push(rightWall);
    }
    
    // Store references for infinite scrolling
    (scene as any).trackSegments = trackSegments;
    (scene as any).dividerSegments = dividerSegments;
    (scene as any).wallSegments = wallSegments;

    // Create enhanced player with glow effect
    const playerGeometry = new THREE.SphereGeometry(0.5, 16, 16);
    const playerMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x22c55e,
      emissive: 0x002200,
      emissiveIntensity: 0.2
    });
    const player = new THREE.Mesh(playerGeometry, playerMaterial);
    player.position.set(0, 0, 0);
    player.castShadow = true;
    scene.add(player);
    playerRef.current = player;

    // Add player glow effect
    const glowGeometry = new THREE.SphereGeometry(0.7, 16, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x22c55e,
      transparent: true,
      opacity: 0.3,
      side: THREE.BackSide
    });
    const playerGlow = new THREE.Mesh(glowGeometry, glowMaterial);
    player.add(playerGlow);
    (player as any).glow = playerGlow;

    // Create particle system
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(PARTICLE_COUNT * 3);
    const particleVelocities = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 20;
      particlePositions[i * 3 + 1] = Math.random() * 10;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 100;

      particleVelocities[i * 3] = (Math.random() - 0.5) * 0.1;
      particleVelocities[i * 3 + 1] = -Math.random() * 0.05;
      particleVelocities[i * 3 + 2] = -Math.random() * 0.2;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);
    (scene as any).particleSystem = particleSystem;
    (scene as any).particleVelocities = particleVelocities;

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Game loop
  useEffect(() => {
    if (gameStatus !== 'playing' || !sceneRef.current || !cameraRef.current || !rendererRef.current) {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
      return;
    }

    let lastTime = 0;
    const gameLoop = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      if (deltaTime > 0) {
        // Update power-ups
        updatePowerUps(deltaTime);

        // Move camera forward with constant speed
        const newCameraY = cameraY + speed * deltaTime * SPEED_MULTIPLIER;
        setCameraY(newCameraY);

        // Update camera position for smooth following with dynamic movement
        if (cameraRef.current && playerRef.current) {
          const targetX = playerRef.current.position.x * 0.3;
          const targetY = 5 + Math.sin(Date.now() * 0.001) * 0.2; // Subtle camera bob
          const targetZ = 10;

          cameraRef.current.position.x += (targetX - cameraRef.current.position.x) * 0.1;
          cameraRef.current.position.y += (targetY - cameraRef.current.position.y) * 0.1;
          cameraRef.current.position.z += (targetZ - cameraRef.current.position.z) * 0.1;

          // Add slight camera shake during collisions
          if (gameStatus === 'playing') {
            const shake = Math.sin(Date.now() * 0.01) * 0.02;
            cameraRef.current.position.x += shake;
            cameraRef.current.position.y += shake * 0.5;
          }

          cameraRef.current.lookAt(0, 0, 0);
        }
        
        // Move track segments backward for infinite scrolling (reduced speed)
        const scene = sceneRef.current!;
        const trackSegments = (scene as any).trackSegments;
        const dividerSegments = (scene as any).dividerSegments;
        const wallSegments = (scene as any).wallSegments;
        
        if (trackSegments) {
          trackSegments.forEach((segment: THREE.Mesh, index: number) => {
            segment.position.z += speed * deltaTime * SPEED_MULTIPLIER;
            if (segment.position.z > 50) {
              segment.position.z -= 1000;
            }
          });
        }
        
        if (dividerSegments) {
          dividerSegments.forEach((segment: THREE.Mesh) => {
            segment.position.z += speed * deltaTime * SPEED_MULTIPLIER;
            if (segment.position.z > 50) {
              segment.position.z -= 1000;
            }
          });
        }
        
        if (wallSegments) {
          wallSegments.forEach((segment: THREE.Mesh) => {
            segment.position.z += speed * deltaTime * SPEED_MULTIPLIER;
            if (segment.position.z > 50) {
              segment.position.z -= 1000;
            }
          });
        }

        // Enhanced player animation and position
        if (playerRef.current) {
          playerRef.current.position.x = (lane - 1) * 4;
          playerRef.current.position.y = isJumping ? 2 : isRolling ? -1 : 0;
          playerRef.current.scale.set(
            1,
            isRolling ? 0.5 : 1,
            1
          );
          
          // Enhanced player animation
          playerRef.current.rotation.x += 0.05;
          playerRef.current.rotation.y += 0.01;
          playerRef.current.rotation.z = Math.sin(Date.now() * 0.003) * 0.05;
          
          // Animate player scale for breathing effect
          const breathe = 1 + Math.sin(Date.now() * 0.008) * 0.05;
          playerRef.current.scale.set(breathe, breathe * (isRolling ? 0.5 : 1), breathe);
          
          // Enhanced player color and glow based on state
          const material = playerRef.current.material as THREE.MeshStandardMaterial;
          const playerGlow = (playerRef.current as any).glow;
          
          if (isJumping) {
            material.color.setHex(0x4ade80);
            material.emissive.setHex(0x002200);
            material.emissiveIntensity = 0.4;
            if (playerGlow) {
              playerGlow.material.color.setHex(0x4ade80);
              playerGlow.material.opacity = 0.5;
            }
          } else if (isRolling) {
            material.color.setHex(0x3b82f6);
            material.emissive.setHex(0x000022);
            material.emissiveIntensity = 0.4;
            if (playerGlow) {
              playerGlow.material.color.setHex(0x3b82f6);
              playerGlow.material.opacity = 0.5;
            }
          } else {
            material.color.setHex(0x22c55e);
            material.emissive.setHex(0x002200);
            material.emissiveIntensity = 0.2;
            if (playerGlow) {
              playerGlow.material.color.setHex(0x22c55e);
              playerGlow.material.opacity = 0.3;
            }
          }
          
          // Animate glow pulsing
          if (playerGlow) {
            playerGlow.scale.set(
              1 + Math.sin(Date.now() * 0.01) * 0.1,
              1 + Math.sin(Date.now() * 0.01) * 0.1,
              1 + Math.sin(Date.now() * 0.01) * 0.1
            );
          }
        }

        // Add distance and score (realistic scaling)
        addDistance(speed * deltaTime * 0.01); // Realistic distance in meters
        addScore(Math.floor(speed * deltaTime * 0.5)); // Consistent score rate

        // Update particle system
         const currentScene = sceneRef.current!;
         const particleSystem = (currentScene as any).particleSystem;
         const particleVelocities = (currentScene as any).particleVelocities;
         
         if (particleSystem && particleVelocities) {
           const positions = particleSystem.geometry.attributes.position.array;
           for (let i = 0; i < PARTICLE_COUNT; i++) {
             positions[i * 3] += particleVelocities[i * 3];
             positions[i * 3 + 1] += particleVelocities[i * 3 + 1];
             positions[i * 3 + 2] += particleVelocities[i * 3 + 2] - speed * 0.1;
             
             // Reset particles that have moved too far
             if (positions[i * 3 + 2] < -50) {
               positions[i * 3] = (Math.random() - 0.5) * 20;
               positions[i * 3 + 1] = Math.random() * 10;
               positions[i * 3 + 2] = 50;
             }
           }
           particleSystem.geometry.attributes.position.needsUpdate = true;
         }
         
         // Animate colored lights
         const redLight = (currentScene as any).redLight;
         const blueLight = (currentScene as any).blueLight;
         const yellowLight = (currentScene as any).yellowLight;
         
         if (redLight && blueLight && yellowLight) {
           redLight.intensity = 0.5 + Math.sin(Date.now() * 0.005) * 0.2;
           blueLight.intensity = 0.5 + Math.sin(Date.now() * 0.007) * 0.2;
           yellowLight.intensity = 0.3 + Math.sin(Date.now() * 0.009) * 0.1;
         }

        // Spawn obstacles
        if (newCameraY - lastObstacleY.current > OBSTACLE_SPAWN_DISTANCE) {
          const obstacleTypes: Obstacle['type'][] = ['train', 'barrier', 'pole'];
          const randomType = obstacleTypes[Math.floor(Math.random() * obstacleTypes.length)];
          const randomLane = Math.floor(Math.random() * 3);

          const newObstacle: Obstacle = {
            id: `obstacle-${Date.now()}`,
            type: randomType,
            x: randomLane * LANE_WIDTH + 60,
            y: newCameraY - 600,
            lane: randomLane
          };

          // Create enhanced obstacle with warning effect
          let geometry: THREE.BufferGeometry;
          let material: THREE.MeshStandardMaterial;
          
          if (randomType === 'train') {
            geometry = new THREE.BoxGeometry(3, 2, 2);
            material = new THREE.MeshStandardMaterial({ 
              color: 0x2563eb,
              emissive: 0x000033,
              emissiveIntensity: 0.1
            });
          } else if (randomType === 'barrier') {
            geometry = new THREE.BoxGeometry(2.5, 1, 1);
            material = new THREE.MeshStandardMaterial({ 
              color: 0xdc2626,
              emissive: 0x330000,
              emissiveIntensity: 0.1
            });
          } else {
            geometry = new THREE.CylinderGeometry(0.2, 0.2, 3);
            material = new THREE.MeshStandardMaterial({ 
              color: 0x6b7280,
              emissive: 0x111111,
              emissiveIntensity: 0.1
            });
          }
          
          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.set((randomLane - 1) * 4, 0, -50);
          mesh.castShadow = true;
          
          // Add warning glow for obstacles
          const warningGeometry = randomType === 'pole' ? 
            new THREE.CylinderGeometry(0.4, 0.4, 3.5) :
            new THREE.BoxGeometry(
              randomType === 'train' ? 3.5 : 3,
              randomType === 'train' ? 2.5 : 1.5,
              randomType === 'train' ? 2.5 : 1.5
            );
          const warningMaterial = new THREE.MeshBasicMaterial({
            color: 0xff0000,
            transparent: true,
            opacity: 0.2,
            side: THREE.BackSide
          });
          const warningGlow = new THREE.Mesh(warningGeometry, warningMaterial);
          mesh.add(warningGlow);
          (mesh as any).warningGlow = warningGlow;
          
          sceneRef.current!.add(mesh);
          newObstacle.mesh = mesh;

          setObstacles(prev => [...prev, newObstacle]);
          lastObstacleY.current = newCameraY;
        }

        // Spawn coins
        if (newCameraY - lastCoinY.current > COIN_SPAWN_DISTANCE) {
          const coinLane = Math.floor(Math.random() * 3);
          const newCoin: Coin = {
            id: `coin-${Date.now()}`,
            x: coinLane * LANE_WIDTH + 60,
            y: newCameraY - 400,
            collected: false
          };

          // Create enhanced coin with glow and animation
          const geometry = new THREE.SphereGeometry(0.3, 12, 12);
          const material = new THREE.MeshStandardMaterial({ 
            color: 0xfbbf24,
            emissive: 0x332200,
            emissiveIntensity: 0.3
          });
          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.set((coinLane - 1) * 4, 1, -50);
          
          // Add coin glow effect
          const coinGlowGeometry = new THREE.SphereGeometry(0.5, 12, 12);
          const coinGlowMaterial = new THREE.MeshBasicMaterial({
            color: 0xfbbf24,
            transparent: true,
            opacity: 0.4,
            side: THREE.BackSide
          });
          const coinGlow = new THREE.Mesh(coinGlowGeometry, coinGlowMaterial);
          mesh.add(coinGlow);
          (mesh as any).coinGlow = coinGlow;
          
          sceneRef.current!.add(mesh);
          newCoin.mesh = mesh;

          setCoins(prev => [...prev, newCoin]);
          lastCoinY.current = newCameraY;
        }

        // Update object positions and check collisions
        const playerLane3D = (lane - 1) * 4;
        const playerY = newCameraY;

        // Update and check coin collisions
        const coinMovement = speed * deltaTime * SPEED_MULTIPLIER;
        setCoins(prev => prev.map((coin, index) => {
          if (coin.mesh) {
            coin.mesh.position.z += coinMovement;
            
            // Animate coin floating and glowing
            coin.mesh.position.y = 1 + Math.sin(Date.now() * 0.01 + index) * 0.2;
            coin.mesh.rotation.y += 0.1; // Spin the coin
            
            const coinGlow = (coin.mesh as any).coinGlow;
            if (coinGlow) {
              coinGlow.material.opacity = 0.4 + Math.sin(Date.now() * 0.008 + index) * 0.2;
              coinGlow.scale.set(
                1 + Math.sin(Date.now() * 0.006 + index) * 0.2,
                1 + Math.sin(Date.now() * 0.006 + index) * 0.2,
                1 + Math.sin(Date.now() * 0.006 + index) * 0.2
              );
            }
          }
          
          if (!coin.collected && coin.mesh) {
            const coinLane3D = coin.mesh.position.x;
            const distance = Math.sqrt(
              Math.pow(coinLane3D - playerLane3D, 2) +
              Math.pow(coin.mesh.position.z, 2)
            );

            if (distance < 1.5) {
              // Coin collected with particle burst!
              // Create collection particle effect
              for (let i = 0; i < 10; i++) {
                const particleGeom = new THREE.SphereGeometry(0.05, 4, 4);
                const particleMat = new THREE.MeshBasicMaterial({ 
                  color: 0xffd700,
                  transparent: true,
                  opacity: 0.8
                });
                const particle = new THREE.Mesh(particleGeom, particleMat);
                particle.position.copy(coin.mesh.position);
                (particle as any).velocity = new THREE.Vector3(
                  (Math.random() - 0.5) * 2,
                  Math.random() * 2,
                  (Math.random() - 0.5) * 2
                );
                sceneRef.current!.add(particle);
                
                // Animate and remove particle
                const animateParticle = () => {
                  particle.position.add((particle as any).velocity);
                  (particle as any).velocity.multiplyScalar(0.95);
                  particle.material.opacity *= 0.95;
                  
                  if (particle.material.opacity < 0.01) {
                    sceneRef.current!.remove(particle);
                  } else {
                    requestAnimationFrame(animateParticle);
                  }
                };
                animateParticle();
              }
              
              addCoins(10);
              sceneRef.current!.remove(coin.mesh);
              return { ...coin, collected: true };
            }
          }
          return coin;
        }));

        // Update obstacle positions and check collisions
        const obstacleMovement = speed * deltaTime * SPEED_MULTIPLIER;
        for (const obstacle of obstacles) {
          if (obstacle.mesh) {
            obstacle.mesh.position.z += obstacleMovement;
            
            // Animate obstacle rotation and warning glow
            obstacle.mesh.rotation.y += 0.02;
            const warningGlow = (obstacle.mesh as any).warningGlow;
            if (warningGlow) {
              warningGlow.material.opacity = 0.2 + Math.sin(Date.now() * 0.01) * 0.1;
              warningGlow.scale.set(
                1 + Math.sin(Date.now() * 0.008) * 0.1,
                1,
                1 + Math.sin(Date.now() * 0.008) * 0.1
              );
            }
            
            const obstacleLane3D = obstacle.mesh.position.x;
            const distance = Math.sqrt(
              Math.pow(obstacleLane3D - playerLane3D, 2) +
              Math.pow(obstacle.mesh.position.z, 2)
            );

            // More precise collision detection
            if (distance < 2 && Math.abs(obstacle.mesh.position.z) < 2) {
              // Check if player can avoid collision
              if (obstacle.type === 'barrier' && isJumping) continue;
              if (obstacle.type === 'pole' && isRolling) continue;

              // Collision detected - create explosion effect!
              // Create explosion particles
              for (let i = 0; i < 20; i++) {
                const particleGeom = new THREE.SphereGeometry(0.1, 4, 4);
                const particleMat = new THREE.MeshBasicMaterial({ 
                  color: Math.random() > 0.5 ? 0xff0000 : 0xff6600,
                  transparent: true,
                  opacity: 1
                });
                const particle = new THREE.Mesh(particleGeom, particleMat);
                particle.position.copy(playerRef.current!.position);
                (particle as any).velocity = new THREE.Vector3(
                  (Math.random() - 0.5) * 4,
                  Math.random() * 3,
                  (Math.random() - 0.5) * 4
                );
                sceneRef.current!.add(particle);
                
                // Animate explosion particle
                const animateExplosion = () => {
                  particle.position.add((particle as any).velocity);
                  (particle as any).velocity.y -= 0.1; // Gravity
                  (particle as any).velocity.multiplyScalar(0.98);
                  particle.material.opacity *= 0.92;
                  particle.scale.multiplyScalar(1.02);
                  
                  if (particle.material.opacity < 0.01) {
                    sceneRef.current!.remove(particle);
                  } else {
                    requestAnimationFrame(animateExplosion);
                  }
                };
                animateExplosion();
              }
              
              console.log('Collision detected!', obstacle.type, distance);
              setGameStatus('gameOver');
              return;
            }
          }
        }

        // Clean up old objects
        setObstacles(prev => {
          const filtered = prev.filter(obs => {
            if (obs.mesh && obs.mesh.position.z > 50) {
              sceneRef.current!.remove(obs.mesh);
              return false;
            }
            return true;
          });
          return filtered;
        });
        
        setCoins(prev => {
          const filtered = prev.filter(coin => {
            if (coin.mesh && coin.mesh.position.z > 50) {
              sceneRef.current!.remove(coin.mesh);
              return false;
            }
            return true;
          });
          return filtered;
        });
        
        setCoins(prev => {
          const filtered = prev.filter(coin => {
            if (coin.y < newCameraY - 800) {
              if (coin.mesh) {
                sceneRef.current!.remove(coin.mesh);
              }
              return false;
            }
            return true;
          });
          return filtered;
        });

        // Render
        if (rendererRef.current && sceneRef.current && cameraRef.current) {
          rendererRef.current.render(sceneRef.current, cameraRef.current);
        }
      }

      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoopRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameStatus, speed, lane, isJumping, isRolling, cameraY]);

  if (gameStatus !== 'playing' && gameStatus !== 'paused') {
    return null;
  }

  return (
    <div 
      ref={mountRef} 
      className="w-full h-full"
      style={{ background: 'linear-gradient(to bottom, #60a5fa, #3b82f6)' }}
    />
  );
}