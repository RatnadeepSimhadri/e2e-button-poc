import { create } from 'zoid';

export const PopupComponent = create({
    tag: 'popup-component',
    url: 'http://localhost:3001/popup',
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