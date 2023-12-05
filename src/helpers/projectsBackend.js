
import { v4 } from "uuid";
const projectsBackend = [
    {
        id: 1,
        name: 'Project 1',
        description: 'Description 1',
        linksRepo: [
            {
                id: v4(),
                type: 'Backend',
                link: 'https://github.com/Daniel-LA0303/todos_app_SB'
            }
        ],
        img: '/images/project_backend1.png',
        skills: [
            {
                id: v4(),
                name: 'React',
                color: '#61DBFB'
            },
            {
                id: v4(),
                name: 'JavaScript',
                color: '#F0DB4F'
            },
            {
                id: v4(),
                name: 'HTML',
                color: '#E34F26'
            },
            {
                id: v4(),
                name: 'CSS',
                color: '#2965F1'
            }
        ]
    },
    {
        id: 2,
        name: 'Project 2',
        description: 'Description 2',
        linksRepo: [
            {
                id: v4(),
                type: 'Backend',
                link: 'https://github.com/Daniel-LA0303/todos_app_SB_mysql'
            }
        ],
        img: '/images/project_backend2.png',
        skills: [
            {
                id: v4(),
                name: 'React',
                color: '#61DBFB'
            },
            {
                id: v4(),
                name: 'JavaScript',
                color: '#F0DB4F'
            },
            {
                id: v4(),
                name: 'HTML',
                color: '#E34F26'
            },
            {
                id: v4(),
                name: 'CSS',
                color: '#2965F1'
            }
        ]

    },
    {
        id: 3,
        name: 'Project 3',
        description: 'Description 3',
        linksRepo: [
            {
                id: v4(),
                type: 'Backend',
                link: 'https://github.com/Daniel-LA0303/blog_backend'
            },
            {
                id: v4(),
                type: 'Frontend',
                link: 'https://github.com/Daniel-LA0303/blog_frontend'
            }
        ],
        img: '/images/project_backend3.png',
        skills: [
            {
                id: v4(),
                name: 'React',
                color: '#61DBFB'
            },
            {
                id: v4(),
                name: 'JavaScript',
                color: '#F0DB4F'
            },
            {
                id: v4(),
                name: 'HTML',
                color: '#E34F26'
            },
            {
                id: v4(),
                name: 'CSS',
                color: '#2965F1'
            }
        ]
    },

]


export default projectsBackend;