const flipTheme = (theme) => {
    if (theme === "dark") {
      moon.style.display = "none";
      sun.style.display = "block";
      document.body.style.backgroundColor = "#050505"
      document.body.style.color = "#fff";
      
    } else {
      moon.style.display = "block";
      sun.style.display = "none";
      document.body.style.color = "#000";
      document.body.style.backgroundColor = ""
     
    }
  
    title.classList.toggle("dark");
    themeText.classList.toggle("dark");
    input.classList.toggle("dark");
    Array.from(cards).forEach((card) => card.classList.toggle("dark"));
    blog.classList.toggle("dark");
    login.style.color = "var(--electric)";
    stats.classList.toggle("dark");
  };
  
  moon.addEventListener("click", () => flipTheme("dark"));
  sun.addEventListener("click", () => flipTheme("light"));