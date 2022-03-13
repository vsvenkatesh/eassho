import { DocumentNode, useQuery, useMutation } from "@apollo/react-hooks";

export function useTodoQuery(gqlQuery: DocumentNode) {
    const { loading, error, data } = useQuery<any>(gqlQuery);
    return { loading, error, data };
}

export function useTodoMutation(gqlQuery: DocumentNode) {
    const [addTodo] = useMutation<any>(gqlQuery);
    return [addTodo];
}