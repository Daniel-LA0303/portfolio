import { v4 } from "uuid";
const projects = [
    {
        id: v4(),
        name: 'App Movies',
        description: 'This project was developed with a movie api, it works with slider and css libraries.',
        linksRepo: [
            {
                id: v4(),
                type: 'Frontend',
                link: 'https://github.com/Daniel-LA0303/appMovies'
            },
            {
                id: v4(),
                type: 'Demo',
                link: 'https://stellular-marigold-be1330.netlify.app/'
            },
        ],
        img: '/images/project_frontend2.png',
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
        id: v4(),
        name: 'App Restaurant',
        description: 'The project simulates a dashboard of a coffee shop, the adminitrador can execute CRUD actions on products and orders.',
        linksRepo: [
            {
                id: v4(),
                type: 'Frontend',
                link: 'https://github.com/Daniel-LA0303/coffe_app'
            },
            {
                id: v4(),
                type: 'Demo',
                link: 'https://magnificent-lamington-969efd.netlify.app'
            },
        ],
        img: '/images/project_frontend3.png',
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
        id: v4(),
        name: 'App Restaurant',
        description: 'In the project is represented a dahsboard of a restaurateur where the user can see sales and do CRUD actions.',
        linksRepo: [
            {
                id: v4(),
                type: 'Frontend',
                link: 'https://github.com/Daniel-LA0303/app_restaurante'
            },
            {
                id: v4(),
                type: 'Demo',
                link: 'https://reliable-pony-b66b60.netlify.app/'
            },
        ],
        img: '/images/project_frontend7.png',
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
        id: v4(),
        name: 'FFMI Calculator',
        description: 'The project is an FFMI calculator in which a user-friendly UI is worked.',
        linksRepo: [
            {
                id: v4(),
                type: 'Frontend',
                link: 'https://github.com/Daniel-LA0303/FFMI'
            },
            {
                id: v4(),
                type: 'Demo',
                link: 'https://kaleidoscopic-blini-48082b.netlify.app/'
            },
        ],
        img: '/images/project_frontend1.png',
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
        id: v4(),
        name: 'My first CRUD',
        description: 'In this project I present my first static CRUD work with ReactJS and Bootstrap.',
        linksRepo: [
            {
                id: v4(),
                type: 'Frontend',
                link: 'https://github.com/Daniel-LA0303/siempe-CRUD'
            },
            {
                id: v4(),
                type: 'Demo',
                link: 'https://glittering-heliotrope-f4aeee.netlify.app/'
            },
        ],
        img: '/images/project_frontend4.png',
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
        id: v4(),
        name: 'Weather App',
        description: 'With the help of the Open Weather api you can make a query form to cities that the api allows.',
        linksRepo: [
            {
                id: v4(),
                type: 'Frontend',
                link: 'https://github.com/Daniel-LA0303/weather'
            },
            {
                id: v4(),
                type: 'Demo',
                link: 'https://dulcet-muffin-eeabc4.netlify.app/'
            },
        ],
        img: '/images/project_frontend5.png',
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
        id: v4(),
        name: 'Password Generator',
        description: 'Being one of my simplest projects could not miss the random password generator.',
        linksRepo: [
            {
                id: v4(),
                type: 'Frontend',
                link: 'https://github.com/Daniel-LA0303/passwordGenerator'
            },
            {
                id: v4(),
                type: 'Demo',
                link: 'https://darling-bonbon-e02a22.netlify.app/'
            },
        ],
        img: '/images/project_frontend6.png',
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

export default projects;