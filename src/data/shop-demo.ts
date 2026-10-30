// Design-only content, not commercial inventory.
export const shopCopy={
 es:{skip:'Ir al contenido',demo:'Exploración de diseño · piezas y renders de ejemplo',portfolio:'Portfolio',collection:'Colección',customNav:'A medida',eyebrow:'Del estudio a tu espacio',title1:'Ideas que',title2:'toman forma.',intro:'Objetos cotidianos con otra mirada. Una colección que explora diseño, utilidad y las posibilidades de la impresión 3D.',explore:'Explorar piezas',place:'Argentina',physical:'Objetos físicos',heroProduct:'Jarrón Sur',render:'Render conceptual',heroAlt:'Render conceptual de un jarrón verde con textura acanalada',collectionLabel:'Una primera exploración',collectionTitle:'Pequeños objetos. Nuevas posibilidades.',disclaimer:'Estas piezas ilustran la propuesta visual. El catálogo, los materiales, los precios y las opciones de entrega se definirán con las impresiones reales.',customLabel:'Otra idea, otra forma',customTitle:'¿Tenés algo en mente?',customCopy:'Un espacio para explorar piezas personalizadas, adaptaciones y proyectos especiales. La modalidad del servicio se definirá antes del lanzamiento.',customButton:'Ver propuesta',processTitle:'Cómo imaginamos la experiencia',step1Title:'Encontrá tu pieza',step1Copy:'Un catálogo simple, con fotos reales y toda la información que importa.',step2Title:'Conocé cada detalle',step2Copy:'Medidas, colores y material. Stock y tiempos de producción explicados con claridad.',step3Title:'Elegí cómo recibirla',step3Copy:'Envíos en Argentina: cobertura, costo y modalidad a confirmar antes de comprar.',footerBrand:'DISEÑO + OBJETOS',footerNote:'Portfolio y exploración de una tienda de impresión 3D.',footerDemo:'PROTOTIPO · SIN VENTAS',categories:['Todas las piezas','Hogar y deco','Escritorio','Organización','Objetos de diseño'],pieces:'PIEZAS DE EJEMPLO',price:'Precio a definir',detail:'Ver concepto',close:'Cerrar',theme:'Cambiar tema',filterLabel:'Categorías',concept:'Pieza de ejemplo',material:'Material propuesto',dimensions:'Medidas',pending:'A confirmar',delivery:'Entrega',deliveryValue:'Argentina · a definir',dialogNotice:'Ejemplo de ficha: este render no representa una pieza disponible para comprar. Sin pedidos, pagos ni reservas.',customNotice:'Esta sección propone una futura consulta de diseño e impresión. Todavía no envía mensajes ni genera presupuestos.'},
 en:{skip:'Skip to content',demo:'Design exploration · sample objects and renders',portfolio:'Portfolio',collection:'Collection',customNav:'Custom work',eyebrow:'From the studio to your space',title1:'Ideas taking',title2:'a new shape.',intro:'A fresh look at everyday objects. A collection exploring design, function and the possibilities of 3D printing.',explore:'Explore objects',place:'Argentina',physical:'Physical objects',heroProduct:'Sur vase',render:'Concept render',heroAlt:'Concept render of a sage green ribbed vase',collectionLabel:'A first exploration',collectionTitle:'Small objects. New possibilities.',disclaimer:'These objects illustrate the visual direction. The catalog, materials, prices and delivery options will be defined using real prints.',customLabel:'Another idea, another shape',customTitle:'Something on your mind?',customCopy:'A space to explore custom pieces, adaptations and special projects. The service will be defined before launch.',customButton:'View proposal',processTitle:'The experience we imagine',step1Title:'Find your object',step1Copy:'A simple catalog with real photographs and the details that matter.',step2Title:'Know every detail',step2Copy:'Dimensions, colors and materials. Clear information on stock and production times.',step3Title:'Choose your delivery',step3Copy:'Shipping within Argentina: coverage, cost and delivery method confirmed before purchase.',footerBrand:'DESIGN + OBJECTS',footerNote:'A portfolio and an exploration of a 3D printing shop.',footerDemo:'PROTOTYPE · NO SALES',categories:['All objects','Home & decor','Desk','Organization','Design objects'],pieces:'SAMPLE OBJECTS',price:'Price to be defined',detail:'View concept',close:'Close',theme:'Switch theme',filterLabel:'Categories',concept:'Sample object',material:'Proposed material',dimensions:'Dimensions',pending:'To be confirmed',delivery:'Delivery',deliveryValue:'Argentina · to be defined',dialogNotice:'Sample product page: this render does not represent an object available for purchase. No orders, payments or reservations.',customNotice:'This section proposes a future design and printing inquiry. It does not send messages or generate quotes yet.'}
};
export const shopDetailKeys = ['material', 'dimensions', 'variants', 'care', 'availability', 'productionTime'] as const;
export type ShopDetailKey = typeof shopDetailKeys[number];
export type ShopLocalizedText = Record<ShopLanguage, string>;
export type ShopConceptDetails = Readonly<Record<ShopDetailKey, ShopLocalizedText | null>>;

export interface ShopDemoProduct {
  id: number;
  category: 1 | 2 | 3 | 4;
  names: readonly [string, string];
  descriptions: readonly [string, string];
  alts: readonly [string, string];
  details: ShopConceptDetails;
}

const pendingDetails: ShopConceptDetails = {
  material: null,
  dimensions: null,
  variants: null,
  care: null,
  availability: null,
  productionTime: null,
};

export const shopDemoProducts: ShopDemoProduct[] = [
 {id:0,category:1,names:['Jarrón Sur','Sur vase'],descriptions:['Curvas y capas que convierten un rincón en un pequeño punto de atención.','Curves and layers that turn a quiet corner into a small focal point.'],alts:['Render conceptual de un jarrón verde acanalado','Concept render of a sage green ribbed vase'],details:{ ...pendingDetails }},
 {id:1,category:3,names:['Módulo Mesa','Mesa organizer'],descriptions:['Un conjunto de volúmenes para darle lugar a lo que usás todos los días.','A set of volumes for the things you reach for every day.'],alts:['Render conceptual de un organizador de escritorio terracota','Concept render of a terracotta desk organizer'],details:{ ...pendingDetails }},
 {id:2,category:2,names:['Soporte Uno','Uno stand'],descriptions:['Una forma simple para acompañar tu espacio de trabajo.','A simple shape to complement your workspace.'],alts:['Render conceptual de un soporte de teléfono gris oscuro','Concept render of a charcoal phone stand'],details:{ ...pendingDetails }},
 {id:3,category:1,names:['Maceta Prisma','Prisma planter'],descriptions:['Geometría, textura y un lugar para sumar un poco de verde.','Geometry, texture and a place for a little greenery.'],alts:['Render conceptual de una maceta geométrica color arena','Concept render of a sand-colored geometric planter'],details:{ ...pendingDetails }},
 {id:4,category:4,names:['Nudo','Knot'],descriptions:['Un juego de planos y conexiones para mirar desde distintos ángulos.','An interplay of planes and connections to explore from different angles.'],alts:['Render conceptual de una escultura azul de formas entrelazadas','Concept render of a blue interlocking geometric sculpture'],details:{ ...pendingDetails }},
 {id:5,category:3,names:['Clip','Clip'],descriptions:['Pequeñas piezas que proponen otra manera de ordenar tus cables.','Small objects exploring another way to keep cables in place.'],alts:['Render conceptual de tres clips para cables color oliva','Concept render of three olive cable clips'],details:{ ...pendingDetails }}
];

export type ShopLanguage = keyof typeof shopCopy;
export const shopRoutes = { es: "/tienda", en: "/en/shop-3d" } as const;
