type Event = {
    id: string,
    title: string,
    slug: string[],
    description: string
}

export const events: Event[] = [
{
id: '1',
title: 'Community Health Fair',
slug: ['community', 'health-fair'],
description: 'A free community event with health screenings.',
},
{
id: '2',
title: 'Coding for Kids Workshop',
slug: ['education', 'coding-for-kids'],
description: 'Learn coding basics in a fun environment.',
},
];