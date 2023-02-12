export interface SearchAndAddTodoProps {
    searchQuery: string
    setsearchQuery: (e: React.ChangeEvent<HTMLInputElement>) => void
}