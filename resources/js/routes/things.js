import React from 'react';

export const xyz = () =>{
    console.log('hello')
    return 'hello';
}

export const ReactLazyPreload = (importStatement) => {
    const Component = React.lazy(importStatement);
    Component.preload = importStatement;
    return Component;
};
