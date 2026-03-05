// ══════════════════════════════════════════
// Starter Template — Sample System Architecture
// A typical microservices architecture to get started
// ══════════════════════════════════════════

export const starterTemplate = {
    nodes: [
        // — TIER 0: Frontend (Entry) —
        {
            id: 'starter-web',
            type: 'base',
            position: { x: 300, y: 50 },
            data: { label: 'Web App', icon: '🌐', color: '#38bdf8', componentId: 'web-app' },
        },
        {
            id: 'starter-mobile',
            type: 'base',
            position: { x: 500, y: 50 },
            data: { label: 'Mobile App', icon: '📱', color: '#a78bfa', componentId: 'mobile-app' },
        },

        // — TIER 1: DNS —
        {
            id: 'starter-dns',
            type: 'base',
            position: { x: 400, y: 200 },
            data: { label: 'DNS', icon: '🌐', color: '#4ade80', componentId: 'dns' },
        },

        // — TIER 2: Edge & Balancing —
        {
            id: 'starter-cdn',
            type: 'base',
            position: { x: 250, y: 350 },
            data: { label: 'CDN', icon: '🌍', color: '#fbbf24', componentId: 'cdn' },
        },
        {
            id: 'starter-lb',
            type: 'base',
            position: { x: 550, y: 350 },
            data: { label: 'Load Balancer', icon: '⚖️', color: '#818cf8', componentId: 'load-balancer' },
        },

        // — TIER 3: Gateway —
        {
            id: 'starter-api',
            type: 'base',
            position: { x: 400, y: 500 },
            data: { label: 'API Gateway', icon: '🔀', color: '#f472b6', componentId: 'api-gateway' },
        },

        // — TIER 4: Services —
        {
            id: 'starter-user-svc',
            type: 'base',
            position: { x: 300, y: 650 },
            data: { label: 'User Service', icon: '⚙️', color: '#a78bfa', componentId: 'service', technology: 'Node.js', replicas: 3 },
        },
        {
            id: 'starter-order-svc',
            type: 'base',
            position: { x: 500, y: 650 },
            data: { label: 'Order Service', icon: '⚙️', color: '#a78bfa', componentId: 'service', technology: 'Go', replicas: 2 },
        },

        // — TIER 5: Data —
        {
            id: 'starter-postgres',
            type: 'base',
            position: { x: 400, y: 800 },
            data: { label: 'PostgreSQL', icon: '🗄️', color: '#4ade80', componentId: 'postgres', dbType: 'PostgreSQL', replication: true },
        },
    ],

    edges: [
        // Frontend → DNS
        { id: 'se-1', source: 'starter-web', target: 'starter-dns', type: 'custom', data: { edgeType: 'sync', label: '', color: '#38bdf8' } },
        { id: 'se-2', source: 'starter-mobile', target: 'starter-dns', type: 'custom', data: { edgeType: 'sync', label: '', color: '#a78bfa' } },

        // DNS → Edge
        { id: 'se-3', source: 'starter-dns', target: 'starter-cdn', type: 'custom', data: { edgeType: 'sync', label: '', color: '#4ade80' } },
        { id: 'se-4', source: 'starter-dns', target: 'starter-lb', type: 'custom', data: { edgeType: 'sync', label: '', color: '#4ade80' } },

        // LB → API
        { id: 'se-5', source: 'starter-lb', target: 'starter-api', type: 'custom', data: { edgeType: 'sync', label: 'route', color: '#818cf8' } },

        // API → Services
        { id: 'se-6', source: 'starter-api', target: 'starter-user-svc', type: 'custom', data: { edgeType: 'sync', label: '/users', color: '#f472b6' } },
        { id: 'se-7', source: 'starter-api', target: 'starter-order-svc', type: 'custom', data: { edgeType: 'sync', label: '/orders', color: '#f472b6' } },

        // Services → DB
        { id: 'se-8', source: 'starter-user-svc', target: 'starter-postgres', type: 'custom', data: { edgeType: 'db-query', label: 'SQL', color: '#4ade80' } },
        { id: 'se-9', source: 'starter-order-svc', target: 'starter-postgres', type: 'custom', data: { edgeType: 'db-query', label: 'SQL', color: '#4ade80' } },
    ],
};
