
export interface Course {
  id: string,
  title: string,
  description: string,
  _user: {
    googleID: string,
    email: string,
    //name: string,
    //image: string,
    //institutions: Array<string>
  }
  dateCreated: string,
  dateUpdated: string,
  coverImg: string,
  category: string,
  published: boolean,
  sections: [{type: string, ref: string}]
  }

  /* reference from backend
  const courseSchema = new Schema({
    title: String,
    description: String,
    _user: { type: Schema.Types.ObjectId, ref: "User" },
    dateCreated: Date,
    dateUpdated: Date,
    coverImg: String,
    category: String,
    published: Boolean,
    sections: [{ type: Schema.Types.ObjectId, ref: "Component" }],
  });
  */