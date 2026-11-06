/**
 * GraphQL query para el Portfolio Dashboard de TinaCMS.
 * Los proyectos se recorren por cursor para incluir todo el inventario.
 */
export const DASHBOARD_QUERY = `
  query DashboardData($after: String) {
    projectsConnection(first: 100, after: $after) {
      totalCount
      pageInfo { hasNextPage endCursor }
      edges {
        node {
          title
          year
          client
          type
          description
          stack
          image
          showInPortfolio
          showInResume
          order
          categories
          categoryOrders { category order }
          _sys {
            filename
            relativePath
          }
        }
      }
    }
    pagesConnection {
      totalCount
      edges {
        node {
          ... on Document {
            _sys {
              filename
              relativePath
            }
          }
        }
      }
    }
  }
`;

export interface ProjectNode {
  title: string;
  year?: string;
  client?: string;
  type?: string;
  description?: string;
  stack?: string[];
  image?: string;
  showInPortfolio?: boolean;
  showInResume?: boolean;
  order?: number;
  categories?: string[];
  categoryOrders?: import('../../src/lib/project-order').CategoryOrder[];
  _sys: {
    filename: string;
    relativePath: string;
  };
}

export interface PageNode {
  _sys: {
    filename: string;
    relativePath: string;
  };
}

export interface DashboardData {
  projectsConnection: {
    totalCount: number;
    pageInfo: { hasNextPage: boolean; endCursor?: string };
    edges: { node: ProjectNode }[];
  };
  pagesConnection: {
    totalCount: number;
    edges: { node: PageNode }[];
  };
}
