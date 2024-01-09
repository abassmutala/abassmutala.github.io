import { Project } from "../types";

export const projectsConfig: { projects: Project[] } = {
    projects: [
        {
            id: "1",
            name: "Firebase exporter", tagline: "Export firebase data to json or csv format",
            dates: "Jan 2024 - Present",
            type: "Website/Web app",
            link: "#",
            techStack: [
                {
                    name: "HTML",
                    // icon: "react",
                },
                { name: "CSS" },
                { name: "JavaScript", icon: "javascript" },
                { name: "Node JS", icon: "nodejs" },
                { name: "Express" },
                {
                    name: "Firebase",
                    icon: "firebase"
                },
            ],
            description: "Web application for exporting data from Firebase Firestore database to JSON, and converting that data into .xlsx format for viewing in a spreadsheet.",
            image: "/images/firebase_exporter.jpeg",
            // backgroundColor: "linear-gradient(120deg, #2d2b26, #4d122f)",//"#F1F5FD",
            // backgroundColor: "#FFFFFF",
            backgroundColor: "rgb(185 28 28)",
            textColor: "#FFFFFF",
            isMobileProject: false,
        },
        {
            id: "1",
            name: "Beauty Cosmetics", tagline: "E-commerce website for Beauty Cosmetics Manufacturing Ltd.",
            dates: "Nov 2023 - Present",
            type: "Website/Web app",
            link: "https://beautycosmeticsgh.com",
            techStack: [
                {
                    name: "React",
                    icon: "react",
                },
                {
                    name: "Next JS",
                    icon: "nextjs",
                },
                { name: "TypeScript", icon: "typescript" },
                { name: "Tailwind CSS", icon: "tailwind" },
            ],
            description:
                "Developing a website with e-commerce integrations for a cosmetic company. The site will display products based on categories and users will be able to purchase and pay right from the site.",
            image: "/images/beauty_cosmetics.png",
            // backgroundColor: "linear-gradient(120deg, #2d2b26, #4d122f)",//"#F1F5FD",
            // backgroundColor: "#FFFFFF",
            backgroundColor: "rgb(185 28 28)",
            textColor: "#FFFFFF",
            isMobileProject: false,
        },
        {
            id: "1",
            name: "MarkApp Forms", tagline: "Android app for event attendee regisrtration",
            dates: "Nov 2023",
            type: "Android app",
            link: "#",
            techStack: [
                {
                    name: "Flutter",
                    icon: "flutter",
                },
                { name: "Dart" },
                {
                    name: "Firebase",
                    icon: "firebase"
                },
            ],
            description:
                "An event management Android application used for logging attendee check-in at events and conferences.",
            image: "/images/markapp_forms.png",
            // backgroundColor: "linear-gradient(120deg, #2d2b26, #4d122f)",//"#F1F5FD",
            // backgroundColor: "#FFFFFF",
            backgroundColor: "rgb(185 28 28)",
            textColor: "#FFFFFF",
            isMobileProject: false,
        },
        {
            id: "2",
            name: "Africar API", tagline: "REST API for car rental platform",
            dates: "May 2023",
            type: "Backend project",
            link: "#",
            techStack: [
                {
                    name: "TypeScript",
                    icon: "typescript"
                },
                {
                    name: "Node JS",
                    icon: "nodejs"
                },
                { name: "Express JS" },
            ],

            description: "REST API for a car rental platform. Contains car manufacturer names, car features, and all towns/districts in Ghana.",
            image: "/images/africar_api.png",
            // backgroundColor: "linear-gradient(120deg, #4d122f, #253974)",//"#F1F5FD",
            backgroundColor: "rgb(22, 30 ,35)", //"rgb(05,07,26)",
            textColor: "#FFFFFF",
            isMobileProject: false,
        },
        {
            id: "3",
            name: "Glico Stores",
            dates: "Jul 2023 - Aug 2023",
            type: "Android app",
            link: "#",
            techStack: [
                {
                    name: "Flutter",
                    icon: "flutter"
                },
                { name: "Dart" },
                {
                    name: "Firebase",
                    icon: "firebase"
                },
                { name: "Google Maps API" },
                { name: "Provider" },
            ],
            description: "Android application for Insurance company that is to be used to log records of businesses in Ghana and later onboard them to an insurance policy.",
            image: "/images/glico_stores_android.png",
            // backgroundColor: "linear-gradient(120deg, #145750, #451d47)",//"#F1F5FD",
            backgroundColor: "#524C48",
            textColor: "#FFFFFF",
            isMobileProject: true,
        },
        {
            id: "4",
            name: "Africar", tagline: "Car rental platform",
            dates: "Nov 2023 - Feb 2024",
            type: "Website/Web app",
            link: "https://africar2023.vercel.app/",
            techStack: [
                {
                    name: "Next JS",
                    icon: "nextjs"
                },
                {
                    name: "React",
                    icon: "react"
                },
                {
                    name: "TypeScript",
                    icon: "typescript"
                },
                {
                    name: "Tailwind CSS",
                    icon: "tailwind"
                },
                {
                    name: "MySQL",
                    icon: "mysql"
                },
                {
                    name: "Redux",
                    icon: "redux"
                },
                {
                    name: "Jest",
                    icon: "jest"
                },
                { name: "Radix-UI" },
            ],
            description: "A car sharing/rental platform that allows car owners rent out their vehicles to prospective customers.",
            image: "/images/africar.png",
            // backgroundColor: "linear-gradient(120deg, #12677e, #145750)",//"#F1F5FD",
            backgroundColor: "#5A46F7",
            textColor: "#FFFFFF",
            isMobileProject: false,
        },
        {
            id: "5",
            name: "Blazon", tagline: "Movie streaming mobile app",
            dates: "Aug 2020",
            type: "iOS app",
            link: "#",
            techStack: [
                {
                    name: "Flutter",
                    icon: "flutter"
                },
                { name: "Dart" },
                {
                    name: "Firebase",
                    icon: "firebase"
                },
                { name: "TMDB API" },
                { name: "Provider" },
            ],
            description: "A side-project movie application that shows the information about a movie such as cast, ratings, reviews, etc.",
            image: "/images/blazon_ios.png",
            // backgroundColor: "linear-gradient(120deg, rgb(2, 53, 180), rgb(8, 128, 163))",//"#F1F5FD",
            backgroundColor: "rgb(2, 53, 180)",
            textColor: "#FFFFFF",
            isMobileProject: true,
        },
        {
            id: "6",
            name: "Bookiema", tagline: "Book stays in Ghana",
            dates: "Feb 2022 - Jun 2022",
            type: "Android app",
            link: "#",
            techStack: [
                {
                    name: "Flutter",
                    icon: "flutter"
                },
                { name: "Dart" },
                {
                    name: "Firebase",
                    icon: "firebase"
                },
                { name: "Google Maps API" },
                { name: "Provider" },
            ],
            description:
                "Designed a new onboarding experience to drive comprehension and improve engagement rates for new users – delivering on a company level initiative of increasing payment ready credentials in Hub (Orders and Payments) across Instagram, Messenger and Facebook.",
            image: "/images/bookiema_mobile.png",
            // backgroundColor: "linear-gradient(120deg, #3b3a37, #37172f)",
            backgroundColor: "#0F1A7C", //"#1D5BB1",//"T#F1F5FD",
            textColor: "#FFFFFF",
            isMobileProject: true,
        },
        {
            id: "7",
            name: "Access Bank Form", tagline: "Log event attendees",
            dates: "Jul 2023",
            type: "Android app",
            link: "#",
            techStack: [
                {
                    name: "Flutter",
                    icon: "flutter"
                },
                { name: "Dart" },
                {
                    name: "Firebase",
                    icon: "firebase"
                },
                { name: "Provider" },
            ],
            description:
                "Designed a new onboarding experience to drive comprehension and improve engagement rates for new users – delivering on a company level initiative of increasing payment ready credentials in Hub (Orders and Payments) across Instagram, Messenger and Facebook.",
            image: "/images/bookiema_mobile.png",
            // backgroundColor: "linear-gradient(120deg, #3b3a37, #37172f)",
            backgroundColor: "#0F1A7C", //"#1D5BB1",//"#F1F5FD",
            textColor: "#FFFFFF",
            isMobileProject: true,
        },
    ]
}