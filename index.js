function distanceFromHqInBlocks(distance){
    return Math.abs(distance - 42)
}
function distanceFromHqInFeet(distance){
    return Math.abs((distance-42)*264)
}
function distanceTravelledInFeet(start,destination){
    return Math.abs((destination-start)*264)

}
function calculatesFarePrice(start,destination){
    let distance = Math.abs((destination-start)*264)
    if(distance<400) return 0
    else if(distance<2000) return ((distance-400)*2)/100
    else if(distance<2500) return 25
    else return('cannot travel that far')


}