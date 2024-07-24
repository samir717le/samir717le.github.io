
class Project {
  constructor(title, description, url, leng, licence) {
    const section = document.getElementById("projects");
    const h3 = document.createElement("h3");
    const a = document.createElement("a");
    
    const p = document.createElement("p");
    
    if (description === "") {
     p.innerHTML = "No description"
    } else {
     p.innerHTML = description;
    }
    
    
    
    
    const i = document.createElement("i");
    
    if (leng === "html") {
     i.innerHTML = "🟫HTML";
    } else if (leng === "css") {
     i.innerHTML = "🔵css";
    } else if (leng === "js" || leng === "javascript") {
     i.innerHTML = "🟡 JavaScript";
    } else if (leng === "shell" || leng === "bash") {
     i.innerHTML = "🟢 Shell"
    }
    
    a.innerHTML = title;
    a.href = url;
    h3.appendChild(a);
    h3.className = "project";
    section.appendChild(h3);
    section.appendChild(p)
    section.appendChild(i)
    if (licence !== undefined) {
     const li = document.createElement("i");
     li.innerHTML = " " + licence + " License"; 
     section.appendChild(li)
    } else {
     const li = document.createElement("i");
     li.innerHTML = " No License";
     section.appendChild(li)
    }
  }
}


new Project("mcsh-by-samir717le", "MINECRAFT SERVER HOST EASY USING CLI", "https://github.com/samir717le/mcsh-by-samir717le", "shell");


new Project("termuxHakPass-PIN", "A Script For Termux That use ADB To Unlock Locked Android Phone Using USB| educational purposes only", "https://github.com/samir717le/termuxHakPass-PIN", "bash", "MIT");


new Project("node-bot-MCS", "", "https://github.com/samir717le/node-bot-mcs", "js", "ISC")