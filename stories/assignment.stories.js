import React from 'react'
// import { Button } from '@storybook/react/demo';
import { MySurvey } from '../own_modules/My_React_Components.js';
import { Button } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';


export default { title: 'Assignment stories' };

export const button = () => (
    <Button onClick={action('works')}>button</Button>
);
button.story = {
    name: 'My button',
}

export const survey = () => (
    <MySurvey company="Plek"></MySurvey>
);
survey.story = {
    name: 'My react component (form)',
}
