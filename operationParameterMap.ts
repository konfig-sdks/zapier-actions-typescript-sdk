type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/api/v1/exposed/{exposed_app_action_id}/execute-POST': {
        parameters: [
            {
                name: 'instructions'
            },
            {
                name: 'exposed_app_action_id'
            },
            {
                name: 'preview_only'
            },
        ]
    },
    '/api/v1/exposed-GET': {
        parameters: [
        ]
    },
    '/api/v1/check-GET': {
        parameters: [
        ]
    },
    '/api/v1/configuration-link-GET': {
        parameters: [
        ]
    },
    '/api/v1/execution-log/{execution_log_id}-GET': {
        parameters: [
            {
                name: 'execution_log_id'
            },
        ]
    },
}