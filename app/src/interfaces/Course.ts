
export interface Course {
    id: string,
    title: string,
    description: string,
    cover_image: string,
    created_at: string,
    creator: {
      name: string,
      image: string,
      institutions: Array<string>
    }
  }