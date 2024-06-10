import EmailDefaultSvg from '@root/public/images/contact/email_default.svg';
import EmailCircleSvg from '@root/public/images/contact/email_circle.svg';
import PhoneDefaultSvg from '@root/public/images/contact/phone_default.svg';
import PhoneCircleSvg from '@root/public/images/contact/phone_circle.svg';
import WhatsappDefaultSvg from '@root/public/images/contact/whatsapp_default.svg';
import WhatsappCircleSvg from '@root/public/images/contact/whatsapp_circle.svg';
import LinkedinDefaultSvg from '@root/public/images/contact/linkedin_default.svg';
import LinkedinCircleSvg from '@root/public/images/contact/linkedin_circle.svg';
import InstagramDefaultSvg from '@root/public/images/contact/ig_default.svg';
import InstagramCircleSvg from '@root/public/images/contact/ig_circle.svg';

const HearderMenuData = [
    {
        id: 1,
        text: 'Client Works',
        href: 'works',
        route: '/works',
    },
    {
        id: 2,
        text: 'Photography',
        href: 'photography',
        route: '/photography',
    },
    {
        id: 3,
        text: 'About Me',
        href: 'about',
        route: '/#about',
    },
    {
        id: 4,
        text: `Let's Talk`,
        href: 'contact',
        route: '/#contact',
    },
];

const LandingMenuData = [
    {
        id: 1,
        text: 'Design',
        route: '/works',
    },
    {
        id: 2,
        text: 'Website Design',
        route: '/works',
    },
    {
        id: 3,
        text: 'Branding',
        route: '/works',
    },
    {
        id: 4,
        text: 'Photography',
        route: '/photography',
    },
];

const SelectedWorksData = [
    {
        id: 1,
        title: 'Promotion Poster Series',
        desc: 'Design / Photography',
        name: 'design',
        entryImg: {
            xs: '/images/selected_works/main_1.jpg',
            lg: '/images/selected_works/main_lg_1.jpg',
        },
        details: {
            title: 'Promotion Poster Series',
            desc: 'Shark Fin',
            date: 'August 2023',
            client: 'Shark Fin Keysborough',
            service: 'Poster Design / Photography',
            software: 'Lightroom / Photoshop / Illustrator',
            brief: 'Continue the monthly promotional series for Shark Fin by conducting a photoshoot and designing a poster for the Japanese sake, in A5 and A6 sizes.',
            processes: [
                {
                    id: 1,
                    title: '',
                    desc: '',
                    url: {
                        xs: '/images/selected_works/work_1/mobile/process/1.jpg',
                        lg: '/images/selected_works/work_1/desktop/process/1.jpg',
                    },
                },
                {
                    id: 2,
                    title: '',
                    desc: '',
                    url: {
                        xs: '/images/selected_works/work_1/mobile/process/2.jpg',
                        lg: '/images/selected_works/work_1/desktop/process/2.jpg',
                    },
                },
                {
                    id: 3,
                    title: '',
                    desc: '',
                    url: {
                        xs: '/images/selected_works/work_1/mobile/process/3.jpg',
                        lg: '/images/selected_works/work_1/desktop/process/3.jpg',
                    },
                },
                {
                    id: 4,
                    title: '',
                    desc: '',
                    url: {
                        xs: '/images/selected_works/work_1/mobile/process/4.jpg',
                        lg: '/images/selected_works/work_1/desktop/process/4.jpg',
                    },
                },
            ],
            execution: {
                title: 'Functional Poster',
                desc: `The final image was meticulously crafted to deliver a captivating and cool visual experience for customers. Additionally, the poster is designed to be versatile and functional across different sizes. 

Notably, the promotional poster series for Shark Fin has surpassed profit projections.`,
                photos: [
                    {
                        id: 1,
                        url: {
                            xs: '/images/selected_works/work_1/mobile/execution/1.jpg',
                            lg: '/images/selected_works/work_1/desktop/execution/1.jpg',
                        },
                    },
                    {
                        id: 2,
                        url: {
                            xs: '/images/selected_works/work_1/mobile/execution/2.jpg',
                            lg: '/images/selected_works/work_1/desktop/execution/2.jpg',
                        },
                    },
                    {
                        id: 3,
                        url: {
                            xs: '/images/selected_works/work_1/mobile/execution/3.jpg',
                            lg: '/images/selected_works/work_1/desktop/execution/3.jpg',
                        },
                    },
                    {
                        id: 4,
                        url: {
                            xs: '/images/selected_works/work_1/mobile/execution/4.jpg',
                            lg: '/images/selected_works/work_1/desktop/execution/4.jpg',
                        },
                    }
                ],
            },
        },
    },
    {
        id: 2,
        title: 'Jo & Jim Repsonsive Website',
        desc: 'Website Design',
        name: 'website',
        entryImg: {
            xs: '/images/selected_works/main_2.jpg',
            lg: '/images/selected_works/main_lg_2.jpg',
        },
        details: {
            title: 'Responsive Website',
            desc: 'Jo & Jim Services Group',
            date: 'November 2023',
            client: 'Jo & Jim Service Group',
            service: 'Website Design',
            software: 'Figma / Illustrator / Photoshop',
            brief: "Jo & Jim Service Group requires a user-friendly, single-page website catering to aged care services and elderly clients. The website should feature intuitive navigation, be fully responsive, and offer seamless switching between English and Chinese, effectively showcasing their services and contact details.",
            processes: [
                {
                    id: 1,
                    title: '',
                    desc: '',
                    url: {
                        xs: '/images/selected_works/work_2/mobile/process/1.jpg',
                        lg: '/images/selected_works/work_2/desktop/process/1.jpg',
                    },
                },
                {
                    id: 2,
                    title: '',
                    desc: '',
                    url: {
                        xs: '/images/selected_works/work_2/mobile/process/2.jpg',
                        lg: '/images/selected_works/work_2/desktop/process/2.jpg',
                    },
                },
                {
                    id: 3,
                    title: '',
                    desc: '',
                    url: {
                        xs: '/images/selected_works/work_2/mobile/process/3.jpg',
                        lg: '/images/selected_works/work_2/desktop/process/3.jpg',
                    },
                },
                {
                    id: 4,
                    title: '',
                    desc: '',
                    url: {
                        xs: '/images/selected_works/work_2/mobile/process/4.jpg',
                        lg: '/images/selected_works/work_2/desktop/process/4.jpg',
                    },
                },
                {
                    id: 5,
                    title: '',
                    desc: '',
                    url: {
                        xs: '/images/selected_works/work_2/mobile/process/5.jpg',
                        lg: '/images/selected_works/work_2/desktop/process/5.jpg',
                    },
                }
            ],
            execution: {
                title: 'Functional Poster',
                desc: `The final image was meticulously crafted to deliver a captivating and cool visual experience for customers. Additionally, the poster is designed to be versatile and functional across different sizes. 

Notably, the promotional poster series for Shark Fin has surpassed profit projections.`,
                photos: [
                    {
                        id: 1,
                        url: {
                            xs: '/images/selected_works/work_2/mobile/execution/1.jpg',
                            lg: '/images/selected_works/work_2/desktop/execution/1.jpg',
                        },
                    },
                    {
                        id: 2,
                        url: {
                            xs: '/images/selected_works/work_2/mobile/execution/2.jpg',
                            lg: '/images/selected_works/work_2/desktop/execution/2.jpg',
                        },
                    },
                    {
                        id: 3,
                        url: {
                            xs: '/images/selected_works/work_2/mobile/execution/3.jpg',
                            lg: '/images/selected_works/work_2/desktop/execution/3.jpg',
                        },
                    },
                    {
                        id: 4,
                        url: {
                            xs: '/images/selected_works/work_2/mobile/execution/4.jpg',
                            lg: '/images/selected_works/work_2/desktop/execution/4.jpg',
                        },
                    },
                    {
                        id: 5,
                        url: {
                            xs: '/images/selected_works/work_2/mobile/execution/5.jpg',
                            lg: '/images/selected_works/work_2/desktop/execution/5.jpg',
                        },
                    },
                    {
                        id: 6,
                        url: {
                            xs: '/images/selected_works/work_2/mobile/execution/6.jpg',
                            lg: '/images/selected_works/work_2/desktop/execution/6.jpg',
                        },
                    }
                ],
            },
        },
    },
    {
        id: 3,
        title: 'MMT Brand Guidelines',
        desc: 'Branding',
        name: 'branding',
        entryImg: {
            xs: '/images/selected_works/main_3.jpg',
            lg: '/images/selected_works/main_lg_3.jpg',
        },
        details: {
            title: 'Brand Guidelines',
            desc: 'Branding',
            date: 'February 2024',
            client: 'MMT Auto Group',
            service: 'Branding',
            software: 'Figma / Illustrator / Photoshop',
            brief: "Conduct thorough background and market research, and develop an extensive brand guideline for MMT Auto Group. According to the client's specifications, the primary colour must be blue, and the existing logo mark is also being utilised.",
            processes: [
                {
                    id: 1,
                    title: '',
                    desc: '',
                    url: {
                        xs: '/images/selected_works/work_3/mobile/process/1.jpg',
                        lg: '/images/selected_works/work_3/desktop/process/1.jpg',
                    },
                },
                {
                    id: 2,
                    title: '',
                    desc: '',
                    url: {
                        xs: '/images/selected_works/work_3/mobile/process/2.jpg',
                        lg: '/images/selected_works/work_3/desktop/process/2.jpg',
                    },
                },
                {
                    id: 3,
                    title: '',
                    desc: '',
                    url: {
                        xs: '/images/selected_works/work_3/mobile/process/3.jpg',
                        lg: '/images/selected_works/work_3/desktop/process/3.jpg',
                    },
                },
                {
                    id: 4,
                    title: '',
                    desc: '',
                    url: {
                        xs: '/images/selected_works/work_3/mobile/process/4.jpg',
                        lg: '/images/selected_works/work_3/desktop/process/4.jpg',
                    },
                },
            ],
            execution: {
                title: 'Functional Poster',
                desc: `The final image was meticulously crafted to deliver a captivating and cool visual experience for customers. Additionally, the poster is designed to be versatile and functional across different sizes. 

Notably, the promotional poster series for Shark Fin has surpassed profit projections.`,
                photos: [
                    {
                        id: 1,
                        url: {
                            xs: '/images/selected_works/work_3/mobile/execution/1.jpg',
                            lg: '/images/selected_works/work_3/desktop/execution/1.jpg',
                        },
                    },
                    {
                        id: 2,
                        url: {
                            xs: '/images/selected_works/work_3/mobile/execution/2.jpg',
                            lg: '/images/selected_works/work_3/desktop/execution/2.jpg',
                        },
                    },
                    {
                        id: 3,
                        url: {
                            xs: '/images/selected_works/work_3/mobile/execution/3.jpg',
                            lg: '/images/selected_works/work_3/desktop/execution/3.jpg',
                        },
                    },
                    {
                        id: 4,
                        url: {
                            xs: '/images/selected_works/work_3/mobile/execution/4.jpg',
                            lg: '/images/selected_works/work_3/desktop/execution/4.jpg',
                        },
                    },
                    {
                        id: 5,
                        url: {
                            xs: '/images/selected_works/work_3/mobile/execution/5.jpg',
                            lg: '/images/selected_works/work_3/desktop/execution/5.jpg',
                        },
                    },
                    {
                        id: 6,
                        url: {
                            xs: '/images/selected_works/work_3/mobile/execution/6.jpg',
                            lg: '/images/selected_works/work_3/desktop/execution/6.jpg',
                        },
                    },
                    {
                        id: 7,
                        url: {
                            xs: '/images/selected_works/work_3/mobile/execution/7.jpg',
                            lg: '/images/selected_works/work_3/desktop/execution/7.jpg',
                        },
                    },
                    {
                        id: 8,
                        url: {
                            xs: '/images/selected_works/work_3/mobile/execution/8.jpg',
                            lg: '/images/selected_works/work_3/desktop/execution/8.jpg',
                        },
                    },
                    {
                        id: 9,
                        url: {
                            xs: '/images/selected_works/work_3/mobile/execution/9.jpg',
                            lg: '/images/selected_works/work_3/desktop/execution/9.jpg',
                        },
                    },
                    {
                        id: 10,
                        url: {
                            xs: '/images/selected_works/work_3/mobile/execution/10.jpg',
                            lg: '/images/selected_works/work_3/desktop/execution/10.jpg',
                        },
                    },
                ],
            },
        },
    },
    {
        id: 4,
        title: 'Jo & Jim Business Cards',
        desc: 'Design',
        name: 'cards',
        entryImg: {
            xs: '/images/selected_works/main_4.jpg',
            lg: '/images/selected_works/main_lg_4.jpg',
        },
        details: {
            title: "Jo & Jim's",
            desc: 'Business Cards',
            date: 'March 2023',
            client: 'Jo & Jim Service Group',
            service: 'Design',
            software: 'Photoshop / Illustrator',
            brief: 'Jo & Jim Service Group requires a business card design for its founders. The front should be black and the back white, reflecting their dual focus on cleaning and construction.',
            processes: [
                {
                    id: 1,
                    title: '',
                    desc: '',
                    url: {
                        xs: '/images/selected_works/work_4/mobile/process/1.jpg',
                        lg: '/images/selected_works/work_4/desktop/process/1.jpg',
                    },
                },
                {
                    id: 2,
                    title: '',
                    desc: '',
                    url: {
                        xs: '/images/selected_works/work_4/mobile/process/2.jpg',
                        lg: '/images/selected_works/work_4/desktop/process/2.jpg',
                    },
                },
                {
                    id: 3,
                    title: '',
                    desc: '',
                    url: {
                        xs: '/images/selected_works/work_4/mobile/process/3.jpg',
                        lg: '/images/selected_works/work_4/desktop/process/3.jpg',
                    },
                },
            ],
            execution: {
                title: 'Business Card Specifications',
                desc: `Paper options and special enhancement:
360gsm Silk Artboard
Matte Laminate 2 sides
Spot UV 1 side (Logo)`,
                photos: [
                    {
                        id: 1,
                        url: {
                            xs: '/images/selected_works/work_4/mobile/execution/1.jpg',
                            lg: '/images/selected_works/work_4/desktop/execution/1.jpg',
                        },
                    },
                    {
                        id: 2,
                        url: {
                            xs: '/images/selected_works/work_4/mobile/execution/2.jpg',
                            lg: '/images/selected_works/work_4/desktop/execution/2.jpg',
                        },
                    },
                    {
                        id: 3,
                        url: {
                            xs: '/images/selected_works/work_4/mobile/execution/3.jpg',
                            lg: '/images/selected_works/work_4/desktop/execution/3.jpg',
                        },
                    },
                    {
                        id: 4,
                        url: {
                            xs: '/images/selected_works/work_4/mobile/execution/4.jpg',
                            lg: '/images/selected_works/work_4/desktop/execution/4.jpg',
                        },
                    },
                    {
                        id: 5,
                        url: {
                            xs: '/images/selected_works/work_4/mobile/execution/5.jpg',
                            lg: '/images/selected_works/work_4/desktop/execution/5.jpg',
                        },
                    },
                ],
            },
        },
    },
];

const PhotographyData = [
    {
        id: 1,
        url: '/images/photography/main_1.png',
        cols: 1,
        rows: 1,
    },
    {
        id: 2,
        url: '/images/photography/main_2.png',
        cols: 2,
        rows: 1,
    },
    {
        id: 3,
        url: '/images/photography/main_3.png',
        cols: 1,
        rows: 1,
    },
    {
        id: 4,
        url: '/images/photography/main_4.png',
        cols: 1,
        rows: 1,
    },
    {
        id: 5,
        url: '/images/photography/main_5.png',
        cols: 1,
        rows: 1,
    },
];

const ContactData = [
    {
        id: 1,
        name: 'email',
        value_default: EmailDefaultSvg,
        value_circle: EmailCircleSvg,
        href: 'mailto:kphaleung@gmail.com',
    },
    {
        id: 2,
        name: 'phone',
        value_default: PhoneDefaultSvg,
        value_circle: PhoneCircleSvg,
        href: 'tel:61438972078',
    },
    {
        id: 3,
        name: 'whatsapp',
        value_default: WhatsappDefaultSvg,
        value_circle: WhatsappCircleSvg,
        href: 'https://wa.me/61438972078',
    },
    {
        id: 4,
        name: 'linkedin',
        value_default: LinkedinDefaultSvg,
        value_circle: LinkedinCircleSvg,
        href: 'https://au.linkedin.com/in/kepha-leung-467a01151',
    },
    {
        id: 5,
        name: 'instagram',
        value_default: InstagramDefaultSvg,
        value_circle: InstagramCircleSvg,
        href: 'https://www.instagram.com/0.1.1.5_user/',
    },
];

const PhotographyPageData = [
    {
        id: 0,
        title: 'Commissioned',
        entryImg: '/images/photography/commissioned_entry.png',
        name: 'commissioned',
        href: '/photography/collections',
        collection: [
            {
                id: 1,
                url: '/images/photography/commissioned/1.png',
                cols: 2,
                rows: 1,
            },
            {
                id: 2,
                url: '/images/photography/commissioned/2.png',
                cols: 2,
                rows: 1,
            },
            {
                id: 3,
                url: '/images/photography/commissioned/3.png',
                cols: 2,
                rows: 1,
            },
            {
                id: 4,
                url: '/images/photography/commissioned/4.png',
                cols: 2,
                rows: 1,
            },
            {
                id: 5,
                url: '/images/photography/commissioned/5.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 6,
                url: '/images/photography/commissioned/6.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 7,
                url: '/images/photography/commissioned/7.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 8,
                url: '/images/photography/commissioned/8.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 9,
                url: '/images/photography/commissioned/9.png',
                cols: 2,
                rows: 1,
            },
        ],
    },
    {
        id: 1,
        title: 'Lifestyle',
        entryImg: '/images/photography/lifestyle_entry.png',
        name: 'lifestyle',
        href: '/photography/collections',
        collection: [
            {
                id: 1,
                url: '/images/photography/lifestyle/1.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 2,
                url: '/images/photography/lifestyle/2.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 3,
                url: '/images/photography/lifestyle/3.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 4,
                url: '/images/photography/lifestyle/4.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 5,
                url: '/images/photography/lifestyle/5.png',
                cols: 2,
                rows: 1,
            },
            {
                id: 6,
                url: '/images/photography/lifestyle/6.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 7,
                url: '/images/photography/lifestyle/7.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 8,
                url: '/images/photography/lifestyle/8.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 9,
                url: '/images/photography/lifestyle/9.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 10,
                url: '/images/photography/lifestyle/10.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 11,
                url: '/images/photography/lifestyle/11.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 12,
                url: '/images/photography/lifestyle/12.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 13,
                url: '/images/photography/lifestyle/13.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 14,
                url: '/images/photography/lifestyle/14.png',
                cols: 1,
                rows: 1,
            },
            {
                id: 15,
                url: '/images/photography/lifestyle/15.png',
                cols: 1,
                rows: 1,
            },
        ],
    },
];

export {
    HearderMenuData,
    LandingMenuData,
    SelectedWorksData,
    PhotographyData,
    ContactData,
    PhotographyPageData,
};
