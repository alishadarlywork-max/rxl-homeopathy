import fs from 'fs'
import path from 'path'

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
  readTime: string
  featured: boolean
  status: 'Published' | 'Draft'
  views: number
}

const BLOG_DATA_FILE = path.join(process.cwd(), 'data', 'blog-posts.json')

// Ensure data directory exists
const ensureDataDirectory = () => {
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Default blog posts
const defaultPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Understanding Homeopathy: A Natural Approach to Healing',
    excerpt: 'Discover the principles of homeopathy and how this natural healing system works to restore balance and promote wellness.',
    content: `
      <h2>What is Homeopathy?</h2>
      <p>Homeopathy is a holistic system of medicine that treats the individual as a whole, not just the symptoms. Developed over 200 years ago by German physician Samuel Hahnemann, homeopathy is based on the principle of "like cures like" - substances that cause symptoms in healthy people can cure similar symptoms in sick people when given in very small doses.</p>
      
      <h3>The Core Principles</h3>
      <p>Homeopathy operates on several fundamental principles:</p>
      <ul>
        <li><strong>Law of Similars:</strong> Like cures like - a substance that produces symptoms in a healthy person can treat those same symptoms in a sick person.</li>
        <li><strong>Minimum Dose:</strong> The smallest possible dose is used to stimulate the body's natural healing response.</li>
        <li><strong>Individualization:</strong> Each person is treated as a unique individual, considering their physical, mental, and emotional state.</li>
        <li><strong>Holistic Approach:</strong> The whole person is treated, not just isolated symptoms.</li>
      </ul>
      
      <h3>How Homeopathic Remedies Work</h3>
      <p>Homeopathic remedies are made from natural substances including plants, minerals, and animal products. These substances undergo a process called potentization, which involves serial dilution and succussion (vigorous shaking). This process is believed to enhance the healing properties while eliminating any toxic effects.</p>
      
      <h3>Benefits of Homeopathy</h3>
      <p>Homeopathy offers several advantages:</p>
      <ul>
        <li>Safe and gentle treatment with no harmful side effects</li>
        <li>Suitable for all ages, including infants and elderly</li>
        <li>Can be used alongside conventional medicine</li>
        <li>Addresses the root cause of illness, not just symptoms</li>
        <li>Cost-effective treatment option</li>
        <li>Promotes overall health and well-being</li>
      </ul>
      
      <h3>Conditions Treated</h3>
      <p>Homeopathy can effectively treat a wide range of acute and chronic conditions including:</p>
      <ul>
        <li>Respiratory conditions (asthma, allergies, colds)</li>
        <li>Digestive disorders (IBS, gastritis, constipation)</li>
        <li>Skin conditions (eczema, psoriasis, acne)</li>
        <li>Mental health issues (anxiety, depression, stress)</li>
        <li>Women's health (menstrual disorders, menopause)</li>
        <li>Children's health (behavioral issues, growth problems)</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Homeopathy represents a gentle, natural approach to healing that respects the body's innate ability to restore balance and health. By treating the whole person and addressing the root causes of illness, homeopathy offers a safe and effective alternative or complement to conventional medicine.</p>
    `,
    author: 'Dr. Sarah Smith',
    date: '2024-01-15',
    category: 'Homeopathy Basics',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    readTime: '5 min read',
    featured: true,
    status: 'Published',
    views: 1250
  },
  {
    id: 2,
    title: 'Managing Stress Naturally with Homeopathic Remedies',
    excerpt: 'Learn how homeopathic treatments can help reduce stress and anxiety without harmful side effects.',
    content: `
      <h2>Understanding Stress and Its Impact</h2>
      <p>Stress has become an inevitable part of modern life, affecting our physical and mental well-being. Chronic stress can lead to various health issues including anxiety, depression, insomnia, digestive problems, and weakened immune function.</p>
      
      <h3>Homeopathic Approach to Stress</h3>
      <p>Homeopathy offers a natural and holistic approach to managing stress by addressing both the symptoms and underlying causes. Unlike conventional treatments that may have side effects, homeopathic remedies work gently to restore emotional balance.</p>
      
      <h3>Common Homeopathic Remedies for Stress</h3>
      <ul>
        <li><strong>Ignatia:</strong> For acute grief, emotional shock, and mood swings</li>
        <li><strong>Arsenicum Album:</strong> For anxiety with restlessness and perfectionism</li>
        <li><strong>Natrum Muriaticum:</strong> For depression, emotional suppression, and social anxiety</li>
        <li><strong>Pulsatilla:</strong> For emotional sensitivity and dependency</li>
        <li><strong>Sepia:</strong> For hormonal stress and emotional exhaustion</li>
      </ul>
      
      <h3>Lifestyle Changes to Support Treatment</h3>
      <p>Along with homeopathic treatment, certain lifestyle modifications can enhance stress management:</p>
      <ul>
        <li>Regular exercise and physical activity</li>
        <li>Meditation and mindfulness practices</li>
        <li>Adequate sleep and rest</li>
        <li>Healthy diet with stress-reducing foods</li>
        <li>Time management and prioritization</li>
        <li>Social support and meaningful relationships</li>
      </ul>
    `,
    author: 'Dr. Sarah Smith',
    date: '2024-01-10',
    category: 'Mental Health',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    readTime: '4 min read',
    featured: false,
    status: 'Published',
    views: 890
  }
]

// Read blog posts from file
export const getBlogPosts = (): BlogPost[] => {
  try {
    ensureDataDirectory()
    
    if (!fs.existsSync(BLOG_DATA_FILE)) {
      // Create file with default posts if it doesn't exist
      fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify(defaultPosts, null, 2))
      return defaultPosts
    }
    
    const data = fs.readFileSync(BLOG_DATA_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return defaultPosts
  }
}

// Get a single blog post by ID
export const getBlogPost = (id: string): BlogPost | null => {
  const posts = getBlogPosts()
  return posts.find(post => post.id.toString() === id) || null
}

// Add a new blog post
export const addBlogPost = (post: Omit<BlogPost, 'id' | 'views'>): BlogPost => {
  const posts = getBlogPosts()
  const newId = Math.max(...posts.map(p => p.id), 0) + 1
  
  const newPost: BlogPost = {
    ...post,
    id: newId,
    views: 0
  }
  
  const updatedPosts = [...posts, newPost]
  
  try {
    ensureDataDirectory()
    fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify(updatedPosts, null, 2))
    return newPost
  } catch (error) {
    console.error('Error saving blog post:', error)
    throw error
  }
}

// Update a blog post
export const updateBlogPost = (id: string, updates: Partial<BlogPost>): BlogPost | null => {
  const posts = getBlogPosts()
  const postIndex = posts.findIndex(post => post.id.toString() === id)
  
  if (postIndex === -1) {
    return null
  }
  
  const updatedPost = { ...posts[postIndex], ...updates }
  posts[postIndex] = updatedPost
  
  try {
    ensureDataDirectory()
    fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify(posts, null, 2))
    return updatedPost
  } catch (error) {
    console.error('Error updating blog post:', error)
    throw error
  }
}

// Delete a blog post
export const deleteBlogPost = (id: string): boolean => {
  const posts = getBlogPosts()
  const filteredPosts = posts.filter(post => post.id.toString() !== id)
  
  if (filteredPosts.length === posts.length) {
    return false // Post not found
  }
  
  try {
    ensureDataDirectory()
    fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify(filteredPosts, null, 2))
    return true
  } catch (error) {
    console.error('Error deleting blog post:', error)
    throw error
  }
}

// Increment view count
export const incrementViewCount = (id: string): void => {
  const posts = getBlogPosts()
  const postIndex = posts.findIndex(post => post.id.toString() === id)
  
  if (postIndex !== -1) {
    posts[postIndex].views += 1
    
    try {
      ensureDataDirectory()
      fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify(posts, null, 2))
    } catch (error) {
      console.error('Error updating view count:', error)
    }
  }
}
