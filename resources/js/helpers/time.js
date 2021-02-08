export const toHHMMSS = (sec_num) => {
    console.log(sec_num);
    // var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    console.log(Number(hours));
    console.log(`${Number(hours)?`${hours}:`:''}${minutes}:${seconds}`);
    return `${Number(hours)?`${hours}:`:''}${minutes}:${seconds}`;

}