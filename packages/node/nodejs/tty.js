process.stdout.on('resize', () => {
  console.log(`screen size has changed`)
  console.log(`${process.stdout.columns}x${process.stdout.rows}`)
})