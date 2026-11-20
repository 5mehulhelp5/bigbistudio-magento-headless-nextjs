export const PRODUCTS_QUERY = `
  query GetProducts(
    $search: String
    $pageSize: Int!
    $currentPage: Int!
  ) {
    products(
      search: $search
      pageSize: $pageSize
      currentPage: $currentPage
    ) {
      total_count

      page_info {
        current_page
        page_size
        total_pages
      }

      items {
        uid
        sku
        name
        url_key
        stock_status

        small_image {
          url
          label
        }

        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }

            final_price {
              value
              currency
            }
          }
        }
      }
    }
  }
`;
