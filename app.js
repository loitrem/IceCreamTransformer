let btn = {

    buttonText: [
        {
        btnText:"Page 1",
        btnClick: "pageOne()" 
        },
        {
        btnText:"Page 2", 
        btnClick: "pageTwo()" 
        },
        {
        btnText:"Page 3", 
        btnClick: "pageThree()" 
        },
    ]
}

let containers = {

        pageOne: {
            icecreamTypes: [{
                topImg: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/types-of-ice-cream-gelato.jpg?fit=728%2C524",
                bottomText: "<h2>Gelato</h2><p>Unlike American ice cream, gelato—a frozen dessert from Italy—is made with whole milk rather than cream and contains no eggs. As a result, this slow-churned treat takes on a denser, almost stretchy consistency. Gelato is available in a wide range of flavors, but some popular picks are cream, cioccolato (chocolate), stracciatella (vanilla with chocolate flecks) and pistacchio (pistachio).</p>"
            },
            {
                topImg: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/types-of-ice-cream-kulfi.jpg?fit=728%2C524",
                bottomText: "<h2>Kulfi</h2><p>This traditional Indian ice cream is made by slowly heating sweetened milk until the sugar caramelizes and the milk condenses; the mixture is then frozen in cone-shaped molds without first being whipped or churned. As a result, kulfi is denser and creamier than American ice cream, with a custard-like quality that lends itself well to being served on a stick. Kulfi is frequently flavored with aromatics like cardamom, rose or saffron and popular flavors include mango and pistachio.</p>"
            
            },
            {
                topImg: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/types-of-ice-cream-sherbet.jpg?fit=728%2C524",
                bottomText: "<h2>Sherbet</h2><p>Sherbet is a frozen treat made from fruit purée, plus a scant amount of dairy. Indeed, although sherbet is always made with some form of dairy—be it milk, cream or even buttermilk—the resulting dessert is distinct from ice cream in that it contains only 1 to 2 percent milkfat, as compared to the 10 percent milkfat found in the latter. As such, sherbet is only slightly creamy and considerably lighter than good ol’ fashioned ice cream.</p>"
            
            },
            {
                topImg: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/types-of-ice-cream-frozen-yogurt.jpeg?fit=728%2C524",
                bottomText: "<h2>Frozen Yogurt</h2><p>Sweet and mildly tangy, frozen yogurt is a relatively low-calorie soft serve-style dessert that consists of sweetened yogurt, along with other dairy or non-dairy ingredients…though if you were alive in the 90s, you already knew that. Although the fad has since died down, fro-yo remains a very popular dessert that can be found in a wide range of flavors, sprinkled with whatever your sweet tooth craves.</p>"
            
            }
        ]
    },
        pageTwo: {
            icecreamTypes: [{
                topImg: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/types-of-ice-cream-sorbet.jpeg?fit=728%2C524",
                bottomText: "<h2>Sorbet</h2><p>In contrast to sherbet, sorbet is a fruit-forward frozen treat with no dairy whatsoever. In fact, sorbet traditionally consists of only two ingredients—fruit puree and sugar—that are then churned and frozen in the same manner as ice cream. The absence of dairy accounts for the rough and flaky texture of sorbet, as well as the fact that it’s served not only as a dessert, but also as a palate cleanser between courses.</p>"
            },
            {
                topImg: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/types-of-ice-cream-soft-serve.jpg?fit=728%2C524",
                bottomText: "<h2>Soft Serve</h2><p>You won’t find this one in the frozen foods section of the grocery store, but wherever there’s a fair, carnival or ice cream truck, you’ll find folks lining up for soft serve. This type of ice cream is a rapidly churned blend of milk and sugar (no eggs) with a light and airy texture, perfect for swirling into a cone or cup—just be sure to make short work of it, because it will melt faster than ice cream.</p>"
            
            },
            {
                topImg: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/types-of-ice-cream-philadelphia-ice-cream.jpg?fit=728%2C524",
                bottomText: "<h2>Philadelphia Ice Cream</h2><p>As the name suggests, this type of ice cream hails from the City of Brotherly Love. Philadelphia ice cream is made without eggs for an end result that’s lighter and quicker to make than its traditional custardy counterpart, but every bit as flavorful. The lack of eggs results in a velvety, airy texture that really lets the flavors shine.</p>"
            
            },
            {
                topImg: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/types-of-ice-cream-rolled-ice-cream.jpg?fit=728%2C524",
                bottomText: "<h2>Rolled Ice Cream</h2><p>This type of ice cream hails from Thailand and is a popular street food throughout Southeast Asia. Here, the standard ingredients (milk, cream, sugar) are heated, aerated and rapidly cooled to produce Swiss roll-style ribbons of ice cream that can be served upright in a cup and finished with a wide variety of toppings. The process is fascinating to watch and the finished product tastes as good as it looks.</p>"
            
            }
        ]
    },
        pageThree: {
        icecreamTypes: [{
            topImg: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/types-of-ice-cream-snow-cream.jpg?fit=728%2C524",
            bottomText: "<h2>Snow Cream</h2><p>Unlike American ice cream, gelato—a frozen dessert from Italy—is made with whole milk rather than cream and contains no eggs. As a result, this slow-churned treat takes on a denser, almost stretchy consistency. Gelato is available in a wide range of flavors, but some popular picks are cream, cioccolato (chocolate), stracciatella (vanilla with chocolate flecks) and pistacchio (pistachio).</p>"
        },
        {
            topImg: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/types-of-ice-cream-italian-ice.jpg?fit=728%2C524",
            bottomText: "<h2>Italian Ice</h2><p>Derived from the Sicilian granita, this style of frozen dessert is dairy-free and has a lot in common with sorbet in terms of its ingredients and the way in which it is made. There is a slight difference in texture, however; Italian ice is, well, icier, while sorbet has a smoother mouthfeel. Bonus: Although fruit flavors are the most common options, chocolate Italian ice is indeed a thing.</p>"
        
        },
        {
            topImg: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/types-of-ice-cream-dondurma.jpg?fit=728%2C524",
            bottomText: "<h2>Dondurma</h2><p>Divinely creamy and dense enough you could eat it with a fork and knife, this Turkish treat is unlike any kind of ice cream you’ve ever tasted. Mastic—an (edible) organic glue made from the resin of the mastic tree—is the secret ingredient responsible for the elastic, taffy-like consistency of dondurma. This frozen dessert also comes in a wide variety of flavors…if you’re lucky enough to come across it, that is.</p>"
        
        },
        {
            topImg: "https://publish.purewow.net/wp-content/uploads/sites/2/2022/02/types-of-ice-cream-mochi.jpg?fit=728%2C524",
            bottomText: "<h2>Mochi</h2><p>Japan, the last stop on our global ice cream tour, is the country responsible for these cuties—petite rice cakes made with (yep, you guessed it) mochi dough and filled with frozen, creamy goodness. It’s like an ice cream sandwich, but with a satisfyingly chewy texture and decidedly more visual appeal.</p>"
        
        }],
    }
}

let container = document.querySelector('.container');
let topContainerPic = document.querySelector('.topContainerPic');
let bottomContainer = document.querySelector('.bottomContainer');
let mainText = document.querySelector('.mainText');
let menuButtonDiv = document.querySelector('.menuButtons');

btn.buttonText.forEach((btnContent) => {

    let newButton = document.createElement('button');

    newButton.setAttribute('class', 'menuBtn');
    newButton.innerHTML = btnContent.btnText;
    newButton.setAttribute('onclick', btnContent.btnClick);
  
    menuButtonDiv.append(newButton);

})

containers.pageOne.icecreamTypes.forEach((content) => {

    let topDiv = document.createElement('div');
    let bottomDiv = document.createElement('div');
    let topDivImg = document.createElement('img');

    container.append(topDiv);
    topDiv.append(topDivImg);
    container.append(bottomDiv);
    
    topDivImg.setAttribute('src', content.topImg);
    topDiv.setAttribute('class', "topDiv");
    bottomDiv.setAttribute('class', "btmDiv");
    bottomDiv.innerHTML = content.bottomText;
});

const pageOne = () => {

container.replaceChildren();

    containers.pageOne.icecreamTypes.forEach((content) => {

        let topDiv = document.createElement('div');
        let bottomDiv = document.createElement('div');
        let topDivImg = document.createElement('img');
    
        container.append(topDiv);
        topDiv.append(topDivImg);
        container.append(bottomDiv);
        
        topDiv.setAttribute('class', "topDiv");
        bottomDiv.setAttribute('class', "btmDiv");
        topDivImg.setAttribute('src', content.topImg);
        bottomDiv.innerHTML = content.bottomText;
    });

}

const pageTwo = () => {

    container.replaceChildren();

    containers.pageTwo.icecreamTypes.forEach((content) => {

        let topDiv = document.createElement('div');
        let bottomDiv = document.createElement('div');
        let topDivImg = document.createElement('img');
    
        container.append(topDiv);
        topDiv.append(topDivImg);
        container.append(bottomDiv);
        
        topDiv.setAttribute('class', "topDiv");
        bottomDiv.setAttribute('class', "btmDiv");
        topDivImg.setAttribute('src', content.topImg);
        bottomDiv.innerHTML = content.bottomText;
    });
    
}

const pageThree = () => {

    container.replaceChildren();

    containers.pageThree.icecreamTypes.forEach((content) => {

        let topDiv = document.createElement('div');
        let bottomDiv = document.createElement('div');
        let topDivImg = document.createElement('img');
    
        container.append(topDiv);
        topDiv.append(topDivImg);
        container.append(bottomDiv);
        
        topDiv.setAttribute('class', "topDiv");
        bottomDiv.setAttribute('class', "btmDiv");
        topDivImg.setAttribute('src', content.topImg);
        bottomDiv.innerHTML = content.bottomText;
    });
    
}

const textDesc = () => {

    if (mainText.innerHTML === "I bet you want to eat some right now!!!"){
         mainText.innerHTML = "Neapolitan ice cream! Dosen't it look good?";
    }
    else {
        mainText.innerHTML = "I bet you want to eat some right now!!!";
    }

}

const vanilla = () => {

    document.body.style.backgroundColor = 'white';

}

const chocolate = () => {

    document.body.style.backgroundColor = 'chocolate';

}

const strawberry = () => {

    document.body.style.backgroundColor = 'pink';

}