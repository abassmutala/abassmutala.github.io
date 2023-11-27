import { Icons } from "../components/icons"

export type NavItem = {
    title: string
    href: string
    disabled?: boolean
}

export type TechItem = {
    icon?: keyof typeof Icons;
    name: string;
    description?: string;
}

export type Project = {
    id: string,
    name: string,
    tagline?: string,
    dates: string,
    type: "UI/UX Design" | "Website/Web app" | "Android app" | "iOS app" | "Backend project",
    techStack: TechItem[],
    description: string,
    image: string,
    backgroundColor: string,
    textColor: string,
    isMobileProject: boolean,
    link: string,
}

export type SocialLink = {
    icon?: keyof typeof Icons,
    name: string,
    link: string,
}

export type FooterConfig = {
    socialLinks: SocialLink[],
    chatLinks: SocialLink[]
}