import { create } from 'zoid';

export const SepaButton = create({
    tag: 'my-button-component',
    url: '/button',
    dimensions: {
        width: '150px',
        height: '40px'
    },
    props: {
        buttonText: {
            type: 'string',
            default: 'Click Me'
        }
    }
});