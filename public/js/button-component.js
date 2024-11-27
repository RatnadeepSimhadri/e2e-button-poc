window.MyButton = zoid.create({
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