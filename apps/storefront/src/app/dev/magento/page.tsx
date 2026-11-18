import { Suspense } from "react";
import { getStoreConfig } from "@/lib/magento/queries/store-config";

export default function MagentoTestPage() {
  return (
    <main>
      <h1>Magento Connection</h1>

      <Suspense fallback={<p>Loading Magento configuration...</p>}>
        <MagentoStoreConfig />
      </Suspense>
    </main>
  );
}

async function MagentoStoreConfig() {
  const config = await getStoreConfig();
  const storeConfig = config.storeConfig;

  return (
    <section>
      <h2>Store Configuration</h2>

      <dl>
        <dt>Store Name</dt>
        <dd>{storeConfig.store_name}</dd>

        <dt>Base Currency</dt>
        <dd>{storeConfig.base_currency_code}</dd>
      </dl>
    </section>
  );
}
