
export interface RepositoriesResponse {
    total_count: number;
    incomplete_results: boolean;
    items: Repository[];
}
export interface Repository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    html_url: string;
    description: string;
    stargazers_count: number;
    open_issues_count: number;
    language: string;
}
