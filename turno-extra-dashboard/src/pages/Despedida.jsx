import { Dices, Sparkles, Heart, Users, Mail, Instagram, Facebook } from 'lucide-react';

const Despedida = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        {/* Card principal */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header con gradiente */}
          <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 p-12 text-center relative overflow-hidden">
            {/* Decoraciones de fondo */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 text-6xl">🎲</div>
              <div className="absolute bottom-10 right-10 text-6xl">🎮</div>
              <div className="absolute top-1/2 left-1/4 text-4xl">♠️</div>
              <div className="absolute top-1/3 right-1/3 text-4xl">♦️</div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 animate-pulse">
                  <Dices className="w-16 h-16 text-white" />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
                ¿Nos acompañáis en la<br />próxima partida?
              </h1>
              
              <div className="flex items-center justify-center space-x-3 text-2xl">
                <Dices className="w-8 h-8 text-yellow-300 animate-bounce" />
                <Sparkles className="w-8 h-8 text-yellow-200 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="p-12">
            <div className="text-center mb-10">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Turno Extra es más que un evento, es una <span className="font-bold text-teal-600">comunidad</span> donde 
                cada tirada de dados cuenta, cada estrategia importa y <span className="font-bold text-cyan-600">cada persona suma</span>.
              </p>
              
              <div className="inline-flex items-center space-x-2 bg-teal-50 px-6 py-3 rounded-full border-2 border-teal-200">
                <Heart className="w-5 h-5 text-teal-600" />
                <span className="text-teal-800 font-semibold">Gracias por ser parte de esta aventura</span>
              </div>
            </div>

            {/* Stats rápidos */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl border-2 border-teal-200">
                <Users className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-teal-700">70+</p>
                <p className="text-sm text-gray-600">Participantes</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl border-2 border-cyan-200">
                <Dices className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-cyan-700">40+</p>
                <p className="text-sm text-gray-600">Juegos</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-blue-200">
                <Sparkles className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-blue-700">4.3/5</p>
                <p className="text-sm text-gray-600">Valoración</p>
              </div>
            </div>

            {/* CTA principal */}
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 text-white text-center mb-8">
              <h3 className="text-2xl font-bold mb-3">¡Únete a nuestra próxima edición!</h3>
              <p className="text-lg mb-6 opacity-90">
                Mantente informado de todas las novedades y eventos
              </p>
              <div className="text-center">
              <div className="flex justify-center space-x-4">
                <button className="p-3 bg-teal-100 hover:bg-teal-200 rounded-full transition-all hover:scale-110">
                  <Instagram className="w-6 h-6 text-teal-600" />
                </button>
                <button className="p-3 bg-cyan-100 hover:bg-cyan-200 rounded-full transition-all hover:scale-110">
                  <Facebook className="w-6 h-6 text-cyan-600" />
                </button>
                <button className="p-3 bg-blue-100 hover:bg-blue-200 rounded-full transition-all hover:scale-110">
                  <Mail className="w-6 h-6 text-blue-600" />
                </button>
              </div>
            </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-12 py-6 text-center border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              <span className="font-bold text-teal-600">Turno Extra</span> • Donde cada partida cuenta • 2025
            </p>
          </div>
        </div>

        {/* Mensaje final flotante */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            "La mejor jugada siempre es la que hacemos juntos" 🎲
          </p>
        </div>
      </div>
    </div>
  );
};

export default Despedida;