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
              


              I&apos;m an aspiring full-stack web developer fueled by a passion for creating user-centered digital solutions and a curiosity for solving real-world problems through code. My development journey started with hands-on projects—both personal and academic—where I gained experience in modern web technologies such as React, Node.js, MongoDB, and Next.js.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
            In addition to web development, I am actively learning the fundamentals of DevOps and cloud-native development. This growing interest has helped me gain hands-on exposure to CI/CD pipelines, containerization, and deployment workflows, along with practical experience using tools like Docker, GitHub Actions, and cloud platforms to build, deploy, and monitor scalable applications.
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
