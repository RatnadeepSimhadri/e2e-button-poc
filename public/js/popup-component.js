import { create } from 'zoid';

export const PopupComponent = create({
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
        orderID: {
            type: 'string',
            queryParam: true,
            default: '<>'
        }
    }
});