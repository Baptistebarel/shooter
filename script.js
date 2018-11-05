const shooter = {}

/**
 * Set up 
 */
shooter.$container = document.querySelector('.shooter')
shooter.$targets = document.querySelector('.targets')
shooter.$timer = document.querySelector('.timer')
shooter.$score = document.querySelector('.score .value')
shooter.score = 0

/**
 * Methods
 */

shooter.addTarget = () =>
{
    // create element
    const $target = document.createElement('div')
    $target.classList.add('target')
    $target.style.top = `${Math.random() * 100}%`
    $target.style.left = `${Math.random() * 100}%`
    shooter.$targets.appendChild($target)

    // listen to mouse enter
    $target.addEventListener('mouseenter', () => 
    {
        shooter.shootTarget($target)
    })
}

shooter.shootTarget = (_$target) => 
{
    //remove
    _$target.remove()

    //add target
    shooter.addTarget()

    // Increment score
    shooter.score++
    shooter.$score.textContent = shooter.score
}


shooter.addTarget()