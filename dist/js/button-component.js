import { create } from 'zoid';

export const SepaButton = create({
    tag: 'my-button-component',
    url: 'https://friendly-acorn-ggqqqxr6qpfw764-3000.app.github.dev/button',
    dimensions: {
        width: '150px',
        height: '40px'
    },
    props: {
        buttonText: {
            type: 'string',
            default: 'Click Me'
        },
        createOrder: {
            type: 'function',
            required: true
        },
        onApprove: {
            type: 'function',
            required: false
        },
        onCancel: {
            type: 'function',
            required: false
        }
    }
});