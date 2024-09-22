const blogData = {
  blogs: [
    {
      title: "The Future of Technology: Embracing Innovation",
      author: "Birel Team",
      date: "April 23, 2024",
      content:
        "The future is set to be defined by unprecedented technological advancements that promise to reshape every aspect of our lives. From artificial intelligence (AI) and machine learning to robotics and quantum computing, the rapid pace of innovation is transforming industries and society as a whole. AI, for instance, is not just improving efficiency but is also making significant strides in healthcare, finance, and education. The rise of smart cities, powered by the Internet of Things (IoT), is changing how we interact with urban environments, optimizing everything from traffic flow to energy consumption. As technology continues to evolve, our ability to adapt and embrace these changes will determine how successfully we navigate this new era. The fusion of human ingenuity with cutting-edge technology offers a world of possibilities, from solving complex global problems to enhancing everyday life. However, this also raises important questions about ethics, privacy, and the future of work. Automation and AI could lead to job displacement, but they could also create new opportunities for growth and innovation. The key to the future lies in balancing progress with responsibility, ensuring that technology serves the greater good while minimizing potential risks. The next few decades will likely see further breakthroughs in fields like biotechnology, renewable energy, and space exploration. Biotechnology may revolutionize medicine, with personalized treatments and gene editing potentially curing previously untreatable diseases. Meanwhile, renewable energy innovations will be crucial in combating climate change and ensuring a sustainable future. Space exploration, driven by both government and private enterprises, could open new frontiers for humanity, from mining asteroids to establishing colonies on other planets. Embracing these innovations will require collaboration, creativity, and a forward-thinking mindset.",
    },
    {
      title: "Sustainability and the Future: A Global Priority",
      author: "Birel Team",
      date: "May 19, 2024",
      content:
        "As we look to the future, one of the most pressing challenges humanity faces is the need for sustainability. Environmental degradation, climate change, and resource depletion are critical issues that must be addressed to secure a viable future for the planet. The effects of climate change are already being felt across the globe, with rising temperatures, extreme weather events, and loss of biodiversity threatening ecosystems and communities alike. To mitigate these impacts, it is essential to adopt sustainable practices that prioritize the health of our environment. Governments, businesses, and individuals all have a role to play in building a sustainable future. Governments must enact policies that promote renewable energy, reduce carbon emissions, and protect natural habitats. Businesses need to innovate and adopt green technologies, reducing waste and improving energy efficiency. On an individual level, lifestyle changes, such as reducing consumption, embracing a circular economy, and supporting eco-friendly products, can collectively make a significant impact. Sustainability is not just about reducing harm; it’s about creating systems that can thrive in harmony with nature. The future of agriculture, for example, could involve regenerative practices that restore soil health, reduce water usage, and enhance biodiversity. In urban areas, sustainable city planning can lead to greener, more livable spaces that prioritize public transportation, green spaces, and energy-efficient buildings. The transition to a more sustainable future will require cooperation at every level of society, as well as a shift in mindset that values long-term ecological health over short-term gains. Sustainability is not merely a trend but a necessity. As global populations grow and resource demands increase, it will become increasingly important to find ways to live within the planet’s limits. The future depends on our ability to innovate and work together to create a more resilient and sustainable world, where prosperity does not come at the cost of environmental degradation.",
    },
    {
      title: "The Future of Tech: When Internet Meets AI",
      author: "Rojhat Birel",
      date: "June 22, 2024",
      content:
        "We're living in exciting times. Technology is changing fast, and it's changing how we live, work, and play. Two big players in this change are the internet and artificial intelligence (AI). Let's talk about what happens when these two team up and what it means for our future. First, imagine your home getting smarter. Your fridge might order milk when you're running low. Your thermostat could learn when you like it warm or cool. This is already starting to happen, but it's going to get even better. AI will make our homes understand us better, almost like they can read our minds. Now, think about your health. In the future, you might wear a small device that keeps an eye on your body all the time. If something's not right, it'll let you know before you even feel sick. Doctors will use AI to find the best treatment for you, based on your own body and history. Learning is going to change too. Schools and universities might look very different. You could put on a special headset and suddenly be standing in ancient Rome for your history lesson. Or you might have a smart computer tutor that knows exactly how to explain things in a way you understand best. At work, AI will be like a super-smart helper. It'll do the boring jobs, leaving us humans to be creative and solve big problems. We might work with smart robots or have meetings with coworkers from around the world, feeling like we're in the same room even when we're far apart. Getting around will be easier and safer. Cars might drive themselves, guided by AI that can see and react faster than any human. This could mean fewer accidents and less time stuck in traffic. Entertainment will get more personal. Your TV might know exactly what show you'd like to watch next. You could step into your favorite movie and be part of the story, thanks to virtual reality powered by AI. But it's not all fun and games. As we put more of our lives online, keeping our information safe will be super important. AI will help protect us from online bad guys, but we'll need to be careful about what we share. All these changes sound exciting, but they also bring questions. Who gets to use this cool new tech? Is it fair if only some people have access? How do we make sure AI makes good choices? These are big questions we'll need to answer as we move forward. In the end, the future where the internet and AI come together looks bright. It could make our lives easier, healthier, and more fun. But it's up to us to make sure this future is good for everyone, not just a lucky few. As we step into this new world, it's important to stay curious and keep learning. The future is coming fast, and it's going to be an amazing ride!",
    },
  ],
};
blogData.blogs.forEach((blog) => {
  const blogSection = document.createElement("div");
  blogSection.className = "blogsec";

  blogSection.innerHTML = `
        <h3>${blog.title}</h3>
        <h6 class="autarea">${blog.author}, ${blog.date}</h6>
        <p class="textarea">${blog.content}</p>
        <button class="readmore">Continue Reading</button>

      `;
  document.body.appendChild(blogSection);
});
document.querySelectorAll(".readmore").forEach((button, index) => {
  button.addEventListener("click", () => {
    const blog = blogData.blogs[index];
    document.getElementById("popup-title").innerText = blog.title;
    document.getElementById(
      "popup-author"
    ).innerText = `${blog.author}, ${blog.date}`;
    document.getElementById("popup-content").innerText = blog.content;
    document.getElementById("popup").style.display = "block";
  });
});

document.querySelector(".close").addEventListener("click", () => {
  document.getElementById("popup").style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == document.getElementById("popup")) {
    document.getElementById("popup").style.display = "none";
  }
});
