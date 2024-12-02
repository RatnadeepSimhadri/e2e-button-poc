import { create } from 'zoid';

export const PopupComponent = create({
    tag: 'popup-component',
    url: 'https://friendly-acorn-ggqqqxr6qpfw764-3000.app.github.dev/popup',
    dimensions: {
        width: '600px',
        height: '500px'
    },
    props: {
        onClose: {
            type: 'function',
            required: true
        },
        createOrder: {
            type: 'function',
            required: false
        },
        orderID: {
            type: 'string',
            queryParam: true,
            default: ''
        }
    },
    defaultContext: 'popup',
    allowClose: true,
    scroll: true,
});