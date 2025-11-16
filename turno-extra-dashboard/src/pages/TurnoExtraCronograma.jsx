import React, { useState } from 'react';
import { Calendar, Users, Target, CheckCircle, Clock, ArrowRight, ChevronDown, ChevronUp, BarChart3, Sprout } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CronogramaTurnoExtra = () => {
  const [expandedPhase, setExpandedPhase] = useState(null);
  const navigate = useNavigate();

  const fases = [
    {
      id: 1,
      nombre: "Fase 1: Consolidación",
      objetivo: "Mejoramos la experiencia del evento, el catálogo de juegos y la logística",
      duracion: "3 meses",
      periodo: "Enero - Marzo",
      color: "teal",
      icon: Target,
      actividades: [
        {
          actividad: "Análisis de satisfacción del evento anterior",
          duracion: "2 semanas",
          responsable: "Dirección + Equipo de Evaluación",
          entregables: ["Informe de satisfacción", "Listado de áreas de mejora"],
          semanas: "1-2"
        },
        {
          actividad: "Ampliación del catálogo de juegos",
          duracion: "4 semanas",
          responsable: "Logística",
          entregables: ["Catálogo ampliado a 60+ títulos", "Acuerdos con editoriales"],
          semanas: "3-6"
        },
        {
          actividad: "Mejora de espacios y logística",
          duracion: "3 semanas",
          responsable: "Logística",
          entregables: ["Plan de distribución de espacios", "Protocolo de montaje optimizado"],
          semanas: "7-9"
        },
        {
          actividad: "Capacitación del equipo de voluntarios",
          duracion: "2 semanas",
          responsable: "Comunicación",
          entregables: ["Manual de voluntarios actualizado", "Sesión de formación"],
          semanas: "10-11"
        },
        {
          actividad: "Revisión y actualización del presupuesto",
          duracion: "1 semana",
          responsable: "Dirección",
          entregables: ["Presupuesto consolidado", "Plan de contingencias"],
          semanas: "12"
        }
      ]
    },
    {
      id: 2,
      nombre: "Fase 2: Expansión",
      objetivo: "Incorporamos más actividades inclusivas, nuevos juegos y torneos cooperativos",
      duracion: "2 meses",
      periodo: "Abril - Mayo",
      color: "cyan",
      icon: Sprout,
      actividades: [
        {
          actividad: "Diseño de actividades inclusivas y accesibles",
          duracion: "3 semanas",
          responsable: "Logística",
          entregables: ["Programa de actividades adaptadas", "Materiales accesibles"],
          semanas: "13-15"
        },
        {
          actividad: "Desarrollo de torneos cooperativos",
          duracion: "2 semanas",
          responsable: "Logística",
          entregables: ["Reglamento de torneos", "Calendario de competiciones"],
          semanas: "16-17"
        },
        {
          actividad: "Ampliación de alianzas con patrocinadores",
          duracion: "4 semanas",
          responsable: "Logística",
          entregables: ["12+ patrocinadores confirmados", "Paquetes de patrocinio"],
          semanas: "14-17"
        },
        {
          actividad: "Campaña de marketing y difusión digital",
          duracion: "3 semanas",
          responsable: "Comunicación",
          entregables: ["Estrategia de RRSS", "Contenido para campaña"],
          semanas: "18-20"
        },
      ]
    },
    {
      id: 3,
      nombre: "Fase 3: Comunidad",
      objetivo: "Mantenemos la relación con patrocinadores, colaboradores y participantes durante todo el año",
      duracion: "7 meses",
      periodo: "Junio - Diciembre",
      color: "blue",
      icon: Users,
      actividades: [
        {
          actividad: "Creación de plataforma de difusión online",
          duracion: "4 semanas",
          responsable: "Comunicación",
          entregables: ["Web/blog activo", "Base de datos de suscriptores"],
          semanas: "21-24"
        },
        {
          actividad: "Programa mensual de contenido y testimonios",
          duracion: "Continuo (6 meses)",
          responsable: "Comunicación",
          entregables: ["12 publicaciones mensuales", "4 testimonios en video"],
          semanas: "25-48"
        },
        {
          actividad: "Seguimiento y fidelización de patrocinadores",
          duracion: "Continuo (6 meses)",
          responsable: "Logística",
          entregables: ["Informes trimestrales a patrocinadores", "Plan de renovación"],
          semanas: "25-48"
        },
        {
          actividad: "Networking con nuevas editoriales y colaboradores",
          duracion: "4 semanas",
          responsable: "Logística",
          entregables: ["20+ contactos nuevos", "Acuerdos preliminares"],
          semanas: "40-43"
        },
        {
          actividad: "Preparación de la siguiente edición",
          duracion: "4 semanas",
          responsable: "Dirección + Logística + Comunicación",
          entregables: ["Plan operativo nueva edición", "Cronograma actualizado"],
          semanas: "45-48"
        }
      ]
    },
    {
      id: 4,
      nombre: "Fase 4: Evaluación",
      objetivo: "Revisamos los datos, hacemos informes y proponemos mejoras continuas",
      duracion: "Continuo",
      periodo: "Todo el año",
      color: "green",
      icon: CheckCircle,
      actividades: [
        {
          actividad: "Recolección de datos post-evento",
          duracion: "2 semanas",
          responsable: "Dirección",
          entregables: ["Base de datos completa", "Encuestas procesadas"],
          semanas: "Post-evento (1-2)"
        },
        {
          actividad: "Análisis estadístico y generación de dashboards",
          duracion: "2 semanas",
          responsable: "Dirección",
          entregables: ["Dashboards interactivos", "Informe de KPIs"],
          semanas: "Post-evento (3-4)"
        },
        {
          actividad: "Informe ejecutivo para inversores y stakeholders",
          duracion: "1 semana",
          responsable: "Dirección",
          entregables: ["Presentación ejecutiva", "Informe de impacto social"],
          semanas: "Post-evento (5)"
        },
        {
          actividad: "Sesión de retrospectiva con el equipo",
          duracion: "1 semana",
          responsable: "Logística",
          entregables: ["Acta de retrospectiva", "Plan de mejoras"],
          semanas: "Post-evento (6)"
        },
        {
          actividad: "Implementación de mejoras en procesos",
          duracion: "Continuo",
          responsable: "Logística",
          entregables: ["Protocolos actualizados", "Documentación mejorada"],
          semanas: "Continuo"
        }
      ]
    }
  ];

  const colorVariants = {
    teal: {
      bg: "bg-teal-50",
      border: "border-teal-500",
      text: "text-teal-700",
      hover: "hover:bg-teal-100",
      button: "bg-teal-600 hover:bg-teal-700"
    },
    cyan: {
      bg: "bg-cyan-50",
      border: "border-cyan-500",
      text: "text-cyan-700",
      hover: "hover:bg-cyan-100",
      button: "bg-cyan-600 hover:bg-cyan-700"
    },
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-500",
      text: "text-blue-700",
      hover: "hover:bg-blue-100",
      button: "bg-blue-600 hover:bg-blue-700"
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-500",
      text: "text-green-700",
      hover: "hover:bg-green-100",
      button: "bg-green-600 hover:bg-green-700"
    }
  };

  const togglePhase = (phaseId) => {
    setExpandedPhase(expandedPhase === phaseId ? null : phaseId);
  };

  const handleNavigateToDashboard = () => {
    navigate('/dashboards');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">Plan de Acción - Turno Extra</h1>
              <p className="text-gray-600">Cronograma detallado con actividades, responsables y entregables</p>
            </div>
            <button
              onClick={handleNavigateToDashboard}
              className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
            >
              <BarChart3 className="w-5 h-5" />
              <span>Ver Dashboards</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Timeline visual */}
          <div className="mt-8 grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <p className="font-semibold text-sm text-gray-700">Consolidación</p>
              <p className="text-xs text-gray-500">3 meses</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                <Sprout className="w-8 h-8 text-cyan-600" />
              </div>
              <p className="font-semibold text-sm text-gray-700">Expansión</p>
              <p className="text-xs text-gray-500">2 meses</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <p className="font-semibold text-sm text-gray-700">Comunidad</p>
              <p className="text-xs text-gray-500">7 meses</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <p className="font-semibold text-sm text-gray-700">Evaluación</p>
              <p className="text-xs text-gray-500">Continuo</p>
            </div>
          </div>
        </div>

        {/* Fases detalladas */}
        <div className="space-y-4">
          {fases.map((fase) => {
            const colors = colorVariants[fase.color];
            const Icon = fase.icon;
            const isExpanded = expandedPhase === fase.id;

            return (
              <div key={fase.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Header de fase */}
                <button
                  onClick={() => togglePhase(fase.id)}
                  className={`w-full p-6 flex items-center justify-between ${colors.hover} transition-all`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`${colors.bg} p-3 rounded-lg`}>
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div className="text-left">
                      <h2 className="text-xl font-bold text-gray-800">{fase.nombre}</h2>
                      <p className="text-sm text-gray-600">{fase.objetivo}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-700">{fase.periodo}</p>
                      <p className="text-xs text-gray-500">{fase.duracion}</p>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Contenido expandible */}
                {isExpanded && (
                  <div className="p-6 bg-gray-50 border-t-2 border-gray-100">
                    <div className="space-y-4">
                      {fase.actividades.map((actividad, index) => (
                        <div
                          key={index}
                          className={`bg-white rounded-lg p-4 border-l-4 ${colors.border} shadow-sm hover:shadow-md transition-all`}
                        >
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Actividad */}
                            <div className="md:col-span-2">
                              <div className="flex items-start space-x-2">
                                <span className={`${colors.bg} ${colors.text} px-2 py-1 rounded text-xs font-bold`}>
                                  {index + 1}
                                </span>
                                <div>
                                  <h3 className="font-bold text-gray-800">{actividad.actividad}</h3>
                                  <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                                    <Clock className="w-3 h-3" />
                                    <span>{actividad.duracion}</span>
                                    <span>•</span>
                                    <span>Semanas {actividad.semanas}</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Responsable */}
                            <div>
                              <p className="text-xs text-gray-500 font-semibold mb-1">Responsable:</p>
                              <p className="text-sm text-gray-700">{actividad.responsable}</p>
                            </div>

                            {/* Entregables */}
                            <div>
                              <p className="text-xs text-gray-500 font-semibold mb-1">Entregables:</p>
                              <ul className="text-sm text-gray-700 space-y-1">
                                {actividad.entregables.map((entregable, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <CheckCircle className={`w-4 h-4 ${colors.text} mr-1 mt-0.5 flex-shrink-0`} />
                                    <span>{entregable}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Resumen de fase */}
                    <div className={`mt-6 ${colors.bg} p-4 rounded-lg`}>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-gray-800">{fase.actividades.length}</p>
                          <p className="text-xs text-gray-600">Actividades</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-800">
                            {fase.actividades.reduce((acc, act) => acc + act.entregables.length, 0)}
                          </p>
                          <p className="text-xs text-gray-600">Entregables</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-gray-800">{fase.duracion}</p>
                          <p className="text-xs text-gray-600">Duración</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer con CTA */}
        <div className="mt-8 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl shadow-lg p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">¿Listo para analizar los resultados?</h3>
              <p className="opacity-90">Explora nuestros dashboards interactivos con métricas y KPIs del proyecto</p>
            </div>
            <button
              onClick={handleNavigateToDashboard}
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all flex items-center space-x-2 shadow-lg"
            >
              <BarChart3 className="w-6 h-6" />
              <span>Ver Dashboards Completos</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CronogramaTurnoExtra;