
// export interface Course {
//   title: string;
//   description: string;
//   category: string;
//   sections: string[];
//   dateCreated: Date;
//   dateUpdated: Date;
//   __v: number;
//   _id: string;
//   _user: string;
//   coverImg: string;
//   published: boolean;
// }


export interface Main {
  status:  number;
  success: boolean;
  count:   number;
  data:    Course[];
}

export interface Course {
  _id:         string;
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
  _id:       string;
  firstName: string;
  lastName:  string;
}

export interface Category {
  _id:   string;
  name:  string;
  icon?: string;
}



/* reference from backend
const courseSchema = new Schema({
      sections: string[];
      _id: string;
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