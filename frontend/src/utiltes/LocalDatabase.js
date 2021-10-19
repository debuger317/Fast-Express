import { FaUserTie, FaUserNurse } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';

import { VscDashboard,VscPerson,VscPackage, VscOrganization,VscPreview, VscReport,VscRequestChanges,VscStarFull, VscGear } from 'react-icons/vsc';



export const FaqData = [
    {
        id:1,
        levelName:'What do we do?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    },
    {
        id:2,
        levelName:'Who are our drivers and riders?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    },
    {
        id:3,
        levelName:'What makes Fast Express efficient?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    },
    {
        id:4,
        levelName:'How does Ixpress mantain this application and what is our cause?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    },
    {
        id:5,
        levelName:'What does Ixpress have to offer? Why should you choose us?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    }
    

];

export const NavItem = [
    {
        id: 1,
        name: 'Home',
        className:'relative',
        subitem:[
            {
                id: 1,
                name: 'Home Delivery',
                path: '/'
            },
            {
                id: 2,
                name: 'Home custom order',
                path: '/'
            },
            {
                id: 3,
                name: 'Get more',
                path: '/'
            }
        ],
        path: '/'
    },
    {
        id: 2,
        name: 'Pricing',
        path: '/pricing'
    },
    {
        id: 3,
        name: 'Contact',
        className:'relative',
        subitem:[
            {
                id: 1,
                name: 'Home Delivery',
                path: '/'
            },
            {
                id: 2,
                name: 'Accept custom order',
                path: '/'
            },
            {
                id: 3,
                name: 'Get more',
                path: '/'
            }
        ],
        path: '/contact'
    },
    {
        id: 4,
        name: 'Service',
        className:'relative',
        subitem:[
            {
                id: 1,
                name: 'Home Delivery',
                path: '/'
            },
            {
                id: 2,
                name: 'Accept custom order',
                path: '/'
            },
            {
                id: 3,
                name: 'Get more',
                path: '/'
            }
        ],
        path: '/service'
    },
    {
        id: 5,
        name: 'Faq',
        path: '/faq'
    },
    {
        id: 6,
        name: 'About',
        rm: 'mr-0',
        path: '/about'
    },
];

export const ReviewItem = [
    {
        id:1,
        name:'AM Fahim',
        photo:<FaUserTie/>,
        profession: 'Web Developer',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, odio corporis. Consectetur inventore consequatur atque voluptatem ipsa nam, architecto saepe earum dolorem quae possimus tempore alias sed.'
        
    },
    {
        id:2,
        name:'AM Fahim',
        photo:<FaUserNurse/>,
        profession: 'Web Developer',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, odio corporis. Consectetur inventore consequatur atque voluptatem ipsa nam, architecto saepe earum dolorem quae possimus tempore alias sed.'
        
    },
    {
        id:3,
        name:'AM Fahim',
        photo:<FaUserTie/>,
        profession: 'Web Developer',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, odio corporis. Consectetur inventore consequatur atque voluptatem ipsa nam, architecto saepe earum dolorem quae possimus tempore alias sed.'
        
    },
    {
        id:4,
        name:'AM Fahim',
        photo:<FaUserNurse/>,
        profession: 'Web Developer',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, odio corporis. Consectetur inventore consequatur atque voluptatem ipsa nam, architecto saepe earum dolorem quae possimus tempore alias sed.'
        
    },
    {
        id:5,
        name:'AM Fahim',
        photo:<FaUserTie/>,
        profession: 'Web Developer',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, odio corporis. Consectetur inventore consequatur atque voluptatem ipsa nam, architecto saepe earum dolorem quae possimus tempore alias sed.'
        
    },
    {
        id:6,
        name:'AM Fahim',
        photo:<FaUserNurse/>,
        profession: 'Web Developer',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, odio corporis. Consectetur inventore consequatur atque voluptatem ipsa nam, architecto saepe earum dolorem quae possimus tempore alias sed.'
        
    }
    
]
// Delivery Process Faq
export const DeliveryProcessData  = [
    {
        id:1,
        levelName:'HOW DO I PLACE AN ORDER?',
        description:'You can place your order at our booking form.'
    },
    {
        id:2,
        levelName:'HOW DO I KNOW THE PRICE OF MY DELIVERY?',
        description:'When you fill up the booking form you will see a summary of the total price of your order. Or you can calculate the price before booking your order.'
    },
    {
        id:3,
        levelName:'What if there are no drivers who accept my order?',
        description:'You can retry with the same amount of the order or add a tip to increase your chances to match with a driver.'
    },
    {
        id:4,
        levelName:'How does Ixpress mantain this application and what is our cause?',
        description:'A tracking link will appear in the form where you can track your order. This link will also be sent to you via email.'
    },
    {
        id:5,
        levelName:'My order is assigned to a driver. How do i track my order?',
        description:'If you need to make changes of your delivery order such as pick up timing etc. Just use your mobile phone and click on the tracking link given to you via email and sms. The contact number of the driver can be seen from the tracking page.'
    },
    {
        id:6,
        levelName:'I need to make some changes / contact the driver on my delivery. How do i do this?',
        description:'The service level you choose will reflect the pick up and delivery timing. It does not mean that you choose item is ready for pick up at 11am the driver will arrive at 11am sharp at your location. For example if you choose same day by 5pm the pick up will be between the available pick up time and 3pm and the item will be delivered by 5pm. Please see the pick up and delivery timings in this FAQ section below.'

    },
    {
        id:7,
        levelName:'My driver has not arrived yet?',
        description:'If you booked an order and the timer ends. You are suppose to see a tracking link or retry / tip button. If you do not see any of these it means the web browser you are using is not compatible. Please try again with a different browser.'
    },
    {
        id:8,
        levelName:'I tried booking but there was no tracking link provided',
        description:'If you are able to track your order it means your order is confirmed.'
    },
    {
        id:9,
        levelName:'What does Ixpress have to offer? Why should you choose us?',
        description:'Go back to the tracking page once delivery is completed and you will be able to comment and rate on his performance. All comments and reviews will be taken seriously.'
    }

];

// SERVICE FAQ DATA
export const ServiceFaqData = [
    {
        id:1,
        levelName:'What do we do?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    },
    {
        id:2,
        levelName:'Who are our drivers and riders?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    },
    {
        id:3,
        levelName:'What makes Fast Express efficient?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    },
    {
        id:4,
        levelName:'How does Ixpress mantain this application and what is our cause?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    },
    {
        id:5,
        levelName:'What does Ixpress have to offer? Why should you choose us?',
        description:'Every courier company will have an account through which the company will integrate what services they provide like from where to where they deliver courier, how much they charge etc.'
    }
    

];
// banner data items

export const bannerData = [
    {
        id: 1,
        img:'https://i.ibb.co/0fHwJtQ/Fast-express-banner-1.png'
    },
    {
        id: 2,
        img:'https://i.ibb.co/PDcGcx9/Fast-express-banner-2.png'
    },
    {
        id: 3,
        img:'https://i.ibb.co/SRTK6kn/Fast-express-banner-3.png'
    },
    {
        id: 4,
        img:'https://i.ibb.co/DzSzwDk/Fast-express-banner-4.png'
    }
]

export const supportData = [
    {
        id: 1,
        img: 'https://i.ibb.co/frJgXfj/Online-Support.jpg',
    }
]


export const users = [
    {
      id: 1,
      name: "Mr. Kuddus",
      address: "shahrasti",
      from: "Shahrasti",
      to: "Chandpur",
      status: "ofline"
    },
    {
      id: 2,
      name: "Mr. Kuddus",
      address: "shahrasti",
      from: "Shahrasti",
      to: "Chandpur",
      status: "active"
    },
    {
      id: 3,
      name: "Mr. Kuddus",
      address: "shahrasti",
      from: "Shahrasti",
      to: "Chandpur",
      status: "active"
    },
    {
      id: 4,
      name: "Mr. Kuddus",
      address: "shahrasti",
      from: "Shahrasti",
      to: "Chandpur",
      status: "active"
  
    },
    {
      id: 5,
      name: "Mr. Kuddus",
      address: "shahrasti",
      from: "Shahrasti",
      to: "Chandpur",
      status: "active"
    },
    {
      id: 6,
      name: "Mr. Kuddus",
      address: "shahrasti",
      from: "Shahrasti",
      to: "Chandpur",
      status: "active"
    }
  ]

  export const dashboard_nav = [
 
    {
        id:1,
        path: "/dashboard",
        pathname: "dashboard",
        icon:<VscDashboard/>,
        size:"text-2xl",
        bg:"border-r-2",
        role:["admin","user","merchant"]
    },
    {
        id:2,
        path: "/dashboard/manage-company-info",
        pathname: "Manage",
        icon:<VscGear/>,
        size:"text-2xl",
        role:["merchant"]
    },
    {
        id:3,
        path: "/dashboard/customer-list",
        pathname: "Customer-list",
        icon:<VscPerson/>,
        size:"text-2xl",
        role:["merchant"]
    },
    {
        id:4,
        path: "/dashboard/customer-order-list",
        pathname: "Manage customer order",
        size:"text-2xl",
        icon:<VscPackage/>,
        role:["merchant"]
    },
    {
        id:5,
        path: "/dashboard/account-report",
        pathname: "Report",
        size:"text-2xl",
        icon:<VscReport/>,
        role:["merchant"]
    },
    {
        id:54,
        path: "/dashboard/manage-delivery-man",
        pathname: "Manage delivery man",
        size:"text-2xl",
        icon:<VscReport/>,
        role:["merchant"]
    },
    {
        id:6,
        path: "/dashboard/add-review",
        pathname: "Add a review",
        icon:<VscRequestChanges/>,
        size:"text-2xl",
        role:["merchant"]
    }, 
    {
        id:7,
        path: "/dashboard/orderlist",
        pathname: "See your orders",
        icon:<VscPackage/>,
        size:"text-2xl",
        role:["user"]
    },
    {
        id:8,
        path: "/dashboard/payment-info",
        pathname: "Payment Details",
        icon:<MdPayment/>,
        size:"text-2xl",
        role:["user"]
    },
    {
        id:9,
        path: "/dashboard/add-review",
        pathname: "Add a review",
        icon:<VscStarFull/>,
        size:"text-2xl",
        role:["user"]
    } ,
    {
        id:10,
        path: "/dashboard/manage-setting",
        pathname: "Manage Setting",
        icon:<VscGear/>,
        size:"text-2xl",
        role:["user"]
    },
    {
        id:11,
        path: "/dashboard/userlist",
        pathname: "User list",
        icon:<VscPerson/>,
        size:"text-2xl",
        role:["admin"]
    },
    {
        id:12,
        path: "/dashboard/companylist",
        pathname: "Company list",
        icon:<VscOrganization/>,
        size:"text-xl",
        role:["admin"]
    },
    {
        id:13,
        path: "/dashboard/account-report",
        pathname: "Report",
        icon:<VscReport/>,
        size:"text-xl",
        role:["admin"]
    },
    {
        id:14,
        path: "/dashboard/manage-review",
        pathname: "Manage review",
        icon:<VscPreview/>,
        size:"text-xl",
        role:["admin"]
    },
    {
        id:15,

        path: "/dashboard/manage-setting",

        pathname: "Manage Setting",
        icon:<VscGear/>,
        size:"text-xl",
        role:["admin"]
    },
    {
        id:16,
        path: "/dashboard/manage-category",
        pathname: "Manage category",
        icon:<VscGear/>,
        size:"text-xl",
        role:["admin"]
    },
    {
        id:17,
        path: "/dashboard/manage-review",
        pathname: "Manage review",
        icon:<VscGear/>,
        size:"text-xl",
        role:["admin"]
    },

  ]