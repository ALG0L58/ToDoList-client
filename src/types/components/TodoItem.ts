export interface TodoItemProps {
    todo: {
        _id: number
        title: string
        completed?: boolean
        important?: boolean
    }
}