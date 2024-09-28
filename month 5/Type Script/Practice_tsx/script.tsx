import React from 'react';

interface AppPropps {
    title: string;
}
const App = ({title}:AppPropps) :JSX.Element => {    
return (
    <h1><header>{title}</header></h1>
)
}