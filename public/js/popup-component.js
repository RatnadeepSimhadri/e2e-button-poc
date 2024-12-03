import { create } from 'zoid';

export const PopupComponent = create({
    tag: 'popup-component',
    url: 'http://localhost.paypal.com:3001/popup',
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
        },
        onApprove: {
            type: 'function',
            required: false
        }
    },
    defaultContext: 'popup',
    allowClose: true,
    scroll: true,
});