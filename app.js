class tabs {
    constructor() {
        this.selected = 0;
        this.liArr = document.getElementsByClassName("nav")[0].querySelectorAll("span");
        this.textArr = document.querySelectorAll(".par");

        this.textArr[0].classList.remove("par")
        this.textArr[0].classList.add("selected");
        this.liArr[this.selected].classList.add("selectedTab");
        
        this.nav = document.querySelector(".nav");

        for (let i = 0; i < this.liArr.length; i++) {
            this.liArr[i].index = i;
        }

        //冒泡法实现，只监听外层元素
        // e.currentTarget 是外层元素，即nav ,  e.target is span by clicked
        this.nav.addEventListener("click", (e) => {
           const i = e.target.index;

           //disable the previous selected
           this.textArr[this.selected].classList.remove("selected");
           this.textArr[this.selected].classList.add("par");
           this.liArr[this.selected].classList.remove("selectedTab");

           //enable the current selected
           this.selected = i;
           this.textArr[i].classList.remove("par")
           this.textArr[i].classList.add("selected");
           this.liArr[i].classList.add("selectedTab");

        })
    }
}

new tabs();