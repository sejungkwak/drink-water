# Drink Water

![screen recording](https://media.giphy.com/media/8u9FovzL6DQ9ZLOIVH/giphy.gif)

#### project notes

1. HTML
- h: Drink Water
- p: Goal: 2Liters
- big div: p: "2L Remained" when the water filled "xL Remained" + "x%"
- p: Select how many glasses of water that you have drank
- small div*8: p:"250ml"

2. CSS
- background-color
- transition

3. JavaScript
- small div click event
- 1x small div > 12.5x% big div
- if .previousSibling is empty, it's filled too.


+ Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor

3. JavaScript
```
const smallCupst = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, inx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {

    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0 ) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330//this is big cup's total height}px`
        percentage.innerText = `${fullCups / totalCups *100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}
```