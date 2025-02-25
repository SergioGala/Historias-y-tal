// src/components/AnimatedSvgCharacter/index.js
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Animaciones para elementos SVG
const eyeBlinking = keyframes`
  0%, 45%, 55%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.1); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const wobble = keyframes`
  0%, 100% { transform: rotate(0); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
`;

const floating = keyframes`
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-5px, 5px); }
  50% { transform: translate(0, 10px); }
  75% { transform: translate(5px, 5px); }
`;

const heartbeat = keyframes`
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.1); }
  35% { transform: scale(1); }
  50% { transform: scale(1.1); }
  65% { transform: scale(1); }
`;

const colorShift = keyframes`
  0%, 100% { fill: var(--color-primary); }
  50% { fill: var(--color-secondary); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

const CharacterContainer = styled.div`
  position: absolute;
  width: ${props => props.$size || '120px'};
  height: ${props => props.$size || '120px'};
  top: ${props => props.$top || '50%'};
  left: ${props => props.$left || '10%'};
  z-index: 10;
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: ${props => props.$animation === 'bounce' ? bounce : 
              props.$animation === 'wobble' ? wobble : 
              props.$animation === 'heartbeat' ? heartbeat : floating} 
              ${props => props.$duration || '3s'} 
              infinite ease-in-out;
  
  &:hover {
    transform: scale(1.1);
  }
  
  & svg {
    width: 100%;
    height: 100%;
    --color-primary: ${props => props.$primaryColor || props.theme.colors.primary};
    --color-secondary: ${props => props.$secondaryColor || props.theme.colors.secondary};
  }
  
  & .eye {
    animation: ${eyeBlinking} 4s infinite;
    transform-origin: center;
  }
  
  & .body, & .main-body {
    transition: fill 0.3s ease;
  }
  
  &:hover .body, &:hover .main-body {
    animation: ${colorShift} 2s infinite alternate;
  }
  
  & .accessory {
    animation: ${wobble} 3s ease-in-out infinite;
    transform-origin: center;
  }
  
  & .sparkle {
    animation: ${sparkle} 1.5s infinite alternate;
    transform-origin: center;
  }
  
  & .mouth {
    transition: transform 0.3s ease;
  }
  
  &:hover .mouth {
    transform: scale(1.2);
  }
`;

const SpeechBubble = styled.div`
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  background: ${props => props.theme.name === 'dark' ? '#2A2E35' : '#F5F5F5'};
  color: ${props => props.theme.colors.text};
  padding: 12px 18px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  z-index: 11;
  pointer-events: none;
  border: 2px solid ${props => props.theme.colors.primary};
  max-width: 200px;
  text-align: center;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px 8px 0;
    border-style: solid;
    border-color: ${props => props.theme.name === 'dark' ? '#2A2E35' : '#F5F5F5'} transparent transparent;
  }
  
  ${CharacterContainer}:hover & {
    opacity: 1;
    transform: translateX(-50%) scale(1.1);
  }
`;

const MessageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  
  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

const MessageBox = styled.div`
  background: ${props => props.theme.colors.background};
  border-radius: 20px;
  padding: 30px;
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
  position: relative;
  transform: translateY(20px);
  transition: transform 0.3s ease;
  
  ${MessageOverlay}.active & {
    transform: translateY(0);
  }
  
  h3 {
    margin-top: 0;
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
  }
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
  
  button {
    background: ${props => props.theme.colors.primary};
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
    margin-top: 15px;
    
    &:hover {
      background: ${props => props.theme.colors.secondary};
    }
  }
  
  .close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${props => props.theme.colors.text};
    margin: 0;
    padding: 0;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;
// Definición de los personajes SVG mejorados
const characters = {
    dragon: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <!-- Cuerpo del dragón -->
        <ellipse class="main-body" cx="50" cy="55" rx="35" ry="30" fill="#FF6B6B" />
        
        <!-- Cabeza -->
        <circle class="main-body" cx="30" cy="40" r="20" fill="#FF6B6B" />
        
        <!-- Escamas del cuerpo -->
        <path d="M 30 40 Q 50 25, 70 40 Q 80 55, 70 70 Q 50 80, 30 70 Q 20 55, 30 40" 
              fill="#FF4F4F" stroke="#FF3333" stroke-width="1" />
        
        <!-- Cola -->
        <path class="accessory" d="M 80 55 Q 95 45, 100 35" stroke="#FF6B6B" stroke-width="8" 
              stroke-linecap="round" fill="none" />
        <path class="accessory" d="M 100 35 L 95 30 L 105 32" fill="#FF9843" stroke="#FF9843" stroke-width="1" />
        
        <!-- Alas -->
        <path class="accessory" d="M 50 40 Q 75 20, 70 45" fill="#FF9843" stroke="#FF7433" 
              stroke-width="2" />
        <path class="accessory" d="M 70 45 L 65 35 L 75 40" fill="#FF9843" stroke="#FF7433" 
              stroke-width="1" />
        
        <!-- Cuernos -->
        <path class="accessory" d="M 20 30 L 10 15" stroke="#FF9843" stroke-width="4" 
              stroke-linecap="round" fill="none" />
        <path class="accessory" d="M 40 30 L 50 15" stroke="#FF9843" stroke-width="4" 
              stroke-linecap="round" fill="none" />
        
        <!-- Ojos -->
        <g class="eye left-eye">
          <circle cx="23" cy="36" r="5" fill="white" />
          <circle cx="23" cy="36" r="2.5" fill="#FFA500" />
          <circle cx="23" cy="36" r="1" fill="black" />
          <circle class="sparkle" cx="21" cy="34" r="1" fill="white" />
        </g>
        <g class="eye right-eye">
          <circle cx="37" cy="36" r="5" fill="white" />
          <circle cx="37" cy="36" r="2.5" fill="#FFA500" />
          <circle cx="37" cy="36" r="1" fill="black" />
          <circle class="sparkle" cx="35" cy="34" r="1" fill="white" />
        </g>
        
        <!-- Boca -->
        <path class="mouth" d="M 20 45 Q 30 52, 40 45" stroke="#FF3333" stroke-width="2" fill="none" />
        
        <!-- Dientes -->
        <path d="M 25 45 L 25 48" stroke="white" stroke-width="2" />
        <path d="M 30 46 L 30 49" stroke="white" stroke-width="2" />
        <path d="M 35 45 L 35 48" stroke="white" stroke-width="2" />
        
        <!-- Llamas -->
        <path class="sparkle" d="M 10 43 Q 15 40, 20 43 Q 15 46, 10 43" fill="#FFA500" />
        <path class="sparkle" d="M 5 43 Q 10 39, 15 43 Q 10 47, 5 43" fill="#FF4500" />
        
        <!-- Detalles -->
        <circle class="sparkle" cx="60" cy="45" r="2" fill="#FFD700" />
        <circle class="sparkle" cx="70" cy="55" r="1.5" fill="#FFD700" />
        <circle class="sparkle" cx="65" cy="65" r="2.5" fill="#FFD700" />
      </svg>
    `,
    
    princess: `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <!-- Vestido -->
        <path class="main-body" d="M 30 65 Q 50 75, 70 65 L 70 90 L 30 90 Z" fill="#FFB7EB" />
        
        <!-- Cuerpo superior -->
        <ellipse class="main-body" cx="50" cy="50" rx="20" ry="25" fill="#FFCEF3" />
        
        <!-- Cabeza -->
        <circle class="main-body" cx="50" cy="30" r="15" fill="#FFDEDE" />
        
        <!-- Pelo -->
        <path d="M 35 30 Q 30 20, 40 15 Q 50 10, 60 15 Q 70 20, 65 30 Q 60 35, 50 40 Q 40 35, 35 30" 
              fill="#FFD700" stroke="#E6C200" stroke-width="0.5" />
        <path class="accessory" d="M 38 15 Q 35 5, 45 10" fill="none" stroke="#E6C200" stroke-width="2" />
        <path class="accessory" d="M 62 15 Q 65 5, 55 10" fill="none" stroke="#E6C200" stroke-width="2" />
        
        <!-- Corona -->
        <path class="accessory" d="M 40 15 L 45 5 L 50 12 L 55 5 L 60 15" 
              fill="#FFD700" stroke="#E6C200" stroke-width="1" />
        <circle class="sparkle" cx="45" cy="10" r="2" fill="#FF1493" />
        <circle class="sparkle" cx="50" cy="8" r="1.5" fill="#00BFFF" />
        <circle class="sparkle" cx="55" cy="10" r="2" fill="#FF1493" />
        
        <!-- Ojos -->
        <g class="eye left-eye">
          <circle cx="43" cy="28" r="3" fill="white" />
          <circle cx="43" cy="28" r="1.5" fill="#6495ED" />
          <circle cx="43" cy="28" r="0.7" fill="black" />
          <circle class="sparkle" cx="42" cy="27" r="0.7" fill="white" />
        </g>
        <g class="eye right-eye">
          <circle cx="57" cy="28" r="3" fill="white" />
          <circle cx="57" cy="28" r="1.5" fill="#6495ED" />
          <circle cx="57" cy="28" r="0.7" fill="black" />
          <circle class="sparkle" cx="56" cy="27" r="0.7" fill="white" />
        </g>
        
        <!-- Boca -->
        <path class="mouth" d="M 45 35 Q 50 38, 55 35" stroke="#FF6B8B" stroke-width="1.5" fill="none" />
        
        <!-- Mejillas -->
        <circle cx="40" cy="32" r="3" fill="#FFB7EB" opacity="0.5" />
        <circle cx="60" cy="32" r="3" fill="#FFB7EB" opacity="0.5" />
        
        <!-- Collar -->
        <path d="M 40 50 Q 50 55, 60 50" stroke="#FF1493" stroke-width="2" fill="none" />
        <circle class="sparkle" cx="50" cy="53" r="2" fill="#FF1493" />
        
        <!-- Detalles del vestido -->
        <path d="M 40 70 Q 50 75, 60 70" stroke="#FF69B4" stroke-width="1.5" fill="none" />
        <path d="M 35 80 Q 50 85, 65 80" stroke="#FF69B4" stroke-width="1.5" fill="none" />
        <circle class="sparkle" cx="40" cy="75" r="1" fill="#FF1493" />
        <circle class="sparkle" cx="50" cy="77" r="1" fill="#FF1493" />
        <circle class="sparkle" cx="60" cy="75" r="1" fill="#FF1493" />
      </svg>
    `,
    fairy: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Cuerpo -->
      <ellipse class="main-body" cx="50" cy="55" rx="15" ry="20" fill="#AED9E0" />
      
      <!-- Cabeza -->
      <circle class="main-body" cx="50" cy="35" r="12" fill="#E6F7FF" />
      
      <!-- Alas grandes -->
      <path class="accessory" d="M 50 45 Q 75 35, 85 55 Q 75 65, 50 55" 
            fill="#F8C8DC" opacity="0.7" stroke="#F8A4C8" stroke-width="0.5" />
      <path class="accessory" d="M 50 45 Q 25 35, 15 55 Q 25 65, 50 55" 
            fill="#F8C8DC" opacity="0.7" stroke="#F8A4C8" stroke-width="0.5" />
      
      <!-- Alas pequeñas -->
      <path class="accessory" d="M 50 50 Q 70 45, 75 60 Q 65 65, 50 55" 
            fill="#C8F8DC" opacity="0.7" stroke="#A4F8C8" stroke-width="0.5" />
      <path class="accessory" d="M 50 50 Q 30 45, 25 60 Q 35 65, 50 55" 
            fill="#C8F8DC" opacity="0.7" stroke="#A4F8C8" stroke-width="0.5" />
      
      <!-- Pelo -->
      <path d="M 40 30 Q 50 20, 60 30" fill="#C0F8FF" stroke="#A0E8EF" stroke-width="0.5" />
      <path class="accessory" d="M 43 25 Q 40 15, 45 20" fill="none" stroke="#C0F8FF" stroke-width="1.5" />
      <path class="accessory" d="M 57 25 Q 60 15, 55 20" fill="none" stroke="#C0F8FF" stroke-width="1.5" />
      
      <!-- Ojos -->
      <g class="eye left-eye">
        <circle cx="45" cy="33" r="2.5" fill="white" />
        <circle cx="45" cy="33" r="1.2" fill="#9370DB" />
        <circle cx="45" cy="33" r="0.5" fill="black" />
        <circle class="sparkle" cx="44" cy="32" r="0.5" fill="white" />
      </g>
      <g class="eye right-eye">
        <circle cx="55" cy="33" r="2.5" fill="white" />
        <circle cx="55" cy="33" r="1.2" fill="#9370DB" />
        <circle cx="55" cy="33" r="0.5" fill="black" />
        <circle class="sparkle" cx="54" cy="32" r="0.5" fill="white" />
      </g>
      
      <!-- Boca -->
      <path class="mouth" d="M 46 38 Q 50 40, 54 38" stroke="#9370DB" stroke-width="1" fill="none" />
      
      <!-- Varita mágica -->
      <path class="accessory" d="M 50 65 L 65 80" stroke="#FFD700" stroke-width="2" fill="none" />
      <circle class="sparkle" cx="65" cy="80" r="3" fill="#FFD700" />
      
      <!-- Destellos mágicos -->
      <circle class="sparkle" cx="60" cy="75" r="1" fill="white" />
      <circle class="sparkle" cx="62" cy="72" r="1.5" fill="white" />
      <circle class="sparkle" cx="57" cy="70" r="1" fill="white" />
      <circle class="sparkle" cx="68" cy="78" r="2" fill="white" />
      <circle class="sparkle" cx="70" cy="75" r="1" fill="white" />
      
      <!-- Decoración de la varilla -->
      <path class="sparkle" d="M 65 80 L 68 83 L 65 85 L 63 82 Z" fill="#FF1493" />
      
      <!-- Detalles de las alas -->
      <path class="sparkle" d="M 65 50 Q 70 55, 65 60" stroke="#F8A4C8" stroke-width="0.5" fill="none" />
      <path class="sparkle" d="M 35 50 Q 30 55, 35 60" stroke="#F8A4C8" stroke-width="0.5" fill="none" />
      <circle class="sparkle" cx="70" cy="45" r="1" fill="#FF1493" />
      <circle class="sparkle" cx="75" cy="55" r="1" fill="#FF1493" />
      <circle class="sparkle" cx="30" cy="45" r="1" fill="#FF1493" />
      <circle class="sparkle" cx="25" cy="55" r="1" fill="#FF1493" />
    </svg>
  `,
  
  wizard: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Túnica -->
      <path class="main-body" d="M 30 50 L 35 85 L 65 85 L 70 50 Z" fill="#9D85B1" />
      
      <!-- Cuerpo -->
      <ellipse class="main-body" cx="50" cy="50" rx="20" ry="15" fill="#9D85B1" />
      
      <!-- Cabeza -->
      <circle class="main-body" cx="50" cy="30" r="15" fill="#E6D7F5" />
      
      <!-- Barba -->
      <path d="M 40 35 Q 50 70, 60 35" fill="white" opacity="0.8" stroke="#DDDDDD" stroke-width="0.5" />
      <path class="accessory" d="M 42 45 Q 50 60, 58 45" fill="none" stroke="white" stroke-width="1" />
      
      <!-- Sombrero de mago -->
      <path class="accessory" d="M 30 25 L 70 25 L 50 0 Z" fill="#00B7FF" stroke="#009AD9" stroke-width="1" />
      <path d="M 25 25 L 75 25" stroke="#009AD9" stroke-width="2" />
      
      <!-- Estrellas en el sombrero -->
      <path class="sparkle" d="M 45 15 L 47 10 L 49 15 L 54 15 L 50 18 L 52 23 L 47 20 L 43 23 L 45 18 L 40 15 Z" 
            fill="white" opacity="0.8" />
      <circle class="sparkle" cx="60" cy="12" r="1" fill="white" />
      <circle class="sparkle" cx="55" cy="8" r="1.5" fill="white" />
      <circle class="sparkle" cx="42" cy="10" r="1" fill="white" />
      
      <!-- Ojos -->
      <g class="eye left-eye">
        <circle cx="43" cy="28" r="3" fill="white" />
        <circle cx="43" cy="28" r="1.5" fill="#5D3FD3" />
        <circle cx="43" cy="28" r="0.7" fill="black" />
        <circle class="sparkle" cx="42" cy="27" r="0.7" fill="white" />
      </g>
      <g class="eye right-eye">
        <circle cx="57" cy="28" r="3" fill="white" />
        <circle cx="57" cy="28" r="1.5" fill="#5D3FD3" />
        <circle cx="57" cy="28" r="0.7" fill="black" />
        <circle class="sparkle" cx="56" cy="27" r="0.7" fill="white" />
      </g>
      
      <!-- Cejas pobladas -->
      <path d="M 40 23 Q 43 21, 46 23" stroke="#888888" stroke-width="1" fill="none" />
      <path d="M 54 23 Q 57 21, 60 23" stroke="#888888" stroke-width="1" fill="none" />
      
      <!-- Boca -->
      <path class="mouth" d="M 45 35 Q 50 38, 55 35" stroke="#AA88CC" stroke-width="1.5" fill="none" />
      
      <!-- Bastón mágico -->
      <path class="accessory" d="M 25 90 L 30 50" stroke="#8B4513" stroke-width="3" fill="none" />
      <circle class="sparkle" cx="25" cy="90" r="5" fill="#00B7FF" />
      
      <!-- Destellos mágicos -->
      <circle class="sparkle" cx="27" cy="85" r="1" fill="white" />
      <circle class="sparkle" cx="24" cy="82" r="2" fill="white" />
      <circle class="sparkle" cx="20" cy="88" r="1" fill="white" />
      <circle class="sparkle" cx="30" cy="92" r="1.5" fill="white" />
      
      <!-- Cinturón -->
      <path d="M 30 60 L 70 60" stroke="#FFD700" stroke-width="3" fill="none" />
      <rect x="48" y="58" width="4" height="4" fill="#FFD700" />
    </svg>
  `,
  knight: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Armadura cuerpo -->
      <path class="main-body" d="M 35 55 L 40 90 L 60 90 L 65 55 Z" fill="#A5A5A5" />
      
      <!-- Pecho -->
      <path class="main-body" d="M 35 55 Q 50 50, 65 55 Q 60 35, 50 30 Q 40 35, 35 55" 
            fill="#C0C0C0" stroke="#A0A0A0" stroke-width="1" />
      
      <!-- Detalles de la armadura -->
      <path d="M 40 60 L 60 60" stroke="#7B7B7B" stroke-width="1" />
      <path d="M 42 70 L 58 70" stroke="#7B7B7B" stroke-width="1" />
      <path d="M 43 80 L 57 80" stroke="#7B7B7B" stroke-width="1" />
      <path d="M 50 55 L 50 90" stroke="#7B7B7B" stroke-width="1" />
      <circle cx="50" cy="45" r="3" fill="#7B7B7B" />
      
      <!-- Cabeza/Casco -->
      <ellipse class="main-body" cx="50" cy="30" rx="15" ry="17" fill="#A5A5A5" />
      <path d="M 35 30 Q 42 15, 50 10 Q 58 15, 65 30" fill="#C0C0C0" stroke="#A0A0A0" stroke-width="1" />
      
      <!-- Visor del casco -->
      <path d="M 40 25 L 60 25" stroke="#333333" stroke-width="2" />
      <path d="M 42 25 L 42 35" stroke="#333333" stroke-width="2" />
      <path d="M 46 25 L 46 35" stroke="#333333" stroke-width="2" />
      <path d="M 50 25 L 50 35" stroke="#333333" stroke-width="2" />
      <path d="M 54 25 L 54 35" stroke="#333333" stroke-width="2" />
      <path d="M 58 25 L 58 35" stroke="#333333" stroke-width="2" />
      
      <!-- Plumaje del casco -->
      <path class="accessory" d="M 50 10 Q 45 0, 40 5 Q 35 0, 30 5 Q 40 15, 50 10" 
            fill="#FF0000" stroke="#CC0000" stroke-width="0.5" />
      
      <!-- Ojos dentro del casco -->
      <g class="eye left-eye">
        <circle cx="45" cy="30" r="2" fill="#333333" />
        <circle class="sparkle" cx="44" cy="29" r="0.5" fill="#FFFFFF" />
      </g>
      <g class="eye right-eye">
        <circle cx="55" cy="30" r="2" fill="#333333" />
        <circle class="sparkle" cx="54" cy="29" r="0.5" fill="#FFFFFF" />
      </g>
      
      <!-- Espada -->
      <path class="accessory" d="M 75 50 L 75 90" stroke="#A5A5A5" stroke-width="3" />
      <path class="accessory" d="M 65 50 L 85 50" stroke="#A5A5A5" stroke-width="4" />
      <path class="accessory" d="M 75 50 L 75 25" stroke="#C0C0C0" stroke-width="2" />
      <circle cx="75" cy="50" r="3" fill="#7B7B7B" />
      
      <!-- Escudo -->
      <path d="M 15 50 L 25 40 L 35 50 L 25 75 Z" fill="#7B7B7B" stroke="#A5A5A5" stroke-width="2" />
      <circle cx="25" cy="55" r="5" fill="#C0C0C0" />
      <path d="M 25 55 L 20 50 L 25 45 L 30 50 Z" fill="#FF0000" stroke="#CC0000" stroke-width="0.5" />
    </svg>
  `,
  pirate: `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Cuerpo -->
      <ellipse class="main-body" cx="50" cy="60" rx="20" ry="25" fill="#8B4513" />
      
      <!-- Cabeza -->
      <circle class="main-body" cx="50" cy="35" r="15" fill="#CD853F" />
      
      <!-- Chaleco -->
      <path d="M 40 50 L 35 85 L 65 85 L 60 50" fill="#A52A2A" stroke="#8B0000" stroke-width="1" />
      <path d="M 40 55 L 60 55" stroke="#8B0000" stroke-width="1" />
      <path d="M 38 65 L 62 65" stroke="#8B0000" stroke-width="1" />
      <path d="M 37 75 L 63 75" stroke="#8B0000" stroke-width="1" />
      
      <!-- Pañuelo de cabeza -->
      <path d="M 35 35 Q 50 25, 65 35" fill="#FFC300" stroke="#FF9800" stroke-width="1" />
      <path d="M 35 35 L 38 28 L 42 35" fill="#FFC300" stroke="#FF9800" stroke-width="0.5" />
      <path d="M 58 35 L 62 28 L 65 35" fill="#FFC300" stroke="#FF9800" stroke-width="0.5" />
      
      <!-- Parche en el ojo -->
      <path d="M 55 30 Q 60 28, 65 33" stroke="black" stroke-width="2" fill="none" />
      <circle cx="60" cy="33" r="5" fill="black" />
      
      <!-- Ojo visible -->
      <g class="eye left-eye">
        <circle cx="40" cy="33" r="3" fill="white" />
        <circle cx="40" cy="33" r="1.5" fill="#8B4513" />
        <circle cx="40" cy="33" r="0.7" fill="black" />
        <circle class="sparkle" cx="39" cy="32" r="0.7" fill="white" />
      </g>
      
      <!-- Cicatriz -->
      <path d="M 45 25 L 55 40" stroke="#A52A2A" stroke-width="1" />
      <path d="M 46 25 L 56 40" stroke="#A52A2A" stroke-width="1" />
      
      <!-- Boca y barba -->
      <path class="mouth" d="M 42 43 Q 50 48, 58 43" stroke="#A52A2A" stroke-width="1.5" fill="none" />
      <path d="M 40 40 Q 50 60, 60 40" stroke="#8B4513" stroke-width="0.5" fill="none" />
      <path d="M 42 48 Q 50 55, 58 48" stroke="#8B4513" stroke-width="0.5" fill="none" />
      
      <!-- Sombrero de pirata -->
      <path class="accessory" d="M 25 25 L 75 25 L 65 15 L 35 15 Z" fill="black" stroke="#333333" stroke-width="1" />
      <path d="M 25 25 L 30 20 L 70 20 L 75 25" fill="#333333" />
      
      <!-- Calavera en el sombrero -->
      <circle cx="50" cy="20" r="3" fill="white" />
      <circle cx="48" cy="19" r="0.7" fill="black" />
      <circle cx="52" cy="19" r="0.7" fill="black" />
      <path d="M 48 21 Q 50 22, 52 21" stroke="black" stroke-width="0.7" fill="none" />
      <path d="M 47 23 L 53 23" stroke="white" stroke-width="0.7" />
      
      <!-- Pendiente -->
      <circle class="accessory" cx="60" cy="45" r="2" fill="#FFD700" />
      
      <!-- Gancho (mano) -->
      <path class="accessory" d="M 70 60 Q 80 50, 75 65 Q 70 70, 65 65" 
            fill="none" stroke="#C0C0C0" stroke-width="2" />
      <path d="M 65 65 L 60 60" stroke="#C0C0C0" stroke-width="2" fill="none" />
      
      <!-- Botones del chaleco -->
      <circle cx="50" cy="60" r="1.5" fill="#FFD700" />
      <circle cx="50" cy="70" r="1.5" fill="#FFD700" />
      <circle cx="50" cy="80" r="1.5" fill="#FFD700" />
    </svg>
  `
};
const AnimatedSvgCharacter = ({
    type,
    message,
    size = '120px',
    top = '50%',
    left = '10%',
    animation = 'floating', // bounce, wobble, floating, heartbeat
    duration = '3s',
    primaryColor,
    secondaryColor,
    onClick
  }) => {
    const [showDialog, setShowDialog] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');
    const [dialogMessage, setDialogMessage] = useState('');
  
    // Información personalizada para cada personaje
    const characterInfo = {
      dragon: {
        title: 'Dragón Lector',
        description: 'Un dragón amigable que adora contar historias de aventuras y tesoros. ¡Sus historias son tan apasionantes que a veces escupe pequeñas llamas de emoción!'
      },
      princess: {
        title: 'Princesa Aventurera',
        description: 'No es una princesa cualquiera que espera ser rescatada. ¡Ella misma lidera las expediciones a reinos desconocidos y siempre encuentra los tesoros más valiosos!'
      },
      fairy: {
        title: 'Hada de los Cuentos',
        description: 'Con su varita mágica, transforma las historias normales en experiencias mágicas llenas de color y fantasía. Cada historia que toca se vuelve inolvidable.'
      },
      wizard: {
        title: 'Mago Sabio',
        description: 'Ha estudiado los libros mágicos más antiguos y conoce los secretos de todas las historias. Su barba ha crecido tanto como su sabiduría a lo largo de los siglos.'
      },
      knight: {
        title: 'Caballero Valiente',
        description: 'Siempre listo para defender la verdad y la justicia. Con su escudo y espada, protege a todos los personajes de los cuentos y se asegura de que siempre haya finales felices.'
      },
      pirate: {
        title: 'Pirata Contador de Historias',
        description: '¡Yarr! Ha navegado los siete mares de la imaginación y ha recolectado los tesoros de historias más increíbles. Su loro favorito siempre completa sus frases.'
      }
    };
  
    // Manejador de clic personalizado
    const handleClick = () => {
      const character = characterInfo[type] || {
        title: 'Personaje Mágico',
        description: '¡Un habitante del mundo de las historias y la fantasía!'
      };
      
      setDialogTitle(character.title);
      setDialogMessage(character.description);
      setShowDialog(true);
      
      // Si hay un manejador de clic externo, también lo ejecutamos
      if (onClick) onClick();
    };
  
    return (
      <>
        <CharacterContainer
          $size={size}
          $top={top}
          $left={left}
          $animation={animation}
          $duration={duration}
          $primaryColor={primaryColor}
          $secondaryColor={secondaryColor}
          onClick={handleClick}
        >
          <div dangerouslySetInnerHTML={{ __html: characters[type] || characters.dragon }} />
          {message && <SpeechBubble>{message}</SpeechBubble>}
        </CharacterContainer>
        
        <MessageOverlay className={showDialog ? 'active' : ''}>
          <MessageBox>
            <button className="close-btn" onClick={() => setShowDialog(false)}>×</button>
            <h3>{dialogTitle}</h3>
            <p>{dialogMessage}</p>
            <button onClick={() => setShowDialog(false)}>¡Entendido!</button>
          </MessageBox>
        </MessageOverlay>
      </>
    );
  };
  
  export default AnimatedSvgCharacter;