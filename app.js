class tabs {
    constructor() {
        this.selected = 0;
        this.liArr = document.getElementsByClassName("nav")[0].querySelectorAll("span");
        this.textArr = document.querySelectorAll(".par");

        this.textArr[0].classList.remove("par")
        this.textArr[0].classList.add("selected");
        this.liArr[this.selected].classList.add("selectedTab");


        for (let i = 0; i < this.liArr.length; i++) {
            this.liArr[i].addEventListener("click", () => {
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
}

new tabs();