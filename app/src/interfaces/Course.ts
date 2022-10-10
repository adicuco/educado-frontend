
export interface Course {
  title: string;
  description: string;
  category: string;
  sections: string[];
  dateCreated: Date;
  dateUpdated: Date;
  __v: number;
  _id: string;
  _user: string;
  coverImg: string;
  published: boolean;
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