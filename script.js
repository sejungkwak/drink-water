
const glasses = document.querySelectorAll('.glass');
const remainingWater = document.getElementById('remaining-water');
const drankWater = document.getElementById('drank-water');
const empty = document.querySelector('.empty');
const full = document.querySelector('.full');

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }


glasses.forEach((glass, index) => {
    glass.addEventListener('click', () => {
        

        if (glass.classList.contains('drank') === false) {

            for (var i = index; i >= 0 && !glasses[i].classList.contains('drank'); i--) {
                glasses[i].classList.add('drank');
                var num = (index + 1) * 12.5
                bigGlass();
            }

        } else {
            if (glass.nextElementSibling === null || glass.nextElementSibling.classList.contains('drank') === false) {
                glass.classList.remove('drank');
                
                var num = index * 12.5
                bigGlass();
            } else if (glass.nextElementSibling.classList.contains('drank') === true) {
                for (var i = index + 1; i < glasses.length && glasses[i].classList.contains('drank'); i++) {
                    glasses[i].classList.remove('drank');
                    var num = (index + 1) * 12.5
                    bigGlass();
                }
            }
           
        }

        function bigGlass() {
            
            empty.style.height = `${100 - num}%`
            remainingWater.textContent = `${scale(num, 0, 100, 2, 0)}L`
            full.style.height = `${num}%`
            drankWater.textContent = `${scale(num, 0, 100, 0, 100)}%`
        }

    })
})