document.addEventListener('DOMContentLoaded', ()=>{

  //Animations
  const planetPurple = document.querySelector('.hero_content__planet--purple'),
    planetPink = document.querySelector('.hero_content__planet--pink'),
    planetBig = document.querySelector('.hero_content__planet--big'),
    ringSmall = document.querySelector('.hero_content__ring--small'),
    ringMiddle = document.querySelector('.hero_content__ring--middle'),
    ringBig = document.querySelector('.hero_content__ring--big'),
    playPauseBtn = document.querySelector('.hero_main__radio-img-wrapper')

  let ringsPlaying = true

  //Rings animations
  const tlRings = gsap.timeline({
    repeat: -1,
    // yoyo: true,
    defaults: { // children inherit these defaults
      duration: 0.1,
      ease: 'none',
    },
  })

  tlRings.add('start', 0)

  tlRings.to(ringBig, { //ringBig animation
    scale: 1.08,
    ease: 'power2',
  },
  'start')
  .to(ringBig, {
    scale: 1,
    duration: 0.5,
  },
  '>')
  .to(ringMiddle, { //ringMiddle animation
    scale: 1.04,
    ease: 'power2',
  },
  'start')
  .to(ringMiddle, {
    scale: 1.03,
    ease: 'power2',
  },
  '>'
  )
  .to(ringMiddle, {
    scale: 1.06,
    ease: 'power2',
  },
    '>'
  )
  .to(ringMiddle, {
    scale: 1,
    duration: 0.5
  },
    '>'
  )
  .to(ringSmall, { //ringSmall animation
    scale: 1.06,
    ease: 'power2',
  },
    'start')
  .to(ringMiddle, {
    scale: 1.03,
    ease: 'power2',
  },
    '>'
  )
  .to(ringMiddle, {
    scale: 1.05,
    ease: 'power2',
  },
    '>'
  )
  .to(ringMiddle, {
    scale: 1.02,
    ease: 'power2',
  },
    '>'
  )
  .to(ringMiddle, {
    scale: 1.04,
    ease: 'power2',
  },
    '>'
  )
  .to(ringMiddle, {
    scale: 1,
    duration: 0.3
  },
    '>'
  )

  playPauseBtn.addEventListener('click', ()=>{
    if (ringsPlaying) {
      tlRings.pause()
      ringsPlaying = false
      return
    }
    tlRings.resume() 
    ringsPlaying = true
    // return
  })
  

  const tlPlanets = gsap.timeline({
    repeat: -1,
    defaults: { // children inherit these defaults
      duration: 3,
      ease: 'none',
    },
  })

  const stepsPlanets = [
    { x: 650, y: 160, opacity: 0.5 },
    { x: 650, y: -20, opacity: 0.45 },
    { x: 0, y: 0, opacity: 0.4 }
  ]

  stepsPlanets.forEach(step => {
    tlPlanets.to(planetPurple, {
      x: step.x,
      y: -1 * step.y,
      opacity: step.opacity,
    })
    .to(planetPink, {
      x: -1 * step.x,
      y: step.y,
      opacity: step.opacity,
    },
      '<'
      )
    })
   
    gsap.to(planetBig, {
      duration: 0.5,
      opacity: 0.45,
      repeat: -1,
      yoyo: true,
    })
})