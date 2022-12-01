
// export interface Course {
//   title: string;
//   description: string;
//   category: string;
//   sections: string[];
//   dateCreated: Date;
//   dateUpdated: Date;
//   __v: number;
//   id: string;
//   _user: string;
//   coverImg: string;
//   published: boolean;
// }

import { StorageFile } from "./File";


export interface Main {
  status:  number;
  success: boolean;
  count:   number;
  data:    Course[];
}

export interface Course {
  id:         string;
  title:       string;
  category:    Category;
  coverImg?:   string;
  description: string;
  author:      Author;
  published:   boolean;
  modifiedAt:  Date;
  createdAt:   Date;
  __v:         number;
}

export interface Author {
  id:       string;
  firstName: string;
  lastName:  string;
}

export interface Category {
  id:   string;
  name:  string;
  icon?: string;
}



/* reference from backend
const courseSchema = new Schema({
      sections: string[];
      id: string;
      title: string;
      description: string;
      category: string;
      _user: string;
      dateCreated: Date;
      dateUpdated: Date;
      __v: number;
      coverImg: string;
      published: boolean;
});
*/