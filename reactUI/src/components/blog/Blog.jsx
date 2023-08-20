import ArticleWithImage from '../article/ArticleWithImage';
import { blogData_1, blogData_2, blogData_3, blogData_4, blogData_5 } from '../blog/BlogData';

const Blog = () => (
  // TO DO: Make it dynamic looping thru an array of data in the future
  <>
    <ArticleWithImage title={blogData_1?.title} image={blogData_1?.image} content={blogData_1?.content} />
    <ArticleWithImage title={blogData_2?.title} image={blogData_2?.image} content={blogData_2?.content} />
    <ArticleWithImage title={blogData_3?.title} image={blogData_3?.image} content={blogData_3?.content} />
    <ArticleWithImage title={blogData_4?.title} image={blogData_4?.image} content={blogData_4?.content} />
    <ArticleWithImage title={blogData_5?.title} image={blogData_5?.image} content={blogData_5?.content} />
  </>
);
export default Blog;
