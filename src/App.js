import React from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Typography from './components/Typography/Typography';
import Heading from './components/Heading/Heading';
import Tooltip from './components/Tooltip/Tooltip';
import Accordion from './components/Accordion/Accordion';

const App = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Inter, sans-serif' }}>
            <Heading level={1}>UI Library Showcase</Heading>

            <Heading level={2}>Buttons</Heading>
            <div>
                <Button variant="primary" size="lg">lg, primary</Button>
                <Button variant="primary" size="md">md, primary</Button>
                <Button variant="primary" size="sm">sm, primary</Button>
                <Button variant="bordered" size="lg">lg, bordered</Button>
            </div>

            <Heading level={2}>Inputs</Heading>
            <Input label="Name" placeholder="Ivan Ivanov" value="" />
            <Input label="Name" placeholder="Focus" danger={false} />
            <Input label="Name" placeholder="Danger" danger={true} />

            <Heading level={2}>Typography</Heading>
            <Typography textSize="sm">SM. Lorem ipsum dolor sit amet...</Typography>
            <Typography textSize="md">MD. Lorem ipsum dolor sit amet...</Typography>
            <Typography textSize="lg">LG. Lorem ipsum dolor sit amet...</Typography>

            <Heading level={2}>Tooltips</Heading>
            <Tooltip text="Tooltip Top" position="top">
                <Button variant="primary">Tooltip Top</Button>
            </Tooltip>
            <Tooltip text="Tooltip Left" position="left">
                <Button variant="primary">Tooltip Left</Button>
            </Tooltip>
            <Tooltip text="Tooltip Right" position="right">
                <Button variant="primary">Tooltip Right</Button>
            </Tooltip>
            <Tooltip text="Tooltip Bottom" position="bottom">
                <Button variant="primary">Tooltip Bottom</Button>
            </Tooltip>

            <Heading level={2}>Accordion</Heading>
            <Accordion title="Accordion">
                Lorem ipsum dolor sit amet...
            </Accordion>
            <Accordion title="Accordion Expanded" defaultOpen>
                Lorem ipsum dolor sit amet...
            </Accordion>
        </div>
    );
};

export default App;
