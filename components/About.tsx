const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          
          {/* User Avatar positioned below heading */}
          <div className="flex justify-center mb-12">
            <div className="w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              AG
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-semibold">Hello! I&apos;m Ashutosh Gola</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
  I&apos;m a <strong className="text-foreground">Software Engineer &amp; Full Stack Developer</strong> passionate about building scalable backend systems, real-time web applications, and cloud-native solutions. My engineering journey is rooted in hands-on application development—from high-concurrency event-driven platforms to fault-tolerant distributed systems using <strong className="text-foreground">Java, Node.js, React, Next.js, and MongoDB</strong>.
</p>
<p className="text-lg text-muted-foreground leading-relaxed">
  Beyond web development, I actively work with modern <strong className="text-foreground">DevOps and cloud technologies</strong>. I have practical experience containerizing microservices and automating deployment workflows using tools like <strong className="text-foreground">Docker, Kubernetes, GitLab CI/CD, and AWS</strong> to ensure high system reliability, low latency, and zero downtime under load.
</p>


            <div className="grid grid-cols-2 gap-6 mt-8 max-w-2xl mx-auto">
              <div>
                <h4 className="font-semibold text-lg mb-2">Email</h4>
                <p className="text-muted-foreground">ashutoshgola91@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Phone</h4>
                <p className="text-muted-foreground">+91 7895527454</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
