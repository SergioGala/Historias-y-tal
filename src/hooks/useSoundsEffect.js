import { useCallback, useEffect } from 'react';
import soundManager, { soundEffects } from '../utils/soundEffects';

/**
 * Hook para añadir efectos de sonido a elementos interactivos
 * @param {HTMLElement} ref - Referencia al elemento
 * @param {Object} options - Opciones de configuración
 */
export const useSoundEffect = (ref, options = {}) => {
  const { 
    hoverSound = 'hover',
    clickSound = 'click',
    enabled = true
  } = options;
  
  const playHover = useCallback(() => {
    if (enabled && hoverSound) {
      soundManager.play(hoverSound);
    }
  }, [enabled, hoverSound]);
  
  const playClick = useCallback(() => {
    if (enabled && clickSound) {
      soundManager.play(clickSound);
    }
  }, [enabled, clickSound]);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    // Añadir eventos
    element.addEventListener('mouseenter', playHover);
    element.addEventListener('click', playClick);
    
    // Limpiar eventos
    return () => {
      element.removeEventListener('mouseenter', playHover);
      element.removeEventListener('click', playClick);
    };
  }, [ref, playHover, playClick]);
  
  return {
    play: soundManager.play.bind(soundManager),
    setVolume: soundManager.setVolume.bind(soundManager),
    toggleMute: soundManager.toggleMute.bind(soundManager),
    isMuted: soundManager.isMuted
  };
};

export default useSoundEffect;