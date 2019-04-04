/**
 * ENCOM Globe was created by Rob Scanlon.
 * Permission for personal usage granted. see: https://github.com/arscan/encom-globe/
 */
// TODO: Refactor jQuery parts

let globe = false
let globeCount = 0

/**
 * Creating ENCOM Globe
 */
const createGlobe = () => {
  let newData = []
  globeCount++

  /**
   * Detecking, if there is an old Globe to delete during initializing
   * a new Globe
   */
   $("#globe canvas").remove();
   if($("#globe-dd:checked").length){
       newData = data.slice();
   }

  /**
   * Globe configuration and initialization
   */
  globe = new ENCOM.Globe(
    window.innerWidth,
    window.innerHeight,
    {
      font: 'Inconsolata',
      data: newData, // copy the data array
      tiles: grid.tiles,
      baseColor: '#ffcc00',
      markerColor: '#ffcc00',
      pinColor: '#8FD8D8',
      satelliteColor: '#ff0000',
      scale: 1,
      dayLength: 28000,
      introLinesDuration: 2000,
      maxPins: 500,
      maxMarkers: 4,
      viewAngle: 0.1
    }
  )

  $("#globe").append(globe.domElement)
  globe.init(start)
}

/**
 * Changing Globe aspects when window resize
 */
const onWindowResize = () => {
  globe.camera.aspect = window.innerWidth / window.innerHeight
  globe.camera.updateProjectionMatrix()
  globe.renderer.setSize(window.innerWidth, window.innerHeight)
}

/**
 * Round number
 * @return {Number}
 */
const roundNumber = () => {
  return Math.round(num * 100) / 100
}

/**
 * Set projection to lat-lon codes
 * @param  {[type]} width
 * @param  {[type]} height
 * @param  {[type]} x
 * @param  {[type]} y
 * @return {Object}
 */
const projectionToLatLng = (width, height, x, y) => {
  return {
    lat: 90 - 180*(y/height),
    lon: 360*(x/width)- 180,
  }
}

const animate = () => {
  if (globe) globe.tick()
  lastTickTime = Date.now()
  requestAnimationFrame(animate)
}

const start = () => {
  if (globeCount == 1) animate()
}

createGlobe()

window.addEventListener( 'resize', onWindowResize, false )
