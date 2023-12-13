// verticle navbar

$(".sidebar ul li").on('click', function () {
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClass('active');
});

$('.open-btn').on('click', function () {
    $('.sidebar').addClass('active');

});


$('.close-btn').on('click', function () {
    $('.sidebar').removeClass('active');

})


items = [
    {
        id: 1,
        Name: "Nike Air Force 1 Mid QS",
        Category: "Kid's",
        Color: 1,
        Price: 2599,
        MRP: 6999,
        Tag: ["SustainableMaterials"],
        Size: ["6", "7", "8", "9", "11.5"],

        Img: "img/Nike Air Force 1 Mid QS.webp",
        Type: ["AirForce"],
        ColorTag: ["green"]
    },
    {
        id: 2,
        Name: "Nike Air Force 1 Mid React",
        Category: "Kid's",
        Color: 3,
        Price: 11956,
        MRP: 22569,
        Size: ["6", "7", "8", "10"],
        Tag: ["SustainableMaterials"],
        

        Img: "img/Nike Air Force 1 Mid React.webp",
        Type: ["AirForce"],
        ColorTag: ["white"]
    },
    {
        id: 3,
        Name: "Nike Air Force 1'07 LV8",
        Category: "Sport's",
        Color: 2,
        Price: 8556,
        MRP: 12857,
        Size: ["7", "8", "9", "11.5"],
        Tag: ["PromoExclusion"],

        Img: "img/Nike Air Force 1'07 LV8.webp",
        Type: ["AirForce"],
        ColorTag: ["black"]
    },
    {
        id: 4,
        Name: "Nike Air Max 90 GTX",
        Category: "Men's",
        Color: 3,
        Price: 15423,
        MRP: 20854,
        Tag: ["PromoExclusion"],
        Size: ["6", "7", "10", "11.5"],

        Img: "img/Nike Air Max 90 GTX.webp",
        Type: ["AirMax"],
        ColorTag: ["grey"]
    },
    {
        id: 5,
        Name: "Nike Air Max 90 SE",
        Category: "Men's",
        Color: 1,
        Price: 12723,
        MRP: 15953,
        Tag: ["InJust"],
        Size: ["7", "9", "10", "11.5"],

        Img: "img/Nike Air Max 90 SE.webp",
        Type: ["AirMax"],
        ColorTag: ["white"]
    },
    {
        id: 6,
        Name: "Nike Air Max 95 SE",
        Category: "Sport's",
        Color: 2,
        Price: 18723,
        MRP: 2953,
        Tag: ["InJust"],
        Size: ["6", "7", "8", "11.5"],

        Img: "img/Nike Air Max 95 SE.webp",
        Type: ["AirMax"],
        ColorTag: ["red"]
    },
    {
        id: 7,
        Name: "Nike Air Max 97 SE",
        Category: "Kid's",
        Color: 1,
        Price: 7723,
        MRP: 9253,
        Tag: ["InJust"],
        Size: ["6", "8", "9", "10"],

        Img: "img/Nike Air Max 97 SE.webp",
        Type: ["AirMax"],
        ColorTag: ["grey"]
    },
    {
        id: 8,
        Name: "Nike Air Max 97 SE 2",
        Category: "Men's",
        Color: 2,
        Price: 6323,
        MRP: 9274,
        Tag: ["InJust"],
        Size: [6, 8, 10, 11.5],

        Img: "img/Nike Air Max 97 SE.jpg",
        Type: ["AirMax"],
        ColorTag: ["yellow"]
    },
    {
        id: 9,
        Name: "Nike Air Max 270",
        Category: "Kid's",
        Color: 3,
        Price: 9323,
        MRP: 12274,
        Tag: ["SustainableMaterials"],
        Size: [8, 9, 10, 11.5],

        Img: "img/Nike Air Max 270.webp",
        Type: "AirMax",
        ColorTag: ["blue"]
    },
    {
        id: 10,
        Name: "Nike Air Max Flyknit Racer",
        Category: "Men's",
        Color: 2,
        Price: 48323,
        MRP: 52274,
        Tag: ["SustainableMaterials"],
        Size: [6, 7, 8, 10, 11.5],
        Img: "img/Nike Air Max Flyknit Racer.webp",
        Type: ["AirMax"],
        ColorTag: ["black"]
    },
    {
        id: 11,
        Name: "Nike Air Max TW",
        Category: "Kid's",
        Color: 1,
        Price: 23323,
        MRP: 28274,
        Tag: ["PromoExclusion"],
        Size: [7, 9, 10, 11.5],

        Img: "img/Nike Air Max TW.webp",
        Type: ["AirMax"],
        ColorTag: ["red"]
    },
    {
        id: 12,
        Name: "Nike Air More Uptempo '96",
        Category: "Men's",
        Color: 3,
        Price: 78451,
        MRP: 98456,
        Tag: ["SustainableMaterials"],
        Size: ["6", "8", "10", "11.5"],

        Img: "img/Nike Air More Uptempo '96.webp",
        Type: ["NikeDunk"],
        ColorTag: ["blue"]
    },
    {
        id: 13,
        Name: "Nike Air Pegasus 83 Premium",
        Category: "Men's",
        Color: 2,
        Price: 56451,
        MRP: 73456,
        Tag: ["InJust"],
        Size: [6, 7, 8, 9],

        Img: "img/Nike Air Pegasus 83 Premium.webp",
        Type: ["Pegasus"],
        ColorTag: ["grey"]
    },
    {
        id: 14,
        Name: "Nike Air Zoom Pegasus 39 Shield",
        Category: "Men's",
        Color: 1,
        Price: 24451,
        MRP: 29456,
        Tag: ["InJust"],
        Size: [6, 8, 9, 11.5],
        "Size6": 6,
        "Size7": 0,
        "Size8": 8,
        "Size9": 9,
        "Size10": 0,
        "Size11.5": 11.5,
        Img: "img/Nike Air Zoom Pegasus 39 Shield.webp",
        Type: ["ZoomRival"],
        ColorTag: ["black"]
    },
    {
        id: 15,
        Name: "Nike Blazer Low '77 Jumbo",
        Category: "Kid's",
        Color: 2,
        Price: 12451,
        MRP: 18456,
        Tag: ["InJust"],
        Size: [8, 9, 10, 11.5],

        Img: "img/Nike Blazer Low '77 Jumbo.webp",
        Type: ["Loafer"],
        ColorTag: ["white"]
    },
    {
        id: 16,
        Name: "Nike Blazer Mid '77 Premium",
        Category: "Men's",
        Color: 3,
        Price: 45451,
        MRP: 69456,
        Tag: ["InJust"],
        Size: [6, 8, 9, 10, 11.5],

        Img: "img/Nike Blazer Mid '77 Premium.webp",
        Type: ["Boots"],
        ColorTag: ["brown"]
    },
    {
        id: 17,
        Name: "Nike Invincible Run 2",
        Category: "Sport's",
        Color: 2,
        Price: 14451,
        MRP: 18456,
        Tag: "InJust",
        Size: [6, 7, 8, 11.5],

        Img: "img/Nike Invincible Run 2.webp",
        Type: ["Boots"],
        ColorTag: ["black"]
    },
    {
        id: 18,
        Name: "NikeDunk 8",
        Category: "Men's",
        Color: 2,
        Price: 19451,
        MRP: 25456,
        Tag: ["InJust"],
        Size: [6, 8, 9, 11.5],

        Img: "img/Nike Metcon 8.webp",
        Type: ["NikeDunk"],
        ColorTag: ["green"]
    },
    {
        id: 19,
        Name: "Nike Pegasus 39",
        Category: "Sport's",
        Color: 3,
        Price: 28451,
        MRP: 36456,
        Tag: "InJust",
        Size: [6, 7, 10, 11.5],

        Img: "img/Nike Pegasus 39.webp",
        Type: ["Pegasus"],
        ColorTag: ["orange"]
    },
    {
        id: 20,
        Name: "Nike React Infinity Run Flyknit 3",
        Category: "Sport's",
        Color: 1,
        Price: 45451,
        MRP: 52456,
        Tag: ["SustainableMaterials"],
        Size: [6, 7, 9, 10, 11.5],
        Img: "img/Nike React Infinity Run Flyknit 3.webp",
        Type: ["Loafer"],
        ColorTag: ["white"]
    },
    {
        id: 21,
        Name: "Aldo Girl's Keesha Boots",
        Category: "Women's",
        Color: 1,
        Price: 4544,
        MRP: 1524,
        Tag: ["SustainableMaterials"],
        Size: [6, 9, 10, 11.5],
        Img: "img/women boots 1.jpg",
        Type: ["Boots"],
        ColorTag: ["brown"]
    },
    {
        id: 76,
        Name: "Casual Chelsea Boots For Women  Girlss",

        Category: "Women's",
        Color: 1,
        Price: 2544,
        MRP: 4524,
        Tag: ["InJust"],
        Size: [6, 7, 8, 10, 11.5],
        Img: "img/women boots 2.jpg",
        Type: ["Boots"],
        ColorTag: ["black"]
    },
    {
        id: 22,
        Name: "Womens Western - Embellished Colour Blocked Sneakers w700",

        Category: "Women's",
        Color: 1,
        Price: 2544,
        MRP: 4524,
        Tag: ["InJust"],
        Size: [6, 7, 8, 10, 11.5],
        Img: "img/woomen dunk 1.jpg",
        Type: ["NikeDunk"],
        ColorTag: ["red"]
    },
    {
        id: 23,
        Name: "Womens WMNS Zoom Winflo 7 Running Shoe",

        Category: "Women's",
        Color: 1,
        Price: 3544,
        MRP: 4524,
        Tag: ["InJust"],
        Size: ["6", "7", "10", "11.5"],
        Img: "img/woomen dunk 2.jpg",
        Type: ["NikeDunk"],
        ColorTag: ["purple"]
    },
    {
        id: 24,
        Name: "Womens Ultraboost 22 W Running Shoe",

        Category: "Women's",
        Color: 1,
        Price: 3544,
        MRP: 4524,
        Tag: ["InJust"],
        Size: ["6", "7", "11.5"],
        Img: "img/woomen dunk 3.jpg",
        Type: ["NikeDunk"],
        ColorTag: ["black"]
    },
    {
        id: 25,
        Name: " Pegasus 40Women's Road Running Shoes (Wide)",


        Category: "Women's",
        Color: 1,
        Price: 3544,
        MRP: 4524,
        Tag: ["InJust"],
        Size: ["6", "7", "11.5"],
        Img: "img/woomen pegasus.webp",
        Type: ["Pegasus"],
        ColorTag: ["#E75480"]
    },
    {
        id: 26,
        Name: " Pegasus 50Women's  Running Shoes (Wide)",


        Category: "Women's",
        Color: 1,
        Price: 3544,
        MRP: 4524,
        Tag: ["InJust"],
        Size: ["6", "7", "11.5"],
        Img: "img/woomen pegasus2.webp",
        Type: ["Pegasus"],
        ColorTag: ["black"]
    },
    {
        id: 27,
        Name: " Women Comfortable Metallic Loafer Mules Wedges Casual & Formal Footwear",


        Category: "Women's",
        Color: 1,
        Price: 3544,
        MRP: 4524,
        Tag: ["InJust"],
        Size: ["6", "7", "11.5"],
        Img: "img/woomen loafer 1.jpg",
        Type: ["Loafer"],
        ColorTag: ["#B5651D"]
    },
    {
        id: 28,
        Name: " Sparx Women's Loafers woomen",


        Category: "Women's",
        Color: 1,
        Price: 3544,
        MRP: 4524,
        Tag: ["InJust"],
        Size: ["6", "7", "11.5"],
        Img: "img/woomen loafer 2.jpg",
        Type: "Loafer",
        ColorTag: ["#f76490"]
    },

]


document.addEventListener('DOMContentLoaded', function () {
    const categoryButtons = document.querySelectorAll('.category-filter');
    const itemsContainer = document.querySelector('#itemsContainer');
  if(!itemsContainer){
    return;
  }
    const featureFilterCheckboxes = document.querySelectorAll(".filter-container-checkbox .feature-filter");
    const tagfiltercheckbox=document.querySelectorAll(".filter-container-checkbox-two .tag-filter")
    const Sizefiltercheckbox=document.querySelectorAll(".filter-container-checkbox-Size .size-filter")
   const  ColorFilterDiv=document.querySelectorAll(".color-filter")
   
   renderItems(items);


   




    categoryButtons.forEach((button) => {
        button.addEventListener('click', updateCategoryFilter);
    });

    featureFilterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateFilter);
    });
    tagfiltercheckbox.forEach(checkbox => {
        checkbox.addEventListener('change', updateFilterTag);
    });
    Sizefiltercheckbox.forEach(checkbox => {
        checkbox.addEventListener('change', updateFilterSize);
    });
    ColorFilterDiv.forEach(checkbox => {
        checkbox.addEventListener('click', updateFilterColor);
    });


    function updateCategoryFilter(event) {
        const selectedCategory = event.target.getAttribute('data-category');
        categoryButtons.forEach((button) => {
            button.classList.toggle('selected-filter', button === event.target);
        });
        filterItems();
    }

    function updateFilter() {
        filterItems();
    }
    function updateFilterTag() {
        filterItems();
    }
    function updateFilterSize() {
        filterItems();
    }
    function updateFilterColor() {
        filterItems();
    }

    function filterItems() {
        const selectedCategory = getSelectedValue(categoryButtons);
        const selectedFeatures = getSelectedValues(featureFilterCheckboxes);
        const selectedTagFeatures=getSelectedValues(tagfiltercheckbox);
        const selectedSizeFeatures=getSelectedValues(Sizefiltercheckbox);
        const selectedColorFeatures=getSelectedValues(ColorFilterDiv);
       

        console.log(selectedColorFeatures);

        const filteredItems = items.filter(item => {
            const categoryMatch = selectedCategory === 'all' || item.Category === selectedCategory;
            const featureMatch = selectedFeatures.length === 0 || selectedFeatures.some(feature => item.Type.includes(feature));
            const featureMatchTag = selectedTagFeatures.length === 0 || selectedTagFeatures.some(feature => item.Tag.includes(feature));
            const featureMatchSize = selectedSizeFeatures.length === 0 || selectedSizeFeatures.some(feature => item.Size.includes(feature));
            
            const featureColorSize = selectedColorFeatures.length === 0 || selectedColorFeatures.some(feature => item.ColorTag.includes(feature));
            
            
            

            return categoryMatch && featureMatch && featureMatchTag && featureMatchSize && featureColorSize;
        });

        renderItems(filteredItems);
    }

    function getSelectedValue(elements) {
        const selectedElement = Array.from(elements).find(element => element.classList.contains('selected-filter'));
        return selectedElement ? selectedElement.getAttribute('data-category') : null;
    }

    function getSelectedValues(checkboxes) {
        return Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.getAttribute('data-type'));
    }
   



    function renderItems(items) {
        itemsContainer.innerHTML = '';
       
          
        items.forEach(item => {
            itemsContainer.innerHTML += `<div class="col-xl-2 col-md-4 col-sm-4 text-xl-center text-md-center text-sm-center text-center mb-4 shoes-item">
            <img src="${item.Img}" alt="" class="img-fluid">
                       <p class="text-danger "><span class="">${item.Tag}</span><br><span class=" fw-bold">${item.Category}</span></p>
                       <h4 class="fw-bolder ">${item.Name}</h4>
                       <h5 class="">${item.Type}</h5>
                   <p class=""><span class="text-decoration-line-through text-primary"> $${item.MRP}</span><span class="fw-bold disable-5"> Price : $${item.Price} </span> </p>
                       <p style="background-color: ${item.ColorTag}; width: 40px; height: 40px; border-radius: 100%;  border: 2px solid black; margin: auto;"></p>
                     <h5 class="fw-bold"> ${item.Size}  </h5>
                    <button class="btn btn-danger w-75" onclick="addToBag(${item.id})">Add to Bag</button>
            </div>`;
        });
    }

    function updateSearch() {
        const searchInput = document.querySelector('#searchBar').value.toLowerCase();
        const filteredItems = items.filter(item => {
            const nameMatch = item.Name.toLowerCase().includes(searchInput);
            const CategoryMatch = item.Category.toLowerCase().includes(searchInput);
            
        return nameMatch || CategoryMatch;
        });
    
        renderItems(filteredItems);
    }
    let searchEl = document.querySelector('#searchBar');
searchEl.addEventListener('input', updateSearch);
    

 
 

});





let bagItems;

onload()

function onload(){

    let bagItemsStr=localStorage.getItem('bagItems');
    bagItems=bagItemsStr ? JSON.parse(bagItemsStr) : [];
    
    displayBagIcon()
}



function addToBag(itemId){
   
        if(!bagItems.includes(itemId)){
            bagItems.push(itemId);
            localStorage.setItem('bagItems',JSON.stringify(bagItems));
            
            displayBagIcon()
        }else{
            alert("you have already added")
        }
        

 
}

function displayBagIcon(){
    let BagItemCount=document.querySelector('.bag-item-count');
 if(bagItems.length > 0){

     BagItemCount.innerText=bagItems.length;
     BagItemCount.style.visibility= "visible";
 }else{
    BagItemCount.style.visibility= "hidden";
 }
}










