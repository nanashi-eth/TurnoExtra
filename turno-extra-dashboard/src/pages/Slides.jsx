import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Calendar,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PresentacionInicial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fullscreenMode, setFullscreenMode] = useState(false);
  const navigate = useNavigate();

  const slides = [
    {
      img: "/slides/slide1.jpg",
      title: "Introducción",
      description: "Bienvenidos a Turno Extra",
    },
    {
      img: "/slides/slide2.jpg",
      title: "Equipo",
      description: "Presentando al equipo",
    },
    {
      img: "/slides/slide3.jpg",
      title: "Contexto",
      description: "Identificando las necesidades",
    },
    {
      img: "/slides/slide4.jpg",
      title: "Objetivos",
      description: "Definiendo el proposito del proyecto",
    },
    {
      img: "/slides/slide5.jpg",
      title: "Indicadores",
      description: "Resumiendo las metricas claves",
    },
  ];

  // Navegación con teclado
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Alternar modo pantalla completa con tecla F
      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        setFullscreenMode((prev) => !prev);
        return;
      }

      // Evitar que la barra espaciadora haga scroll
      if (e.key === " ") {
        e.preventDefault();
      }

      if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
        setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1));
      } else if (e.key === "ArrowLeft") {
        setCurrentSlide(Math.max(0, currentSlide - 1));
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide, slides.length]);

  const handleNext = () => {
    setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1));
  };

  const handlePrev = () => {
    setCurrentSlide(Math.max(0, currentSlide - 1));
  };

  const handleNavigate = () => {
    navigate("/cronograma");
  };

  const toggleFullscreen = () => {
    setFullscreenMode((prev) => !prev);
  };

  // MODO PANTALLA COMPLETA
  if (fullscreenMode) {
    return (
      <div className="h-screen bg-black flex flex-col overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={slides[currentSlide].img}
            alt={slides[currentSlide].title}
            className="w-full h-full object-contain"
          />

          {/* Contador y botón de modo en esquina superior derecha */}
          <div className="absolute top-4 right-4 flex items-center space-x-3">
            <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {currentSlide + 1} / {slides.length}
            </div>
            <button
              onClick={toggleFullscreen}
              className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full hover:bg-black/70 transition-all"
              title="Salir de pantalla completa (F)"
            >
              <Minimize2 className="w-5 h-5" />
            </button>
          </div>

          {/* Controles de navegación */}
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all ${
              currentSlide === 0
                ? "bg-white/20 text-white/40 cursor-not-allowed"
                : "bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white hover:scale-110 shadow-lg"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all ${
              currentSlide === slides.length - 1
                ? "bg-white/20 text-white/40 cursor-not-allowed"
                : "bg-white/80 backdrop-blur-sm text-gray-800 hover:bg-white hover:scale-110 shadow-lg"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicadores de progreso */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all ${
                  index === currentSlide
                    ? "w-8 h-2 bg-white rounded-full"
                    : "w-2 h-2 bg-white/40 rounded-full hover:bg-white/70"
                }`}
                aria-label={`Ir a diapositiva ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // MODO NORMAL
  return (
    <div className="h-screen bg-gradient-to-br from-teal-50 to-cyan-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white shadow-md py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Turno Extra</h1>
            <p className="text-sm text-gray-600">Presentación del Proyecto</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="font-semibold">
                Diapositiva {currentSlide + 1}
              </span>
              <span className="text-gray-400">/</span>
              <span>{slides.length}</span>
            </div>
            <button
              onClick={toggleFullscreen}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-all"
              title="Pantalla completa (F)"
            >
              <Maximize2 className="w-4 h-4" />
              <span className="hidden sm:inline">Pantalla Completa</span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide */}
      <div className="flex-1 relative flex items-center justify-center p-6">
        <div className="relative w-full max-w-6xl bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="relative aspect-video bg-gray-100">
            <img
              src={slides[currentSlide].img}
              alt={slides[currentSlide].title}
              className="w-full h-full object-contain"
            />
            {/* Overlay con título en la esquina */}
            <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2 rounded-lg shadow-lg">
              <p className="text-sm font-semibold">{slides[currentSlide].title}</p>
            </div>

            {/* Descripción en la parte inferior */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-lg font-medium">{slides[currentSlide].description}</p>
            </div>
          </div>

          {/* Controles */}
          <div className="bg-white border-t border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrev}
                disabled={currentSlide === 0}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  currentSlide === 0
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-teal-100 text-teal-700 hover:bg-teal-200 shadow-sm hover:shadow-md"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="hidden sm:inline">Anterior</span>
              </button>

              <div className="flex items-center space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all ${
                      index === currentSlide
                        ? "w-8 h-2 bg-teal-600 rounded-full"
                        : "w-2 h-2 bg-gray-300 rounded-full hover:bg-teal-400"
                    }`}
                    aria-label={`Ir a diapositiva ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentSlide === slides.length - 1}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                  currentSlide === slides.length - 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-teal-100 text-teal-700 hover:bg-teal-200 shadow-sm hover:shadow-md"
                }`}
              >
                <span className="hidden sm:inline">Siguiente</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
        </div>
      </div>
       {/* Instrucciones de teclado */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg px-4 py-2 text-xs text-gray-600">
          <p className="font-semibold mb-1">⌨️ Atajos de teclado:</p>
          <div className="space-y-0.5">
            <p><span className="font-mono bg-gray-100 px-1 rounded">F</span> Pantalla completa</p>
            <p><span className="font-mono bg-gray-100 px-1 rounded">←</span> Anterior</p>
            <p><span className="font-mono bg-gray-100 px-1 rounded">→</span> / <span className="font-mono bg-gray-100 px-1 rounded">Enter</span> / <span className="font-mono bg-gray-100 px-1 rounded">Espacio</span> Siguiente</p>
          </div>
        </div>

      {/* Footer con CTA - Solo en última slide */}
      {currentSlide === slides.length - 1 && (
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-white gap-4">
            <div>
              <h3 className="text-xl font-bold mb-1">
                ¿Listo para conocer el plan completo?
              </h3>
              <p className="text-sm opacity-90">
                Descubre nuestro cronograma detallado y dashboards interactivos
              </p>
            </div>
            <button
              onClick={handleNavigate}
              className="flex items-center space-x-2 px-6 py-3 bg-white text-teal-600 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              <span>Ver Cronograma</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PresentacionInicial;
