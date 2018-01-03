import nanoid from 'nanoid';

const childTimers = [
    {
        id: nanoid(),
        order: 0,
        title: 'Timer 41',
        description: 'Description Timer 41',
        children: null,
        value: 100, // s
        left: 100, // s
        state: 'stop', // ['stop', 'pause', 'play']
    },
    {
        id: nanoid(),
        order: 1,
        title: 'Timer 42',
        description: 'Description Timer 42',
        children: null,
        value: 100, // s
        left: 100, // s
        state: 'pause',
    },
    {
        id: nanoid(),
        order: 1,
        title: 'Timer 43',
        description: 'Description Timer 43',
        children: null,
        value: 1000, // s
        left: 100, // s
        state: 'play',
    },
];


let timers = [
    {
        id: nanoid(),
        order: 0,
        title: 'Timer 1',
        description: 'Description Timer 1',
        children: null,
        value: 100, // s
        left: 100, // s
        state: 'stop', // ['stop', 'pause', 'play']
        isTopLevel: true,
    },
    {
        id: nanoid(),
        order: 1,
        title: 'Timer 2',
        description: 'Description Timer 2',
        children: null,
        value: 100, // s
        left: 100, // s
        state: 'pause',
        isTopLevel: true,
    },
    {
        id: nanoid(),
        order: 1,
        title: 'Timer 3',
        description: 'Description Timer 3',
        children: null,
        value: 1000, // s
        left: 100, // s
        state: 'play',
        isTopLevel: true,
    },
    {
        id: nanoid(),
        order: 4,
        title: 'Timer 4',
        description: 'Description Timer 4',
        children: childTimers.map((timer => timer.id)),
        value: 1000, // s
        left: 100, // s
        state: 'play',
        isTopLevel: true,
    },
];

timers = timers.concat(childTimers);
export {timers};
