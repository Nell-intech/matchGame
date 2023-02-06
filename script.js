console.log('hello World')
// DOM event listener 
document.addEventListener('DOMContentLoaded', () => {
    // array of images with a name and image src
    const cardArray = [
        {
            name: 'green apples',
            img: 'images/greenApples.jpeg' // relative path to each image
        },
        {
            name: 'green brotha',
            img: 'images/greenBrotha.jpeg'
        },
        {
            name: 'green eye',
            img: 'images/greenEye.jpeg'
        },
        {
            name: 'green heart',
            img: 'images/greenHeart.jpeg'
        },
        {
            name: 'green abstract art',
            img: 'images/greenAbstract.jpeg'
        },
        {
            name: 'green leaves',
            img: 'images/greenLeaves.jpeg'
        },
        {
            name: 'green lime',
            img: 'images/greenLime.jpeg'
        },
        {
            name: 'green avocados',
            img: 'images/greenAvocado.webp'
        },
        {
            name: 'green sista',
            img: 'images/greenSista.png'
        },
        {
            name: 'monstera - swiss cheese plant',
            img: 'images/greenMona.jpeg'
        },
        {
            name: 'green friends',
            img: 'images/greenFriends.jpeg'
        },
        {
            name: 'green swamp photo',
            img: 'images/greenSwamp.jpeg'
        },
        {
            name: 'green plant leaves',
            img: 'images/greenVessels.jpeg'
        },
        {
            name: 'mint green gaming controller',
            img: 'images/greenController.png'
        },
        {
            name: 'green color pencils assortment',
            img: 'images/greenColorpencils.jpeg'
        },
        // 15
        {
            name: 'green apples',
            img: 'images/greenApples.jpeg'
        },
        {
            name: 'green brotha',
            img: 'images/greenBrotha.jpeg'
        },
        {
            name: 'green eye',
            img: 'images/greenEye.jpeg'
        },
        {
            name: 'green heart',
            img: 'images/greenHeart.jpeg'
        },
        {
            name: 'green abstract art',
            img: 'images/greenAbstract.jpeg'
        },
        {
            name: 'green leaves',
            img: 'images/greenLeaves.jpeg'
        },
        {
            name: 'green lime',
            img: 'images/greenLime.jpeg'
        },
        {
            name: 'green avocados',
            img: 'images/greenAvocado.webp'
        },
        {
            name: 'green sista',
            img: 'images/greenSista.png'
        },
        {
            name: 'monstera - swiss cheese plant',
            img: 'images/greenMona.jpeg'
        },
        {
            name: 'green friends',
            img: 'images/greenFriends.jpeg'
        },
        {
            name: 'green swamp photo',
            img: 'images/greenSwamp.jpeg'
        },
        {
            name: 'green plant leaves',
            img: 'images/greenVessels.jpeg'
        },
        {
            name: 'mint green gaming controller',
            img: 'images/greenController.png'
        },
        {
            name: 'green color pencils assortment',
            img: 'images/greenColorpencils.jpeg'
        }
        // 30
    ]
    // randomizing cards array using sort ad math.random
    cardArray.sort(() => 0.5 - Math.random())

    //pick out element with the class name of flex out of html and store it into a variable
    const flex = document.querySelector('.flex');
    //results diplay
    const resultDisplay = document.querySelector('#result')
    //empty array for cards chosen
    let cardsChosen = []
    ////empty array for card id
    let cardsChosenId = []
    //array for stored chosen cards
    let cardsWon = []

    // looping over my card array and for each card create an image element, set the attribute of that image to src, link it to the image using the relative path (card back), give each item a data ID and add an event listener to listen of the cards have been clicked on. if it has then it will envoke the function flipCard, then append the cards as a child element of the flex container

    // function createBoard(){
    // cardArray.forEach(item,()=>{
    // console.log(item)
    // })
    // }

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src', 'images/greenBGI.svg')
            card.setAttribute('data-id', i) // attaches a data if to each card from 0-29
            card.addEventListener('click', flipCard)
            flex.appendChild(card)
            // card.style.border = "2px solid white"
        }
    }
    // one card is already picked

    // checking for matches
    function checkForMatch() { 
        //picking out all of the images created in function createboard, there are currently two values in cardsChosenArray and cardsChosenId array
        let cards = document.querySelectorAll('img')
        // get the first value in the array and store it in a constant variable
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        //chekcing for match
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('Match!')
            //if it is true then assign the cards a white png ("removing card")
            cards[optionOneId].setAttribute('src', 'images/dark-green.png')
            cards[optionTwoId].setAttribute('src', 'images/dark-green.png')
            cardsWon.push(cardsChosen)
        } else {
            //if the cars are not a match turn them back over allowing player to chose them again
            cards[optionOneId].setAttribute('src', 'images/greenBGI.svg')
            cards[optionTwoId].setAttribute('src', 'images/greenBGI.svg')
            alert(' Sorry, try again')
        }
        // if either of the two happen (card matches or does not match, clear the card array and cards chosen ID array)
        cardsChosen = []
        cardsChosenId = []
        //displaay results in browser to record how many times we have stored somethign in our cardsWon Array (1pt per match)
        resultDisplay.textContent = cardsWon.length
        //if cards won === the length of cards array/2 alert user of completion of game
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = ' Congrats! you win'
            // if the player wins this block will create an ancor element, set it's text content to text, save .heading into a variable 
            //called heading append the ancor elm to heading div, style itand set its attribute to the html page for level 2
            const levelTwo = document.createElement('a')
            levelTwo.textContent = "Next Level!";
            const heading = document.querySelector('.heading')
            heading.appendChild(levelTwo)
            levelTwo.setAttribute('href', 'levelTwo.html')
        }
    }

    //flip card
    function flipCard() {
        //setting a variable of card ID where we are getting the data id of the images created by the fucntion createboard
        let cardId = this.getAttribute('data-id')
        // pushing the card array inside of cards chosen based on the card array once the card is located we will get it's name set above in cardArray
        cardsChosen.push(cardArray[cardId].name)
        // push the cardid in a separate array
        cardsChosenId.push(cardId)
        // set the attribute allows you to add an image to the square picked from the previous function based on the card ID it holds
        this.setAttribute('src', cardArray[cardId].img)
        // since we only want to put two cards in the array we are using an if statement to say if the cards chosen array is equal to two envoke the function that checks for a match
        if (cardsChosen.length === 2) {
            // gives buuffer time so this even does not happen too quickly. (after 500 mili)
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
    checkForMatch()
    flipCard()

})



