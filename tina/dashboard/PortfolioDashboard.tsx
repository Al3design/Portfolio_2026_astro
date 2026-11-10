import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useCMS } from "tinacms";
import { motion, AnimatePresence } from "motion/react";
import { 
  LayoutDashboard, 
  RefreshCw, 
  Layers, 
  Globe, 
  FileText, 
  FileCode, 
  CheckCircle2, 
  AlertCircle, 
  Search, 
  ExternalLink, 
  Image as ImageIcon,
  Activity
} from "lucide-react";
import { DASHBOARD_QUERY, type DashboardData } from "./dashboardQuery";
import { PROJECT_CATEGORIES } from '../../src/lib/categories';
import { compareProjectOrder } from '../../src/lib/project-order';
import { parseVisualOrder, visualOrderRanks } from '../../src/lib/project-visual-order';

// ─── Estilos Premium (Tokens) ──────────────────────────────────────────────────
const tokens = {
  colors: {
    bg: "var(--al3-admin-bg, #f8fafc)",
    card: "var(--al3-admin-panel, #ffffff)",
    primary: "var(--al3-admin-primary, #ec4815)",
    primaryHover: "var(--al3-admin-hover, #d43d0e)",
    text: "var(--al3-admin-text, #0f172a)",
    textMuted: "var(--al3-admin-muted, #64748b)",
    border: "var(--al3-admin-edge, #e2e8f0)",
    success: "var(--al3-admin-success, #22c55e)",
    successBg: "var(--al3-admin-success-bg, #f0fdf4)",
    warning: "var(--al3-admin-warning, #f59e0b)",
    warningBg: "var(--al3-admin-warning-bg, #fffbeb)",
    danger: "var(--al3-admin-danger, #ef4444)",
    dangerBg: "var(--al3-admin-danger-bg, #fef2f2)",
    accent: "var(--al3-admin-accent, #6366f1)",
    accentBg: "var(--al3-admin-selected, #eef2ff)",
  },
  shadows: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  },
  radius: {
    sm: "4px",
    md: "6px",
    lg: "8px",
    full: "9999px",
  }
};

const s = {
  root: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    backgroundColor: tokens.colors.bg,
    minHeight: "100vh",
    padding: "40px",
    color: tokens.colors.text,
    display: "flex",
    flexShrink: 0,
    flexDirection: "column",
    gap: "32px",
  } as React.CSSProperties,

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  } as React.CSSProperties,

  headerTitle: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  } as React.CSSProperties,

  title: {
    fontSize: "28px",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    margin: 0,
    background: `linear-gradient(135deg, ${tokens.colors.text} 0%, ${tokens.colors.textMuted} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  } as React.CSSProperties,

  subtitle: {
    fontSize: "14px",
    color: tokens.colors.textMuted,
    fontWeight: 500,
  } as React.CSSProperties,

  actions: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  } as React.CSSProperties,

  btn: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 18px",
    borderRadius: tokens.radius.md,
    border: `1px solid ${tokens.colors.border}`,
    backgroundColor: tokens.colors.card,
    color: tokens.colors.text,
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: tokens.shadows.sm,
    textDecoration: "none",
  } as React.CSSProperties,

  // ── Grid Layouts ──
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px",
  } as React.CSSProperties,

  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 380px",
    gap: "24px",
  } as React.CSSProperties,

  // ── Components ──
  card: {
    backgroundColor: tokens.colors.card,
    borderRadius: tokens.radius.lg,
    border: `1px solid ${tokens.colors.border}`,
    padding: "24px",
    boxShadow: tokens.shadows.md,
    position: "relative",
    overflow: "hidden",
  } as React.CSSProperties,

  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  } as React.CSSProperties,

  cardTitle: {
    fontSize: "16px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: tokens.colors.text,
  } as React.CSSProperties,

  // ── Table ──
  tableWrapper: {
    width: "100%",
    overflowX: "auto",
    borderRadius: tokens.radius.md,
  } as React.CSSProperties,

  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
  } as React.CSSProperties,

  th: {
    padding: "12px 16px",
    textAlign: "left",
    fontSize: "12px",
    fontWeight: 700,
    color: tokens.colors.textMuted,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    borderBottom: `2px solid ${tokens.colors.bg}`,
  } as React.CSSProperties,

  td: {
    padding: "16px",
    fontSize: "14px",
    borderBottom: `1px solid ${tokens.colors.bg}`,
    verticalAlign: "middle",
  } as React.CSSProperties,

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    padding: "4px 10px",
    borderRadius: tokens.radius.full,
    fontSize: "11px",
    fontWeight: 700,
    whiteSpace: "nowrap",
  } as React.CSSProperties,

  searchWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: "400px",
    marginBottom: "16px",
  } as React.CSSProperties,

  searchInput: {
    width: "100%",
    padding: "12px 16px 12px 42px",
    borderRadius: tokens.radius.md,
    border: `1px solid ${tokens.colors.border}`,
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  } as React.CSSProperties,

  searchIcon: {
    position: "absolute",
    left: "14px",
    top: "50%",
    transform: "translateY(-50%)",
    color: tokens.colors.textMuted,
  } as React.CSSProperties,

  thumb: {
    width: "48px",
    height: "32px",
    borderRadius: "4px",
    objectFit: "cover",
    backgroundColor: tokens.colors.bg,
    border: `1px solid ${tokens.colors.border}`,
  } as React.CSSProperties,
};

// ─── Helpers ───────────────────────────────────────────────────────────────────

function buildEditUrl(relativePath: string): string {
  const documentPath = relativePath.replace(/\.mdx$/, '').split('/').map(encodeURIComponent).join('/');
  return `#/collections/edit/projects/~/${documentPath}`;
}

function resolveImagePath(path?: string): string | undefined {
  if (!path) return undefined;
  
  // Limpiar comillas si vienen en el string (a veces pasa con MDX)
  let normalized = path.replace(/['"]+/g, '');

  // Si contiene http en cualquier parte (caso de corrupción '/assetshttps://...')
  if (normalized.includes('http')) {
    const httpIndex = normalized.indexOf('http');
    return normalized.substring(httpIndex);
  }

  // Si ya es un data URI, no tocar
  if (normalized.startsWith('data:')) return normalized;
  
  // Soporte para rutas antiguas que aún tengan src/assets
  if (normalized.startsWith("/src/assets/")) normalized = normalized.replace("/src/assets/", "/assets/");
  if (normalized.startsWith("src/assets/")) normalized = normalized.replace("src/assets/", "/assets/");
  
  // Asegurar que comience con / para rutas relativas a la raíz
  if (!normalized.startsWith("/")) normalized = `/${normalized}`;

  // Fix para desarrollo local: Tina y Astro corren en puertos separados.
  if (typeof window !== 'undefined') {
    const astroPortByTinaPort: Record<string, string> = {
      '4001': '4321',
      '4002': '4322',
    };
    const astroPort = astroPortByTinaPort[window.location.port];
    if (astroPort) return `http://localhost:${astroPort}${normalized}`;
  }
return normalized;
}


// ─── Sub-components ────────────────────────────────────────────────────────────

const MotionCard = motion.create("div");

interface StatCardProps {
  icon: React.ReactElement<{ size?: number }>;
  color: string;
  bgColor: string;
  value: number | string;
  label: string;
  delay?: number;
}
function StatCard({ icon, color, bgColor, value, label, delay = 0 }: StatCardProps) {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      style={s.card}
      whileHover={{ y: -5, boxShadow: tokens.shadows.lg }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div style={{ 
          width: "56px", height: "56px", borderRadius: tokens.radius.md, 
          backgroundColor: bgColor, color: color,
          display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "center"
        }}>
          {icon}
        </div>
        <div>
          <div style={{ fontSize: "32px", fontWeight: 800, lineHeight: 1 }}>{value}</div>
          <div style={{ fontSize: "13px", color: tokens.colors.textMuted, fontWeight: 600, marginTop: "4px" }}>
            {label}
          </div>
        </div>
      </div>
      <div style={{ 
        position: "absolute", right: "-10px", bottom: "-10px", opacity: 0.05, transform: "rotate(-15deg)"
      }}>
        {React.cloneElement(icon, { size: 80 })}
      </div>
    </MotionCard>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export function PortfolioDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [orderCategory, setOrderCategory] = useState('all');

  const cms = useCMS();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Usamos el cliente oficial de Tina para mayor seguridad y compatibilidad con Cloud
      const api = cms.api.tina;
      if (!api) throw new Error("El cliente de Tina todavía no está disponible");
      // request returns data directly and throws for HTTP/GraphQL errors.
      const response = await api.request<DashboardData>(DASHBOARD_QUERY, { variables: { after: null } });
      let page = response.projectsConnection;
      const cursors = new Set<string>();
      while (page.pageInfo.hasNextPage) {
        if (!page.pageInfo.endCursor || cursors.has(page.pageInfo.endCursor)) {
          throw new Error('Tina devolvió una página sin un cursor nuevo.');
        }
        cursors.add(page.pageInfo.endCursor);
        const next = await api.request<DashboardData>(DASHBOARD_QUERY, { variables: { after: page.pageInfo.endCursor } });
        page = next.projectsConnection;
        response.projectsConnection.edges.push(...page.edges);
      }
      
      const rawOrder = response.projectOrder._values;
      if (!rawOrder || typeof rawOrder !== 'object' || !('scopes' in rawOrder)) throw new Error('Tina no devolvió el documento de orden completo.');
      parseVisualOrder({ scopes: rawOrder.scopes ?? [] });
      setData(response);
      setLastRefresh(new Date());
    } catch (e: unknown) {
      console.error("Dashboard Fetch Error:", e);
      setError(e instanceof Error ? e.message : "Error desconocido al cargar datos");
    } finally {
      setLoading(false);
    }
  }, [cms]);

  useEffect(() => { fetchData(); }, [fetchData]);

  // ── Derived stats ──
  const projects = useMemo(() => {
    if (!data) return [];
    const raw = data.projectOrder._values;
    const selection = parseVisualOrder(raw && typeof raw === 'object' && 'scopes' in raw ? { scopes: raw.scopes ?? [] } : { scopes: [] });
    return data.projectsConnection.edges.map(({ node }) => ({ ...node, visualOrders: visualOrderRanks(node._sys.relativePath, selection) }));
  }, [data]);
  const stats = useMemo(() => {
    if (!data) return null;
    const filtered = projects;
    return {
      total: data.projectsConnection.totalCount,
      inPortfolio: filtered.filter(p => p.showInPortfolio).length,
      inResume: filtered.filter(p => p.showInResume).length,
      pages: data.pagesConnection.totalCount,
      noImage: filtered.filter(p => !p.image || p.image.trim() === ""),
      noDescription: filtered.filter(p => !p.description || p.description.trim() === ""),
      noStack: filtered.filter(p => !p.stack || p.stack.length === 0),
    };
  }, [data, projects]);

  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return projects.filter(p => (orderCategory === 'all' || p.categories?.includes(orderCategory)) && (
      p.title.toLowerCase().includes(q) ||
      p.client?.toLowerCase().includes(q) ||
      p.stack?.some(s => s.toLowerCase().includes(q))
    )).sort((a, b) => compareProjectOrder(a, b, orderCategory));
  }, [projects, searchQuery, orderCategory]);

  const stackStats = useMemo(() => {
    const map: Record<string, number> = {};
    for (const p of projects) {
      for (const tag of p.stack ?? []) {
        const key = tag.trim();
        map[key] = (map[key] ?? 0) + 1;
      }
    }
    return Object.entries(map)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
  }, [projects]);

  const maxStack = stackStats[0]?.count ?? 1;

  if (error) {
    return (
      <div style={s.root}>
        <div style={{ ...s.card, backgroundColor: tokens.colors.dangerBg, border: `1px solid ${tokens.colors.danger}` }}>
          <div style={{ display: "flex", gap: "12px", color: tokens.colors.danger }}>
            <AlertCircle size={20} />
            <div>
              <div style={{ fontWeight: 700, marginBottom: "4px" }}>Error de Conexión</div>
              <div style={{ fontSize: "14px" }}>{error}</div>
              <button onClick={fetchData} style={{ ...s.btn, marginTop: "16px", backgroundColor: tokens.colors.danger, color: "var(--al3-admin-primary-foreground, #fff)", border: "none" }}>
                Reintentar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="al3-admin-dashboard" style={s.root}>
      {/* ── Header ── */}
      <header style={s.header}>
        <div style={s.headerTitle}>
          <h1 style={s.title}>Portfolio Control Center</h1>
          <div style={s.subtitle}>
            Monitoriza y gestiona tu contenido en tiempo real
          </div>
        </div>
        <div style={s.actions}>
          <div style={{ textAlign: "right", marginRight: "8px" }}>
            <div style={{ fontSize: "11px", color: tokens.colors.textMuted, fontWeight: 700, textTransform: "uppercase" }}>
              Último Sincronizado
            </div>
            <div style={{ fontSize: "13px", fontWeight: 600 }}>
              {lastRefresh.toLocaleTimeString()}
            </div>
          </div>
          <button 
            style={{ ...s.btn, backgroundColor: tokens.colors.primary, color: "var(--al3-admin-primary-foreground, #fff)", border: "none" }}
            onClick={fetchData}
            disabled={loading}
          >
            <RefreshCw size={16} className={loading ? "spin" : ""} style={{ transition: "transform 0.5s" }} />
            {loading ? "Actualizando..." : "Refrescar"}
          </button>
        </div>
      </header>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .al3-admin-dashboard .spin { animation: spin 1s linear infinite; }
        .al3-admin-dashboard input::placeholder { color: var(--al3-admin-muted, #cbd5e1); }
        .al3-admin-dashboard .row-hover:hover { background-color: var(--al3-admin-hover, #f8fafc); }
      `}</style>

      {/* ── Stats row ── */}
      <div style={s.statsGrid}>
        <StatCard 
          icon={<Layers size={24} />} 
          color={tokens.colors.accent} 
          bgColor={tokens.colors.accentBg} 
          value={stats?.total ?? 0} 
          label="Total Proyectos" 
          delay={0.1}
        />
        <StatCard 
          icon={<Globe size={24} />} 
          color={tokens.colors.success} 
          bgColor={tokens.colors.successBg} 
          value={stats?.inPortfolio ?? 0} 
          label="Visibles Online" 
          delay={0.2}
        />
        <StatCard 
          icon={<FileText size={24} />} 
          color={tokens.colors.accent} 
          bgColor={tokens.colors.accentBg} 
          value={stats?.inResume ?? 0} 
          label="En CV / Resume" 
          delay={0.3}
        />
        <StatCard 
          icon={<FileCode size={24} />} 
          color={tokens.colors.accent} 
          bgColor={tokens.colors.accentBg} 
          value={stats?.pages ?? 0} 
          label="Páginas CMS" 
          delay={0.4}
        />
      </div>

      <div className="al3-admin-dashboard-grid" style={s.mainGrid}>
        {/* ── Column 1: Projects Table ── */}
        <section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={s.card}>
            <div style={s.cardHeader}>
              <div style={s.cardTitle}>
                <Activity size={18} color={tokens.colors.primary} />
                Inventario Maestro
              </div>
              <div style={{ fontSize: "12px", color: tokens.colors.textMuted, fontWeight: 600 }}>
                {filteredProjects.length} de {stats?.total} proyectos
              </div>
            </div>

            <div style={s.searchWrapper}>
              <Search size={18} style={s.searchIcon} />
              <input 
                type="text" 
                placeholder="Buscar por nombre, cliente o tecnología..." 
                className="al3-admin-control al3-admin-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div style={s.tableWrapper}>
              <label className="al3-admin-order-scope">
                Categoría
                <select value={orderCategory} onChange={event => setOrderCategory(event.target.value)}
                  className="al3-admin-control">
                  <option value="all">Portfolio completo</option>
                  {PROJECT_CATEGORIES.map(category => <option key={category.value} value={category.value}>{category.label}</option>)}
                </select>
              </label>
              <table className="al3-admin-inventory" style={s.table}>
                <thead>
                  <tr>
                    <th style={s.th}>Cover</th>
                    <th style={s.th}>Proyecto</th>
                    <th style={s.th}>Cliente</th>
                    <th style={s.th}>Año</th>
                    <th style={s.th}>Visibilidad</th>
                    <th style={s.th}>Posición</th>
                    <th style={s.th}></th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence mode="popLayout">
                    {filteredProjects.map((p, idx) => (
                      <motion.tr 
                        key={p._sys.filename}
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ delay: Math.min(idx * 0.03, 0.3) }}
                        className="row-hover"
                        style={{ transition: "background 0.2s" }}
                      >
                        <td style={s.td}>
                          {p.image ? (
                            <img src={resolveImagePath(p.image)} alt="" style={s.thumb} />
                          ) : (
                            <div style={{ ...s.thumb, display: "flex", alignItems: "center", justifyContent: "center" }}>
                              <ImageIcon size={14} color="#cbd5e1" />
                            </div>
                          )}
                        </td>
                        <td style={s.td}>
                          <div style={{ fontWeight: 700 }}>{p.title}</div>
                          <div style={{ fontSize: "11px", color: tokens.colors.textMuted }}>{p.type}</div>
                        </td>
                        <td style={s.td}>{p.client || "—"}</td>
                        <td style={s.td}>{p.year || "—"}</td>
                        <td style={s.td}>
                          <div style={{ display: "flex", gap: "4px" }}>
                            {p.showInPortfolio && (
                              <span style={{ ...s.badge, backgroundColor: tokens.colors.accentBg, color: tokens.colors.accent }}>
                                P
                              </span>
                            )}
                            {p.showInResume && (
                              <span style={{ ...s.badge, backgroundColor: tokens.colors.successBg, color: tokens.colors.success }}>
                                R
                              </span>
                            )}
                            {!p.showInPortfolio && !p.showInResume && (
                              <span style={{ ...s.badge, backgroundColor: tokens.colors.bg, color: tokens.colors.textMuted }}>
                                Hidden
                              </span>
                            )}
                          </div>
                        </td>
                        <td style={s.td}>
                          <span aria-label={`Posición ${idx + 1} en los resultados`}>{idx + 1}</span>
                        </td>
                        <td style={{ ...s.td, textAlign: "right" }}>
                          <a 
                            href={buildEditUrl(p._sys.relativePath)}
                            style={{ ...s.btn, padding: "6px 12px", fontSize: "12px" }}
                          >
                            <ExternalLink size={12} />
                            Editar
                          </a>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
              {filteredProjects.length === 0 && (
                <div style={{ padding: "40px", textAlign: "center", color: tokens.colors.textMuted }}>
                  No se encontraron proyectos con ese criterio.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Column 2: Health & Stack ── */}
        <aside style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Content Health */}
          <div style={s.card}>
            <div style={s.cardHeader}>
              <div style={s.cardTitle}>
                <CheckCircle2 size={18} color={tokens.colors.success} />
                Estado del Contenido
              </div>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <HealthItem 
                label="Imágenes de Cover" 
                count={stats?.noImage.length ?? 0} 
                icon={<ImageIcon size={14} />} 
              />
              <HealthItem 
                label="Descripciones" 
                count={stats?.noDescription.length ?? 0} 
                icon={<FileText size={14} />} 
              />
              <HealthItem 
                label="Tech Stack definido" 
                count={stats?.noStack.length ?? 0} 
                icon={<FileCode size={14} />} 
              />
            </div>
          </div>

          {/* Tech Distribution */}
          <div style={s.card}>
            <div style={s.cardHeader}>
              <div style={s.cardTitle}>
                <LayoutDashboard size={18} color={tokens.colors.accent} />
                Ecosistema Tech
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {stackStats.map(({ name, count }) => (
                <div key={name} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", fontWeight: 600 }}>
                    <span>{name}</span>
                    <span style={{ color: tokens.colors.textMuted }}>{count}</span>
                  </div>
                  <div style={{ width: "100%", height: "6px", backgroundColor: tokens.colors.bg, borderRadius: "3px", overflow: "hidden" }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(count / maxStack) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      style={{ height: "100%", backgroundColor: tokens.colors.accent }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function HealthItem({ label, count, icon }: { label: string, count: number, icon: React.ReactNode }) {
  const isOk = count === 0;
  return (
    <div style={{ 
      display: "flex", alignItems: "center", justifyItems: "center", justifyContent: "space-between",
      padding: "12px 14px", borderRadius: tokens.radius.md,
      backgroundColor: isOk ? tokens.colors.successBg : tokens.colors.dangerBg,
      border: `1px solid ${tokens.colors.border}`
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13px", fontWeight: 600, color: isOk ? tokens.colors.success : tokens.colors.danger }}>
        {icon}
        {label}
      </div>
      <div style={{ 
        padding: "2px 8px", borderRadius: "10px", fontSize: "11px", fontWeight: 800,
        backgroundColor: isOk ? tokens.colors.success : tokens.colors.danger,
        color: "var(--al3-admin-primary-foreground, #fff)"
      }}>
        {isOk ? "OK" : count}
      </div>
    </div>
  );
}
