import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const { data: frontmatter, content } = matter(fileContents);

  return {
    slug,
    frontmatter,
    content
  };
}

export async function getPostWithHTML(slug) {
  const { frontmatter, content } = getPostData(slug);
  
  // Use remark to convert markdown into HTML with proper spacing
  const processedContent = await remark()
    .use(html, { sanitize: false }) // Disable sanitization to preserve more whitespace
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    frontmatter,
    contentHtml
  };
}

export function getAllPosts() {
  // Check if the directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const { frontmatter } = getPostData(slug);
      
      return {
        slug,
        ...frontmatter
      };
    });
  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
} 