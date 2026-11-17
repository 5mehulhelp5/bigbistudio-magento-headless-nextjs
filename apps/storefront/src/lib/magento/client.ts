import "server-only";

type GraphQLError = {
  message: string;
  extensions?: Record<string, unknown>;
};

type GraphQLResponse<T> = {
  data?: T;
  errors?: GraphQLError[];
};

type MagentoFetchOptions = {
  query: string;
  variables?: Record<string, unknown>;
};

export async function magentoFetch<T>({ query, variables }: MagentoFetchOptions): Promise<T> {
  const endpoint = process.env.MAGENTO_GRAPHQL_URL;

  if (!endpoint) {
    throw new Error("MAGENTO_GRAPHQL_URL is not configured");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
    cache: "no-store",
  });

  let result: GraphQLResponse<T>;

  try {
    result = await response.json();
  } catch {
    throw new Error(`Magento returned an invalid JSON response: ${response.status}`);
  }

  if (!response.ok) {
    throw new Error(`Magento HTTP Error: ${response.status} ${response.statusText}`);
  }

  if (result.errors?.length) {
    throw new Error(
      `Magento GraphQL Error: ${result.errors.map((error) => error.message).join(", ")}`,
    );
  }

  if (!result.data) {
    throw new Error("Magento GraphQL returned no data");
  }

  return result.data;
}
