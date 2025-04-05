import Header from "@/components/Header"
import Bio from "@/components/Bio"
import About from "@/components/About"
import Projects from "@/components/projects"
import Writing from "@/components/writing"
import Contact from "@/components/Contact"
import Layout from "@/components/layout"
import { getAllPosts } from "@/lib/mdx"
import { projects } from "@/lib/data"

export default async function Home() {
  const posts = await getAllPosts()
  const recentPosts = posts.slice(0, 3)

  const recentProjects = projects.slice(0, 3)



  return (
    <Layout>
      <Header name="Avik Mukherjee" location="Earth" />

      <Bio
      intro="I am Avik, a 22 year old developer living in India. I am a self-taught developer who loves to code and build things."
      projectName="FormCraft AI"
      projectUrl="https://formcraftai-delta.vercel.app/"
      projectDescription="A minimalistic AI-powered application that helps you to create Google Forms with Ease."
      />

      <About
      paragraphs={[
        "I started my journey in the programming and development world at my 3rd Year, curious about various technologies and technology domains. I began with Python, then Java a little bit and then hit the ground with Javascript world which led me to build simple websites, which eventually evolved into creating products that solve real-world problems",
        "Over time, I am still learning and exploring new domains of technology, and I am currently focused on building products that are user-friendly and solve real-world problems. I am also interested in Application Development, and I am currently learning about it.",
      ]}
      />

  <Projects
    intro="Interactive experiments and projects exploring the intersection of design and technology."
    projects={recentProjects}
  />


      <Writing
      intro="I write about the things I am learning and somethimes my thoughts on various topics."
      posts={recentPosts.map((post) => ({
        title: post.title,
        date: post.date,
        slug: post.slug,
      }))}
      />

      <Contact
      socialLinks={[
        { name: "X", url: "https://x.com/avikm744" },
        { name: "GitHub", url: "https://github.com/Avik-creator" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/avik-mukherjee-8ab9911bb/" },
        {name: "Peerlist", url: "https://peerlist.io/avikmukherjee"}
      ]}
      email="avikm744@gmail.com"
      />
    </Layout>
  )
}

