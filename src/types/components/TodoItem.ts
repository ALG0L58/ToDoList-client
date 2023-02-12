export interface TodoItemProps {
    todo: {
        _id: string
        title: string
        completed?: boolean
        important?: boolean
    }
}