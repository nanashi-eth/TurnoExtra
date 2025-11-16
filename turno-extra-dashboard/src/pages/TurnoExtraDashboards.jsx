import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  Area,
  AreaChart,
} from "recharts";
import {
  TrendingUp,
  Users,
  Award,
  Target,
  DollarSign,
  Heart,
  Star,
  ArrowUp,
  CalendarSync,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const TurnoExtraDashboards = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  // Función para simular navegación (reemplaza con useNavigate en tu proyecto real)
  const handleNavigate = (route) => {
    navigate(route);
    // En tu proyecto real: navigate(route);
  };

  // Datos históricos (2022-2025)
  const historicalData = [
    {
      year: "2022",
      colaboradores: 8,
      patrocinadores: 2,
      editoriales: 4,
      presupuesto: 3000,
      recursos: 12,
      valoracion: 4.0,
    },
    {
      year: "2023",
      colaboradores: 10,
      patrocinadores: 4,
      editoriales: 5,
      presupuesto: 4500,
      recursos: 15,
      valoracion: 4.1,
    },
    {
      year: "2024",
      colaboradores: 12,
      patrocinadores: 5,
      editoriales: 6,
      presupuesto: 6000,
      recursos: 18,
      valoracion: 4.2,
    },
    {
      year: "2025",
      colaboradores: 18,
      patrocinadores: 8,
      editoriales: 9,
      presupuesto: 9500,
      recursos: 25,
      valoracion: 4.3,
    },
  ];

  // Proyección 2026
  const proyeccion = [
    ...historicalData,
    {
      year: "2026*",
      colaboradores: 25,
      patrocinadores: 12,
      editoriales: 12,
      presupuesto: 15000,
      recursos: 35,
      valoracion: 4.5,
    },
  ];

  // Datos de crecimiento porcentual
  const crecimientoData = [
    { categoria: "Colaboradores", crecimiento: 100 },
    { categoria: "Patrocinadores", crecimiento: 60 },
    { categoria: "Editoriales", crecimiento: -16.67 },
    { categoria: "Presupuesto", crecimiento: 108.7 },
    { categoria: "Recursos", crecimiento: 214.29 },
    { categoria: "Valoración", crecimiento: 10.84 },
  ];

  // Participantes por edad
  const edadData = [
    { tramo: "<18", participantes: 9, porcentaje: 12.86 },
    { tramo: "18-25", participantes: 14, porcentaje: 20 },
    { tramo: "26-35", participantes: 11, porcentaje: 15.71 },
    { tramo: "36-50", participantes: 21, porcentaje: 30 },
    { tramo: ">50", participantes: 15, porcentaje: 21.43 },
  ];

  // Género
  const generoData = [
    { name: "Mujeres", value: 27.14, cantidad: 19 },
    { name: "Hombres", value: 20, cantidad: 14 },
    { name: "Otro", value: 27.14, cantidad: 19 },
    { name: "Prefiero no decir", value: 25.71, cantidad: 18 },
  ];

  // Satisfacción
  const satisfaccionData = [
    { aspecto: "Valoración General", puntuacion: 4.1, meta: 4.5 },
    { aspecto: "Organización", puntuacion: 4.0, meta: 4.5 },
    { aspecto: "Variedad Juegos", puntuacion: 4.0, meta: 4.5 },
    { aspecto: "Inclusividad", puntuacion: 4.0, meta: 4.8 },
  ];

  // Radar de valoraciones stakeholders
  const stakeholdersData = [
    {
      stakeholder: "Organizadores",
      2022: 4.0,
      2023: 4.2,
      2024: 4.3,
      2025: 4.6,
    },
    {
      stakeholder: "Patrocinadores",
      2022: 3.8,
      2023: 4.0,
      2024: 4.3,
      2025: 4.5,
    },
    {
      stakeholder: "Colaboradores",
      2022: 3.9,
      2023: 4.1,
      2024: 4.2,
      2025: 4.6,
    },
  ];

  // Retención y recomendación
  const retencionData = [
    { pregunta: "¿Volverías?", si: 31.43, talvez: 32.86, no: 35.71 },
    { pregunta: "¿Recomendarías?", si: 68, talvez: 22, no: 10 },
  ];

  // Impacto social
  const impactoData = [
    { metrica: "Alcance RRSS", valor: 14200, tipo: "personas" },
    { metrica: "Inscripciones Online", valor: 112, tipo: "personas" },
    { metrica: "Medios Locales", valor: 3, tipo: "medios" },
    { metrica: "Voluntarios", valor: 18, tipo: "personas" },
  ];

  const COLORS = [
    "#437d82",
    "#5fa8af",
    "#7bc5cd",
    "#10b981",
    "#3b82f6",
    "#ef4444",
  ];
  const COLORS_1 = [
    "#8b5cf6",
    "#ec4899",
    "#f59e0b",
    "#10b981",
    "#3b82f6",
    "#ef4444",
  ];

  const tabs = [
    { id: 0, name: "Evolución y Crecimiento", icon: TrendingUp },
    { id: 1, name: "Perfil del Participante", icon: Users },
    { id: 2, name: "Impacto Social", icon: Heart },
    { id: 3, name: "Proyección 2026", icon: Target },
  ];

  const KPICard = ({
    title,
    value,
    subtitle,
    icon: Icon,
    trend,
    color = "purple",
  }) => {
    const colorClasses = {
      purple: "bg-teal-50 border-teal-200 text-teal-700",
      pink: "bg-cyan-50 border-cyan-200 text-cyan-700",
      blue: "bg-blue-50 border-blue-200 text-blue-700",
      green: "bg-green-50 border-green-200 text-green-700",
      orange: "bg-amber-50 border-amber-200 text-amber-700",
    };

    return (
      <div className={`border-2 rounded-lg p-4 ${colorClasses[color]}`}>
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium opacity-70">{title}</p>
            <p className="text-3xl font-bold mt-1">{value}</p>
            {subtitle && <p className="text-xs mt-1 opacity-60">{subtitle}</p>}
          </div>
          {Icon && <Icon className="w-8 h-8 opacity-50" />}
        </div>
        {trend && (
          <div className="flex items-center mt-2 text-sm font-semibold">
            <ArrowUp className="w-4 h-4 mr-1" />
            {trend}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {/* Header con botón de despedida */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Turno Extra</h1>
              <p className="text-gray-600 mt-2">
                Panel de Análisis Estratégico
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-500">Evento 2025</div>
                <div className="text-2xl font-bold text-teal-600">
                  70 participantes
                </div>
              </div>
              {/* 🎯 ESTE ES EL BOTÓN */}
              <button
                onClick={() => handleNavigate("/despedida")}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <Sparkles className="w-5 h-5" />
                <span className="hidden sm:inline">Finalizar Presentación</span>
                <span className="sm:hidden">Finalizar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-teal-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Dashboard 1: Evolución y Crecimiento */}
        {activeTab === 0 && (
          <div className="space-y-6">
            {/* KPIs principales */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <KPICard
                title="Colaboradores Totales"
                value="18"
                subtitle="2025"
                icon={Users}
                trend="+125% vs 2022"
                color="purple"
              />
              <KPICard
                title="Patrocinadores"
                value="8"
                subtitle="Inversión €9,500"
                icon={DollarSign}
                trend="+300% vs 2022"
                color="green"
              />
              <KPICard
                title="Editoriales"
                value="9"
                subtitle="40 títulos disponibles"
                icon={Award}
                trend="+125% vs 2022"
                color="pink"
              />
              <KPICard
                title="Valoración Media"
                value="4.3/5"
                subtitle="Stakeholders"
                icon={Star}
                trend="+7.5% vs 2022"
                color="orange"
              />
            </div>

            {/* Gráficos principales */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Evolución presupuesto */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  📈 Evolución del Presupuesto
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip
                      formatter={(value) => `€${value.toLocaleString()}`}
                    />
                    <Area
                      type="monotone"
                      dataKey="presupuesto"
                      stroke="#437d82"
                      fill="#a8d5d9"
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Crecimiento de +217% en 3 años
                </p>
              </div>

              {/* Crecimiento de recursos */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  🎯 Crecimiento por Categoría (%)
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={crecimientoData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="categoria" type="category" width={110} />
                    <Tooltip />
                    <Bar dataKey="crecimiento" radius={[0, 8, 8, 0]}>
                      {crecimientoData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.crecimiento > 0 ? "#10b981" : "#ef4444"}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Colaboradores, patrocinadores, editoriales */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  🤝 Ecosistema de Alianzas
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="colaboradores"
                      stroke="#437d82"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="patrocinadores"
                      stroke="#5fa8af"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="editoriales"
                      stroke="#7bc5cd"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Valoración de stakeholders */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  ⭐ Satisfacción de Stakeholders
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis domain={[3.5, 5]} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="valoracion"
                      stroke="#10b981"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Meta 2026: 4.5/5
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Dashboard 2: Perfil del Participante */}
        {activeTab === 1 && (
          <div className="space-y-6">
            {/* KPIs de participación */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <KPICard
                title="Participantes Totales"
                value="70"
                subtitle="Evento 2025"
                icon={Users}
                color="purple"
              />
              <KPICard
                title="Satisfacción General"
                value="4.1/5"
                subtitle="Valoración evento"
                icon={Star}
                color="orange"
              />
              <KPICard
                title="Inscripciones Online"
                value="112"
                subtitle="Previas al evento"
                icon={TrendingUp}
                trend="60% más vs 2024"
                color="green"
              />
              <KPICard
                title="Intención de Retorno"
                value="64%"
                subtitle="Sí + Tal vez"
                icon={CalendarSync}
                color="pink"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Distribución por edad */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  👥 Distribución por Edad
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={edadData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="tramo" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="participantes"
                      fill="#437d82"
                      radius={[8, 8, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
                <p className="text-sm text-gray-600 mt-2">
                  Público mayoritario: 36-50 años (30%)
                </p>
              </div>

              {/* Distribución por género */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  ⚧ Distribución por Género
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={generoData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {generoData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  Equilibrio de género destacable
                </p>
              </div>

              {/* Satisfacción por aspecto */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  📊 Valoraciones vs Meta
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={satisfaccionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="aspecto"
                      angle={-20}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis domain={[0, 5]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="puntuacion" fill="#437d82" name="Actual" />
                    <Bar dataKey="meta" fill="#a8d5d9" name="Meta 2026" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Retención y recomendación */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  🔄 Intención de Retorno
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">¿Volverías?</span>
                      <span className="text-sm text-gray-500">
                        64% positivo
                      </span>
                    </div>
                    <div className="flex h-8 rounded-lg overflow-hidden">
                      <div
                        className="bg-green-500 flex items-center justify-center text-white text-xs font-bold"
                        style={{ width: "31.43%" }}
                      >
                        Sí 31%
                      </div>
                      <div
                        className="bg-yellow-400 flex items-center justify-center text-gray-800 text-xs font-bold"
                        style={{ width: "32.86%" }}
                      >
                        Tal vez 33%
                      </div>
                      <div
                        className="bg-red-400 flex items-center justify-center text-white text-xs font-bold"
                        style={{ width: "35.71%" }}
                      >
                        No 36%
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      ⚠️ Insights Clave:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Solo 31% confirma retorno seguro</li>
                      <li>• 36% no volvería (investigar causas)</li>
                      <li>• Oportunidad: convertir "tal vez" en "sí"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dashboard 3: Impacto Social */}
        {activeTab === 2 && (
          <div className="space-y-6">
            {/* KPIs de impacto */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <KPICard
                title="Alcance RRSS"
                value="14.2K"
                subtitle="Personas alcanzadas"
                icon={TrendingUp}
                color="blue"
              />
              <KPICard
                title="Voluntarios"
                value="18"
                subtitle="Equipo estable"
                icon={Users}
                color="purple"
              />
              <KPICard
                title="Medios Locales"
                value="3"
                subtitle="Cobertura mediática"
                icon={Award}
                color="pink"
              />
              <KPICard
                title="Horas de Actividad"
                value="38h"
                subtitle="Eventos paralelos: 7"
                icon={Target}
                color="green"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Métricas de alcance */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  📢 Métricas de Alcance
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={impactoData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="metrica"
                      angle={-20}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="valor" fill="#3b82f6" radius={[8, 8, 0, 0]}>
                      {impactoData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Testimonios de impacto */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  💬 Testimonios Destacados
                </h3>
                <div className="space-y-4">
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-500">
                    <p className="text-sm italic text-gray-700">
                      "Gracias al evento he conocido gente nueva y me siento más
                      integrado"
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      - Participante 2025
                    </p>
                  </div>
                  <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500">
                    <p className="text-sm italic text-gray-700">
                      "Gran ambiente, he encontrado un grupo para compartir más
                      allá de las jornadas"
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      - Participante 2025
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm font-semibold text-gray-800">
                      Impacto Social Medible:
                    </p>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li>✓ Reducción del aislamiento social</li>
                      <li>✓ Creación de comunidad estable</li>
                      <li>✓ Inclusión y respeto como valores</li>
                      <li>✓ Voluntarios fidelizados año tras año</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Valor para patrocinadores */}
              <div className="bg-white rounded-xl shadow-lg p-6 lg:col-span-2">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  💼 ROI para Patrocinadores
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-teal-100 to-teal-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-teal-800">
                      Valoración Patrocinadores
                    </p>
                    <p className="text-3xl font-bold text-teal-600 mt-2">
                      4.5/5
                    </p>
                    <p className="text-xs text-teal-700 mt-1">
                      Satisfacción con retorno
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-100 to-green-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-green-800">
                      Exposición Total
                    </p>
                    <p className="text-3xl font-bold text-green-600 mt-2">
                      14.2K
                    </p>
                    <p className="text-xs text-green-700 mt-1">
                      Impresiones en RRSS
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-100 to-cyan-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-cyan-800">
                      Cobertura Mediática
                    </p>
                    <p className="text-3xl font-bold text-cyan-600 mt-2">3</p>
                    <p className="text-xs text-cyan-700 mt-1">Medios locales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dashboard 4: Proyección 2026 */}
        {activeTab === 3 && (
          <div className="space-y-6">
            {/* KPIs de proyección */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <KPICard
                title="Meta Participantes"
                value="100"
                subtitle="+43% vs 2025"
                icon={Target}
                color="purple"
              />
              <KPICard
                title="Meta Satisfacción"
                value="4.5/5"
                subtitle="+0.4 puntos"
                icon={Star}
                color="orange"
              />
              <KPICard
                title="Diversidad Funcional"
                value="+20%"
                subtitle="Aumento objetivo"
                icon={Heart}
                color="pink"
              />
              <KPICard
                title="Presupuesto Proyectado"
                value="€15K"
                subtitle="+58% inversión"
                icon={DollarSign}
                color="green"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Proyección de crecimiento */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  📈 Proyección de Crecimiento 2026
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={proyeccion}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="colaboradores"
                      stackId="1"
                      stroke="#437d82"
                      fill="#a8d5d9"
                    />
                    <Area
                      type="monotone"
                      dataKey="patrocinadores"
                      stackId="1"
                      stroke="#5fa8af"
                      fill="#c1e5e9"
                    />
                    <Area
                      type="monotone"
                      dataKey="editoriales"
                      stackId="1"
                      stroke="#7bc5cd"
                      fill="#d9f0f2"
                    />
                  </AreaChart>
                </ResponsiveContainer>
                <p className="text-sm text-gray-600 mt-2 text-center">
                  * Proyección basada en tendencia histórica
                </p>
              </div>

              {/* Oportunidades de inversión */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  💡 Oportunidades de Inversión
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-teal-50 rounded-lg">
                    <div className="text-2xl">🏢</div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Ampliación de Espacios
                      </p>
                      <p className="text-sm text-gray-600">
                        Mejorar comodidad y capacidad para 100 participantes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-cyan-50 rounded-lg">
                    <div className="text-2xl">📱</div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Marketing Digital
                      </p>
                      <p className="text-sm text-gray-600">
                        Aumentar alcance en RRSS y conversión online
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl">♿</div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Inclusión y Accesibilidad
                      </p>
                      <p className="text-sm text-gray-600">
                        Juegos adaptados y recursos para diversidad funcional
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl">👥</div>
                    <div>
                      <p className="font-semibold text-gray-800">
                        Profesionalización del Equipo
                      </p>
                      <p className="text-sm text-gray-600">
                        Evitar saturación y mejorar operativa
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Áreas de mejora convertidas en KPIs */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  🎯 Plan de Acción 2026
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="font-semibold text-gray-800">
                      Difusión y Alcance
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-600">
                        Actual: 14.2K impresiones
                      </span>
                      <span className="text-sm font-bold text-teal-600">
                        Meta: 25K
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-teal-500 h-2 rounded-full"
                        style={{ width: "56.8%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="border-l-4 border-cyan-500 pl-4">
                    <p className="font-semibold text-gray-800">
                      Variedad de Juegos
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-600">
                        Actual: 40 títulos
                      </span>
                      <span className="text-sm font-bold text-cyan-600">
                        Meta: 60
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-cyan-500 h-2 rounded-full"
                        style={{ width: "66.67%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-semibold text-gray-800">
                      Gestión de Espacios
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-600">
                        Actual: 55 mesas
                      </span>
                      <span className="text-sm font-bold text-blue-600">
                        Meta: 80
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: "68.75%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-semibold text-gray-800">
                      Equipo y Voluntarios
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-gray-600">
                        Actual: 18 voluntarios
                      </span>
                      <span className="text-sm font-bold text-green-600">
                        Meta: 25
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "72%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI esperado para inversores */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  💰 ROI Esperado para Inversores
                </h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-teal-100 to-cyan-100 p-4 rounded-lg">
                    <p className="text-sm font-medium text-gray-700">
                      Inversión Necesaria
                    </p>
                    <p className="text-3xl font-bold text-teal-600">€15,000</p>
                    <p className="text-xs text-gray-600 mt-1">
                      +58% vs 2025 (€9,500)
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white border-2 border-teal-200 p-3 rounded-lg">
                      <p className="text-xs text-gray-600">Alcance</p>
                      <p className="text-xl font-bold text-teal-600">+76%</p>
                      <p className="text-xs text-gray-500">25K impresiones</p>
                    </div>
                    <div className="bg-white border-2 border-cyan-200 p-3 rounded-lg">
                      <p className="text-xs text-gray-600">Participantes</p>
                      <p className="text-xl font-bold text-cyan-600">+43%</p>
                      <p className="text-xs text-gray-500">100 personas</p>
                    </div>
                    <div className="bg-white border-2 border-blue-200 p-3 rounded-lg">
                      <p className="text-xs text-gray-600">Satisfacción</p>
                      <p className="text-xl font-bold text-blue-600">4.5/5</p>
                      <p className="text-xs text-gray-500">+10% mejora</p>
                    </div>
                    <div className="bg-white border-2 border-green-200 p-3 rounded-lg">
                      <p className="text-xs text-gray-600">Valor Social</p>
                      <p className="text-xl font-bold text-green-600">Alto</p>
                      <p className="text-xs text-gray-500">Impacto medible</p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border-2 border-yellow-300 p-3 rounded-lg">
                    <p className="text-sm font-semibold text-yellow-800">
                      💡 Propuesta de Valor
                    </p>
                    <p className="text-xs text-gray-700 mt-2">
                      Inversión con triple impacto: crecimiento comercial,
                      satisfacción de stakeholders y retorno social medible.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Resumen ejecutivo */}
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                🚀 Resumen Ejecutivo: Por qué invertir en Turno Extra
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">
                    📈 Trayectoria Probada
                  </h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• +217% crecimiento presupuesto</li>
                    <li>• +214% aumento recursos</li>
                    <li>• 4.3/5 satisfacción stakeholders</li>
                    <li>• Equipo estable de 18 voluntarios</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">
                    🎯 Potencial de Escalado
                  </h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• De 70 a 100 participantes</li>
                    <li>• Modelo replicable en otras ciudades</li>
                    <li>• Base de 112 interesados online</li>
                    <li>• Alcance de 14.2K en RRSS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">💚 Impacto Social</h4>
                  <ul className="text-sm space-y-1 opacity-90">
                    <li>• Reducción aislamiento social</li>
                    <li>• Inclusión y diversidad funcional</li>
                    <li>• Construcción de comunidad</li>
                    <li>• Testimonios positivos recurrentes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TurnoExtraDashboards;
