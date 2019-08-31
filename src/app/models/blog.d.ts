interface IBlogs {
    blogs:IBlog[];
    } 
interface IBlog {
    title?: string;
    date?: string;
    description?: string;
    content?: string;
    id? : string;
    titleImage? : string;
    authorName? : string;
}
