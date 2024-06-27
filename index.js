// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    const hqBlock = 42;

    return Math.abs(block -hqBlock)
}
function distanceFromHqInFeet(block){
    const blocks = distanceFromHqInBlocks(block);
    const hqFeet = 264;

    return (blocks * hqFeet)

}
function distanceTravelledInFeet(startBlock, destinationBlock) {
    const blocksTravelled = Math.abs(destinationBlock - startBlock);
    const feetPerBlock = 264;
    return blocksTravelled * feetPerBlock;
  }
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }