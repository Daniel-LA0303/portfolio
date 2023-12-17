
import { v4 } from "uuid";
const projectsAPI = [
    {
        id: v4(),
        name: 'Crud MCV with MySQL',
        description: 'The project uses the MVC pattern and with the help of Spring, JPA and Thymeleaf we can do CRUD operations',
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
                name: 'Spring Boot',
                color: '#6DB33F'
            },
            {
                id: v4(),
                name: 'Thymeleaf',
                color: '#005744'
            },
            {
                id: v4(),
                name: 'MySQL',
                color: '#4479A1'
            }
        ]
    },
    {
        id: 2,
        name: 'Crud MCV with MongoDB',
        description: 'The project uses the MVC pattern and with the help of Spring, JPA and Thymeleaf we can do CRUD operations \n',
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
                name: 'Spring Boot',
                color: '#6DB33F'
            },
            {
                id: v4(),
                name: 'Thymeleaf',
                color: '#005744'
            },
            {
                id: v4(),
                name: 'MongoDB',
                color: '#47A248'
            },

        ]

    },
    {
        id: v4(),
        name: 'API Rest Spring Boot + MySQL',
        description: 'It is a simple rest api built under Spring Boot layers and with MySQL database. The documentation was implemented with Swagger.',
        linksRepo: [
            {
                id: v4(),
                type: 'Backend',
                link: 'https://github.com/Daniel-LA0303/sb_apirest_mysql'
            }
        ],
        img: '/images/project_backendAPI2.png',
        skills: [
            {
                id: v4(),
                name: 'Spring Boot',
                color: '#6DB33F'
            },
            {
                id: v4(),
                name: 'MySQL',
                color: '#4479A1'
            },
            {
                id: v4(),
                name: 'JPA',
                color: '#6C757D'
            },
            {
                id: v4(),
                name: 'Validation',
                color: '#6C757D'
            }
        ]
    },
    {
        id: v4(),
        name: 'API Rest Spring Boot + MongoDB',
        description: 'It is a simple rest api built under Spring Boot layers and with MongoDB database. The documentation was implemented with Swagger.',
        linksRepo: [
            {
                id: v4(),
                type: 'Backend',
                link: 'https://github.com/Daniel-LA0303/todos_app_SB_mysql'
            }
        ],
        img: '/images/project_backendAPI3.png',
        skills: [
            {
                id: v4(),
                name: 'Spring Boot',
                color: '#6DB33F'
            },
            {
                id: v4(),
                name: 'MongoDB',
                color: '#47A248'
            },
            {
                id: v4(),
                name: 'Validation',
                color: '#6C757D'
            }
        ]

    },
    {
        id: v4(),
        name: 'API Rest NodeJS + MySQL',
        description: 'Implementation of rest api with NodeJS and MySQL and documented with Swagger. In this one I choose to use querys directly to the database.',
        linksRepo: [
            {
                id: v4(),
                type: 'Backend',
                link: 'https://github.com/Daniel-LA0303/blog_backend'
            },
        ],
        img: '/images/project_backendAPI4.png',
        skills: [
            {
                id: v4(),
                name: 'Node.js',
                color: '#8CC84B'
            },
            {
                id: v4(),
                name: 'MySQL',
                color: '#4479A1'
            },
            {
                id: v4(),
                name: 'Validation',
                color: '#6C757D'
            }
        ]
    },
    {
        id: v4(),
        name: 'API Rest NodeJS + MongoDB',
        description: 'Using NodeJS and MongoDB a rest api was implemented with the help of orm mongoose and documented with Swagger.',
        linksRepo: [
            {
                id: v4(),
                type: 'Backend',
                link: 'https://github.com/Daniel-LA0303/blog_backend'
            },
        ],
        img: '/images/project_backendAPI5.png',
        skills: [
            {
                id: v4(),
                name: 'Node.js',
                color: '#8CC84B'
            },
            {
                id: v4(),
                name: 'MongoDB',
                color: '#47A248'
            },
            {
                id: v4(),
                name: 'Validation',
                color: '#6C757D'
            }
        ]
    },

]

const projectsFullstack = [
    {
        id: v4(),
        name: 'Project App Users',
        description: 'This is a project developed with Spring Boot and React, you can create, update and delete user logs, as long as you have the admin role as the project handles authentication with JWT and Spring Security, in the frontend we use Hooks and Context API to manage the state of the application.',
        linksRepo: [
            {
                id: v4(),
                type: 'Backend',
                link: 'https://github.com/Daniel-LA0303/backend_users_SR'
            },
            {
                id: v4(),
                type: 'Frontend',
                link: 'https://github.com/Daniel-LA0303/frontend_users_SR'
            }
        ],
        img: '/images/fullstack1.png',
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
                name: 'Spring Boot',
                color: '#6DB33F'
            },
            {
                id: v4(),
                name: 'JWT',
                color: '#000000'
            },
            {
                id: v4(),
                name: 'Spring Security',
                color: '#6DB33F'
            },
            {
                id: v4(),
                name: 'MySQL',
                color: '#4479A1'
            }
        ]
    },
    {
        id: v4(),
        name: 'Project Inventory and Clients',
        description: 'This project handles the Graphql architecture with a server and an Apollo client, the project was made with the MERN stack and handles authentication with JWT, the project is a CRM where you can create, update and delete clients, products and orders, we also use a filtering of better customers and sellers.',
        linksRepo: [
            {
                id: v4(),
                type: 'Backend',
                link: 'https://github.com/Daniel-LA0303/crm_app_mern_graphql/tree/main/backend'
            },
            {
                id: v4(),
                type: 'Frontend',
                link: 'https://github.com/Daniel-LA0303/crm_app_mern_graphql/tree/main/fontend'
            }
        ],
        img: '/images/fullstack2.png',
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
                name: 'Apollo',
                color: '#fff'
            },
            {
                id: v4(),
                name: 'Express.js',
                color: '#000000'
            },
            {
                id: v4(),
                name: 'Node.js',
                color: '#8CC84B'
            },
            {
                id: v4(),
                name: 'MongoDB',
                color: '#47A248'
            }

        ]
    },
    {
        id: v4(),
        name: 'Blog system with Stack MERN',
        description: 'The Blog System project was implemented under a monolithic architecture, uses advanced tools in the frontend such as Redux, React Router Dom and CSS libraries, authentication works with JWT, in addition the project simulates a blog that has functions such as like, follow users, comment posts, advanced filtering etc.',
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
        img: '/images/fullstack3.png',
        skills: [
            {
                id: v4(),
                name: 'React',
                color: '#61DBFB'
            },

            {
                id: v4(),
                name: 'Express.js',
                color: '#000000'
            },
            {
                id: v4(),
                name: 'Node.js',
                color: '#8CC84B'
            },
            {
                id: v4(),
                name: 'MongoDB',
                color: '#47A248'
            }
        ]
    },

]


const projectsMVC = [

]


export {projectsAPI, projectsFullstack, projectsMVC};