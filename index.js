// Add skills' ranges

const skillItems = document.querySelectorAll(".tech-skill-item");

skillItems.forEach((item) => {
  const skillsItemName = document.createElement("p");
  skillsItemName.className = "skills-item-name";
  skillsItemName.innerText = item.innerText;

  const skillsItemRange = document.createElement("div");
  skillsItemRange.className = "skills-item-range";

  const skillsItemDegree = document.createElement("div");
  skillsItemDegree.className = "skills-item-degree";

  const degree = (Number(item.getAttribute("data-value")) * 100) / Number(item.getAttribute("data-max"));
  skillsItemDegree.style.width = `${degree}%`;

  skillsItemRange.append(skillsItemDegree);

  item.innerHTML = "";

  item.append(skillsItemName);
  item.append(skillsItemRange);
});
