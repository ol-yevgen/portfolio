export interface IAboutReqTypes {
    data: IAboutPageTypes
}

export interface IAboutPageTypes {
    about: IAboutPageReqTypes
}

export interface IAboutPageReqTypes {
    aboutText: string[],
    aboutPhoto: string
}

export interface IAboutCVResType {
    cv: ICvDataType
}

export interface ICvDataType {
    id?: string
    aboutCV: string,
}

export interface ISkillsTextReq {
    data: ISkillsTextTypes
}

export interface ISkillsTextTypes {
    skillsText: ISkillsTextReqTypes
}

export interface ISkillsTextReqTypes {
    id?: string,
    skillsText?: string[],
}

export interface ISkillsIconsReqTypes {
    id?: string
    skillsIcons?: ISkillsIconTypes[]
    createdAt?: Date
    updatedAt?: Date
}

export interface ISkillsIconsListType {
    id?: string;
    skillsList: ISkillsIconTypes[];
}

export interface ISkillsIconTypes {
    id?: string;
    skillsLabel: string;
    skillsIcon: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IProjectsReqTypes {
    id?: string;
    projects?: IProjectTypes[];
    filters?: string[]
    message?: string
}

export interface IProjectTypes {
    id?: string;
    projectLabel: string
    projectImage: string
    projectStack: string
    projectDemo: string
    projectGit: string
    projectFilter: string
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IContactsPageTypes {
    contactsText: IContactsPageReqTypes
}

export interface IContactsPageReqTypes {
    id?: string
    contactsText: string[],
}

export interface IFormDataTypes {
    id?: string;
    name: string;
    subject: string;
    email: string;
    message: string;
}

export interface INavListTypes {
    id: string,
    link: string,
    label: string
}