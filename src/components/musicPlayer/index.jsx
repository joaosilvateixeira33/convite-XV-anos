import { useEffect, useRef, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./musicPlayer.css";
import musicFile from "../../assets/sound/fundo-music.mp3";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.muted = false; 
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.error("Autoplay bloqueado:", err));
      }
  
    };
    document.addEventListener("click", handleUserInteraction);


  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.error("Erro ao iniciar áudio:", err));
      }
      setIsPlaying(prev => !prev);
    }
  };

  return (
    <div className="music-player">
      <audio ref={audioRef} src={musicFile} loop />
      <button onClick={togglePlay} className="play-button">
        <i className={isPlaying ? "bi bi-pause-fill" : "bi bi-play-fill"}></i>
      </button>
      <p>Billy Joel Uptown Girl Instrumental...</p>
    </div>
  );
}