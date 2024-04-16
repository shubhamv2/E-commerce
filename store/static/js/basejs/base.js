document.addEventListener('DOMContentLoaded',()=>{
    const categoryItems = document.querySelectorAll('.category-items');
    categoryItems.forEach((element)=>{
        
        element.addEventListener("mouseenter",()=>{
            const popup = element.nextElementSibling;
            popup.style.display= "flex";
            document.body.classList.add('popup-active');
            element.style.borderBottom = "2px solid crimson";
            element.style.color="crimson";
        })
        element.addEventListener("mouseleave",()=>{
            const popup = element.nextElementSibling;
            popup.style.display="none";    
            document.body.classList.remove('popup-active');
            element.style.color="#34495E";
            element.style.borderBottom = "2px solid transparent";
        })
        const popup = element.nextElementSibling;
        popup.addEventListener('mouseenter',()=>{
           
            popup.style.display= "flex";
            document.body.classList.add('popup-active');
            element.style.borderBottom = "2px solid crimson";
            element.style.color="crimson";

        })
        popup.addEventListener('mouseleave',()=>{
            popup.style.display= "none";
            document.body.classList.remove('popup-active');
            element.style.borderBottom = "2px solid transparent";
            element.style.color="#34495E";
        })
    })

})