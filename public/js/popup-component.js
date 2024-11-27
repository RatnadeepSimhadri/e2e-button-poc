window.PopupComponent = zoid.create({
    tag: 'popup-component',
    url: '/popup',
    dimensions: {
        width: '500px',
        height: '300px'
    },
    props: {
        onClose: {
            type: 'function',
            required: true
        },
        title: {
            type: 'string',
            queryParam: true,
            default: 'Modal Title'
        },
        content: {
            type: 'string',
            queryParam: true,
            default: 'Modal Content'
        }
    }
});