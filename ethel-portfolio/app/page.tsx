import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div>
        Hi, I’m Ethel, a software engineer graduate with hands-on experience in designing, developing, and
         maintaining software applications. I’m passionate about learning new technologies and solving 
         real-world problems through code.
      </div>
      <div>
      <img className="" src="/ethel-photos.jpeg" alt="profile photos" />
      </div>
      
    </div>
  );
}
