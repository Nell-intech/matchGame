console.log('hello World')
// DOM event listener 
document.addEventListener('DOMContentLoaded', () => {
    // array of images with a name and image src
    const cardArray = [
        {
            name: 'lux img 1',
            img: 'images/lux1.jpeg' // relative path to each image
        },
        {
            name: 'lux img 2',
            img: 'images/lux2.jpeg'
        },
        {
            name: 'lux img 3',
            img: 'images/lux3.jpeg'
        },
        {
            name: 'lux img 4',
            img: 'images/lux4.jpeg'
        },
        {
            name: 'glux img 5',
            img: 'images/lux5.webp'
        },
        {
            name: 'lux img 6',
            img: 'images/lux6.jpeg'
        },
        {
            name: 'lux img 7',
            img: 'images/lux7.jpeg'
        },
        {
            name: 'lux img 8',
            img: 'images/lux8.jpeg'
        },
        {
            name: 'lux img 9',
            img: 'images/lux9.jpeg'
        },
        {
            name: 'lux img 10',
            img: 'images/lux10.jpeg'
        },
        {
            name: 'lux img 11',
            img: 'images/lux11.jpeg'
        },
        {
            name: 'lux img 12',
            img: 'images/lux12.jpeg'
        },
        {
            name: 'lux img 13',
            img: 'images/lux13.jpeg'
        },
        {
            name: 'lux img 14',
            img: 'images/lux14.webp'
        },
        {
            name: 'lux img 15',
            img: 'images/lux15.jpeg'
        },
        // 15
        {
            name: 'lux img 1',
            img: 'images/lux1.jpeg' // relative path to each image
        },
        {
            name: 'lux img 2',
            img: 'images/lux2.jpeg'
        },
        {
            name: 'lux img 3',
            img: 'images/lux3.jpeg'
        },
        {
            name: 'lux img 4',
            img: 'images/lux4.jpeg'
        },
        {
            name: 'glux img 5',
            img: 'images/lux5.webp'
        },
        {
            name: 'lux img 6',
            img: 'images/lux6.jpeg'
        },
        {
            name: 'lux img 7',
            img: 'images/lux7.jpeg'
        },
        {
            name: 'lux img 8',
            img: 'images/lux8.jpeg'
        },
        {
            name: 'lux img 9',
            img: 'images/lux9.jpeg'
        },
        {
            name: 'lux img 10',
            img: 'images/lux10.jpeg'
        },
        {
            name: 'lux img 11',
            img: 'images/lux11.jpeg'
        },
        {
            name: 'lux img 12',
            img: 'images/lux12.jpeg'
        },
        {
            name: 'lux img 13',
            img: 'images/lux13.jpeg'
        },
        {
            name: 'lux img 14',
            img: 'images/lux14.webp'
        },
        {
            name: 'lux img 15',
            img: 'images/lux15.jpeg'
        }
        // 30
    ]
    // randomizing cardsx array using sort ad math.random
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
            card.setAttribute('src', 'images/luxBackground.png')
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
            cards[optionOneId].setAttribute('src', 'images/cream.png')
            cards[optionTwoId].setAttribute('src', 'images/cream.png')
            cardsWon.push(cardsChosen)
        } else {
            //if the carsd are not a match turn them back over allowing player to chose them again
            cards[optionOneId].setAttribute('src', 'images/luxBackground.png')
            cards[optionTwoId].setAttribute('src', 'images/luxBackground.png')
            alert(' Sorry, try again')
        }
        // if either of the two happen (card matches or does not match, clear the card array and cards chosen ID array)
        cardsChosen = []
        cardsChosenId = []
        //displaay results in browser to record how many times we have stored somethign in our cardsWon Array (1pt per match)
        resultDisplay.textContent = cardsWon.length * 3
        //if cards won === the length of cards array/2 alert user of completion of game
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = ' Congrats! you win'
            
            // //next level 3
            //             const playAgain = document.createElement('h2')
            //             playAgain.innerHTML="Next Level!";
            //             const heading = document.querySelector('.heading')
            //             heading.appendChild(playAgain)
            //             playAgain.style.border = "solid black"
            //             playAgain.addEventListener('click',()=>{
            //                 window.location.href="index2.html/";
            //             })

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
    //checkForMatch()
    flipCard()

})



