import { magentoFetch } from "../client";

export type StoreConfig = {
  store_name: string;
  base_currency_code: string;
};

const STORE_CONFIG_QUERY = `
  query StoreConfig {
    storeConfig {
      store_name
      base_currency_code
    }
  }
`;

export async function getStoreConfig(): Promise<{
  storeConfig: StoreConfig;
}> {
  return magentoFetch({
    query: STORE_CONFIG_QUERY,
  });
}
