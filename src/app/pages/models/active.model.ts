export const ActiveModel = {
    title: 'Active',
    type: 'boolean',
    sort: true,
    editor: {
        type: 'checkbox',
        config: {
            true: true,
            false: false,
        },
    },
    filter: {
        type: 'checkbox',
        config: {
            true: 'true',
            false: 'false',

        },
        resetText: 'Clear',
    },
}
