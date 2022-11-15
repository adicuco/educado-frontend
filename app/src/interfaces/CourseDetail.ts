export interface CourseDetail {
    status:  number;
    success: boolean;
    data:    Data;
}

export interface Data {
    id:          ID;
    sections:    Section[];
    title:       string;
    category:    string;
    coverImg:    string;
    description: string;
    author:      Author;
    published:   boolean;
    modifiedAt:  Date;
    createdAt:   Date;
    __v:         number;
}

export interface Author {
    _id:       string;
    firstName: string;
    lastName:  string;
}

export enum ID {
    The635Fb5B9B2Fb6C4F49084682 = "635fb5b9b2fb6c4f49084682",
}

export interface Section {
    exercises:     Exercise[];
    _id:           string;
    parentCourse:  ID;
    title:         string;
    sectionNumber: number;
    description:   Description;
    createdAt:     Date;
    modifiedAt:    Date;
    __v:           number;
}

export enum Description {
    Fe = "fe",
    MotherLocker = "mother locker",
    VeryInterreseting = "Very interreseting",
}

export interface Exercise {
    _id:              string;
    modifiedAt:       Date;
    answers:          Answer[];
    __v:              number;
    content?:         Content;
    onWrongFeedback?: Content;
}

export interface Answer {
    _id:        string;
    text:       string;
    correct:    boolean;
    modifiedAt: Date;
}

export interface Content {
    type: string;
    url:  string;
}
