export const CATEGORIES_QUERY = `
    query GetCategories {
        categoryList {
            uid
            name
            url_key
            url_path
            path
            level
            position
            children_count
            include_in_menu
            children {
                uid
                name
                url_key
                url_path
                path
                level
                position
                children_count
                include_in_menu
                children {
                    uid
                    name
                    url_key
                    url_path
                    path
                    level
                    position
                    children_count
                    include_in_menu
                }
            }
        }
    }
`;
