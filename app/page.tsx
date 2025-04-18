import Image from "next/image";
import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <Image
        src="/me.png" // Make sure this image exists in your /public folder
        alt="Profile picture"
        width={250}
        height={250}
        className="rounded-2xl mb-8"
      />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I&apos;m Sean.
      </h1>
      <h2 className="text-gray-300 mb-4">
        Currently located in <s>Chicago</s> New York.
      </h2>
      <p className="mb-4">
        {`Welcome to my page. I'm a software engineer, and sometimes
        I build cool things. Check some of them out. `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
